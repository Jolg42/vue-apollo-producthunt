<template>
  <div class="pt-8 font-sans">
    <h1 class="font-semibold text-5xl text-orange-600">ProductHunt</h1>
    <h2 class="font-semibold text-xl text-gray-600 leading-none">
      The best new products, every day
    </h2>

    <select class="bg-white mt-10 px-2" v-model="days">
      <option value="0">Today</option>
      <option v-for="i in 30" :key="i" :value="i">
        <span v-if="i === 1">Yesterday</span>
        <span v-else>{{ i }} days ago</span>
      </option>
    </select>

    <ApolloQuery
      :query="require('../graphql/Posts.gql')"
      :variables="{ postedAfter, postedBefore }"
    >
      <template v-slot="{ result: { error, data }, isLoading }">
        <!-- Loading -->
        <div v-if="isLoading" class="loading apollo py-6 text-gray-600">
          Loading...
        </div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo py-6 text-gray-600">
          An error occurred
        </div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo py-6">
          <PostsList
            :postCounts="preparePostCounts(data.posts.edges)"
            :posts="data.posts.edges"
          />
        </div>
        <!-- No result -->
        <div v-else class="no-result apollo py-6 text-gray-600">
          No result :(
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  components: {
    PostsList: () => import("@/components/PostsList")
  },
  data() {
    return {
      days: 1 // yesterday shows better products by default :)
    };
  },
  computed: {
    postedAfter: function() {
      const date = new Date();
      date.setUTCDate(new Date().getDate() - this.days - 1);
      date.setUTCHours(24, 0, 0, -1);
      // Like "2019-12-30T23:59:59.999Z"
      return date.toISOString();
    },
    postedBefore: function() {
      const date = new Date();
      date.setUTCDate(new Date().getDate() - this.days);
      date.setUTCHours(24, 0, 0, -1);
      // Like "2019-12-31T23:59:59.999Z"
      return date.toISOString();
    }
  },
  methods: {
    preparePostCounts: function(posts) {
      const counts = [
        { name: "Posts", value: posts.length },
        { name: "Votes", value: this.votesCount(posts) },
        { name: "Comments", value: this.commentsCount(posts) },
        { name: "Makers", value: this.makersCount(posts) }
      ];

      return counts;
    },
    votesCount: function(posts) {
      return posts.reduce((count, post) => {
        return count + post.node.votesCount;
      }, 0);
    },
    commentsCount: function(posts) {
      return posts.reduce((count, post) => {
        return count + post.node.commentsCount;
      }, 0);
    },
    makersCount: function(posts) {
      return posts.reduce((count, post) => {
        return count + post.node.makers.length;
      }, 0);
    }
  }
};
</script>

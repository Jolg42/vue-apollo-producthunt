<template>
  <div>
    <div class="bg-white shadow-lg hover:shadow-md overflow-hidden">
      <a :href="post.url" target="_blank" rel="noopener noreferrer">
        <img
          class="h-56 object-cover w-full"
          :src="post.thumbnail.url"
          alt=""
        />
        <div class="h-56 p-4">
          <h3
            class="font-semibold hover:font-bold text-2xl mt-4 mb-1 text-orange-600 truncate"
          >
            {{ post.name }}
          </h3>
          <p class="mb-4 text-gray-600" v-if="post.votesCount">
            {{ post.votesCount }}
            <span>{{ post.votesCount > 1 ? "upvotes" : "upvote" }}</span>
          </p>
          <p class="text-xl">
            {{ post.tagline }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div class="flex flex-col items-center sm:px-4 md:px-8 lg:px-16 xl:px-32">
    <ul class="flex flex-row">
      <li v-for="count in postCounts" :key="count.label" :count="count">
        <div class="flex flex-col mx-2">
          <span class="text-3xl text-orange-600 font-bold uppercase">
            {{ count.value }}
          </span>
          <span class="text-gray-600 font-semibold uppercase leading-tight">
            {{ count.name }}
          </span>
        </div>
      </li>
    </ul>

    <ul class="flex flex-wrap my-8">
      <li
        class="mb-8 px-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
        v-for="post in posts"
        :key="post.id"
        :post="post.node"
        :is="'Post'"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  components: {
    Post: () => import("@/components/Post")
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    postCounts: {
      type: Array,
      required: true
    }
  }
};
</script>

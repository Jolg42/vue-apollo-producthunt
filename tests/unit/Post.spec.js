import { shallowMount } from "@vue/test-utils";
import Component from "@/components/Post.vue";

const post = {
  "id": "176300",
  "name": "Wireframer",
  "tagline": "Cool text for your wireframes",
  "url": "https://www.producthunt.com/posts/wireframer?utm_campaign=producthunt-api&utm_medium=api-v2&utm_source=Application%3A+PH+API+Explorer+%28ID%3A+9162%29",
  "votesCount": 606,
  "commentsCount": 32,
  "thumbnail": {
    "type": "image",
    "url": "https://ph-files.imgix.net/2a6550da-9822-4c95-88d4-095f01991c20?auto=format&fit=crop&h=250&w=450"
  },
  "makers": [
    {
      "id": "1581529"
    }
  ]
}

describe("Component", () => {
  test("renders correctly", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        post
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

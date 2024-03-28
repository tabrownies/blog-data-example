const { createApp } = Vue;

createApp({
  data() {
    return {
      posts: [
        {
          title: "About Functional Programming",
          published: "2024-03-14",
          readingTime: "5 min",
          tags: ["Functional Programming", "Coding"],
          author: 'Timothy Brown',
          image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Generic_banner_city_lights.jpg",
          likes: 25,
          body: `Functional programming is a paradigm of programming that has been growing in popularity in recent years. It is based on the idea that functions are first-class citizens in the language, meaning that they can be passed around as arguments to other functions, returned as values from other functions, and assigned to variables.`,
        },
        {
          title: "Intro to Vue",
          published: "2024-03-14",
          readingTime: "5 min",
          tags: ["Vue", "JavaScript", "Coding"],
          author: 'Timothy Brown',
          image: "https://getbranded.com/cdn/shop/collections/Generic_f5246ce9-ed96-4adb-8a0c-2fb67fd8c0bf.jpg?v=1671198188",
          likes: 12,
          body: `Vue is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning that you can start using it for small parts of your application and gradually scale up to a full-fledged single-page application if needed.

With Vue, you can easily create reusable components, handle data binding, and manage the state of your application. It provides a simple and intuitive syntax that allows you to declaratively define your UI and easily compose complex UIs from smaller components.

Vue also has a rich ecosystem of libraries and tools that can help you with tasks such as routing, state management, and testing. It has a vibrant community and extensive documentation, making it easy to find support and resources.

If you're new to Vue, this post will serve as a gentle introduction to the framework, covering the basics and giving you a taste of what Vue can do. By the end of this post, you'll have a good understanding of the core concepts of Vue and be ready to start building your own Vue applications.`,
        },
        {
          title: "The Basics of JavaScript",
          published: "2024-03-14",
          readingTime: "5 min",
          tags: ["JavaScript", "Coding"],
          author: 'Timothy Brown',
          image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Generic_banner_Night.JPG",
          likes: 254,
          body: `JavaScript is a high-level, interpreted programming language that is widely used for front-end and back-end web development. It is known for its versatility and flexibility, allowing developers to build a wide range of applications, from simple websites to complex web applications.

JavaScript is a core technology of the web, and it is supported by all modern web browsers. It is used to add interactivity and dynamic behavior to web pages, enabling features such as form validation, animations, and real-time updates.

In this post, we'll cover the basics of JavaScript, including its syntax, data types, control flow, and functions. By the end of this post, you'll have a good understanding of the fundamental concepts of JavaScript and be ready to start writing your own JavaScript code.`,
        },
      ],
    };
  },
}).mount("#app");

window.randomUnsplash = async function () {
  const random = Math.floor(Math.random() * 1000);
  const res = await fetch(
    `https://source.unsplash.com/random/1200x400?sig=${random}`
  );
  return res.url;
};

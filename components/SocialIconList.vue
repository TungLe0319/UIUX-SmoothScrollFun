<template>
  <ul class="col-span-2 flex flex-col justify-start gap-6 lg:col-span-5 lg:justify-end">
    <li v-for="item in items" class="">
      <a @mouseenter="handleCursor" @mouseleave="resetCursor" :href="item.link" class="flex items-center  space-x-4">
        <Icon :name="item.icon" class="text-3xl text-gray-600   transition-all duration-200" />
        <h6 class="font-medium text-gray-600"> {{ item.name }} </h6>
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>

//generate a list of social media icons with link, name, and icon 
const items =
  [
    {
      name: "Github",
      link: "https://github.com/TungLe0319",
      icon: "akar-icons:github-fill"
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/tung-le0319/"
      , icon: "akar-icons:linkedin-fill"
    },
    {
      name: "Twitter",
      link: "",
      icon: "ri:twitter-x-fill"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/tungusthefungus/?next=%2F",
      icon: "akar-icons:instagram-fill"
    },
    {
      name: "Email",
      link: "mailto:tung.le0319@gmail.com",
      icon: "akar-icons:envelope"
    },



  ]
</script>

<style scoped>
a{
  text-decoration: none;
  color: rgb(0, 0, 0);
  position: relative;
  font-size: 1.5rem;
  font-weight: 500;
  transition: 0.5s;
}

a:before {
  content: "";
  position: absolute;
  bottom: -2px;

  width: 0%;
  height: 4px;
  background-color: rgb(0, 0, 0);

  opacity: 0;
  transition: 0.5s;
}



a:hover:before {
  width: 100%;
  opacity: 1;
  transition: 0.3s;
}



</style>
<script setup>
defineProps({
  cat: {
    type: Object,
    required: true,
  },
});

import { capitalizeFirst } from '@/utils/stringHelpers';
</script>

<template>
  <div class="container">
    <img :src="cat.picture" />
    <h1>{{ capitalizeFirst(cat.name) }}</h1>
    <p>{{ cat.description }}</p>
  </div>
</template>

<style scoped>
  .container {
    width: 50%;
    height: 40vh;
    background-color: red;
    margin: auto;
    margin-bottom: 3%;
    text-align: center;
  }

  p {
    text-align: justify;
    font-size: 1.2em;
    text-justify: auto;
  }

  img {
    width: 25%;
    clip-path: circle();
  }
</style>

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
    margin: auto;
    margin-top: 1%;
    margin-bottom: 3%;
    text-align: center;
  }

  p {
    text-align: justify;
    font-size: 1.3em;
    text-justify: auto;
  }

  img {
    width: 25%;
    clip-path: circle();
  }

  h1 {
    font-size: 2.8em;
  }
</style>

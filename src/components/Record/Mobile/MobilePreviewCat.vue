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
    width: 95%;
    height: 40vh;
    margin: auto;
    margin-bottom: 12%;
    margin-top: 5%;
    text-align: center;
  }

  p {
    text-align: justify;
    font-size: 1.1em;
    text-justify: auto;
  }

  img {
    width: 40%;
    clip-path: circle();
  }
</style>

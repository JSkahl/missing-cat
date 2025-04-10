<script setup>
  import DefaultCatRecord from '@/components/Record/DefaultCatRecord.vue';
  import { cats } from '@/data/cats.js';
</script>

<template>
  <DefaultCatRecord :cat="cats.mia"/>
</template>

<style scoped></style>

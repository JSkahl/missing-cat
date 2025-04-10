<script setup>
  import DefaultCatRecord from '@/components/Record/DefaultCatRecord.vue';
  import { cats } from '@/data/cats';
</script>

<template>
  <h1>Astrid</h1>
  <DefaultCatRecord :cat="cats.astrid"/>
</template>

<style scoped></style>

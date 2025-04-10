<script setup>
  import DefaultCatRecord from '@/components/Record/DefaultCatRecord.vue';
  import { cats } from '@/data/cats';
</script>

<template>
  <DefaultCatRecord :cat="cats.astrid"/>
</template>

<style scoped></style>

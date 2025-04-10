<script setup>
import { DesktopCatRecord } from "./index.js";

defineProps({
  cat: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <DesktopCatRecord :cat="cat"/>
</template>

<style scoped></style>

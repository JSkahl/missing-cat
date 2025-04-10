<script setup>
import {
  MobilePreviewCat,
  MobileInfoCat,
  MobileContactOwner,
} from "../index.js";

defineProps({
  cat: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <MobilePreviewCat :cat="cat"/>
  <MobileInfoCat :cat="cat"/>
  <MobileContactOwner />
</template>

<style scoped></style>

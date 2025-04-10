<script setup>
import {
  DesktopPreviewCat,
  DesktopInfoCat,
  DesktopContactOwner,
} from "../index.js";

defineProps({
  cat: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <DesktopPreviewCat :cat="cat"/>
  <DesktopInfoCat :cat="cat"/>
  <DesktopContactOwner />
</template>

<style scoped></style>

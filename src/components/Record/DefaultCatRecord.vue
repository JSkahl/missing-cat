<script setup>
import { DesktopCatRecord } from "./index.js";
import { MobileCatRecord } from "./index.js";

import { useScreen } from "@/composables/index.js";
const { isMobile } = useScreen();

defineProps({
  cat: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <DesktopCatRecord v-if="!isMobile" :cat="cat"/>
  <MobileCatRecord v-else :cat="cat"/>
</template>

<style scoped></style>

<script setup>
import DesktopHome from "./Desktop/DesktopHome.vue";
import MobileHome from "./Mobile/MobileHome.vue";

import { useScreen } from "@/composables/index.js";
const { isMobile } = useScreen();
</script>

<template>
  <DesktopHome v-if="!isMobile"/>
  <MobileHome v-else/>
</template>

<style scoped></style>

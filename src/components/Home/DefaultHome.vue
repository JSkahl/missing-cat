<script setup>
import DesktopHome from "./index.js";
import MobileHome from "./index.js";

import { useScreen } from "@/composables/index.js";
const { isMobile } = useScreen();
</script>

<template>
  <DesktopHome v-if="!isMobile"/>
  <MobileHome v-else/>
</template>

<style scoped></style>

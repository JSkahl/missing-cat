<script setup>
import { capitalizeFirst } from "@/utils/stringHelpers";
import Cat from "icons/Cat.vue";
import TimerSandFull from "icons/TimerSandFull.vue";
import GenderMaleFemale from "icons/GenderMaleFemale.vue";
import Paw from "icons/Paw.vue";

defineProps({
  cat: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <hr />
    <h2>Informações</h2>
    <div class="row">
      <div class="pointer">
        <Paw class="icon" />
        <p>Nome</p>
      </div>
      <div class="info">
        <p>{{ capitalizeFirst(cat.name) }}</p>
      </div>
    </div>

    <div class="row">
      <div class="pointer">
        <TimerSandFull class="icon" />
        <p>Idade</p>
      </div>
      <div class="info">
        <p>{{ cat.age }}</p>
      </div>
    </div>

    <div class="row">
      <div class="pointer">
        <GenderMaleFemale class="icon" />
        <p>Sexo</p>
      </div>
      <div class="info">
        <p>{{ capitalizeFirst(cat.sex) }}</p>
      </div>
    </div>

    <div class="row">
      <div class="pointer">
        <Cat class="icon" />
        <p>Pelagem</p>
      </div>
      <div class="info">
        <p>{{ capitalizeFirst(cat.color) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50%;
  margin: auto;
  font-size: 1.3em;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.info {
  width: 20%;
  text-align: right;
}

.pointer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 20%;
}

.icon {
  width: 1.2em;
  height: 1.2em;
  display: inline-block;
}

h2 {
  text-align: center;
}
</style>

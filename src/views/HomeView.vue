<script setup>
import Cat from "icons/Cat.vue";
import { cats } from "data/cats.js";
import { capitalizeFirst } from "utils/stringHelpers.js";
</script>

<template>
  <div class="container">
    <div class="header">
      <Cat class="cat-icon" />
      <h2>Achou a minha gata?</h2>
    </div>
    <p>Por favor, confira se é uma das duas e entre em contato comigo</p>
    <div class="cats">
      <div class="astrid">
        <div class="picture">
          <RouterLink to="/astrid">page</RouterLink>
        </div>
        <h4>{{ capitalizeFirst(cats.astrid.name) }}</h4>
      </div>
      <div class="mia">
        <div class="picture">
          <RouterLink to="/mia">page</RouterLink>
        </div>
        <h4>{{ capitalizeFirst(cats.mia.name) }}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 40%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
}

.cat-icon {
  text-align: center;
  color: var(--black);
  background-color: green;
}

:deep(.material-design-icon__svg) {
  width: 10em;
  height: 10em;
}

.cats {
  display: flex;
  width: 90%;
  margin-top: 20%;
  background-color: blue;
  justify-content: space-evenly;
}
</style>

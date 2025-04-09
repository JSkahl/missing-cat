<script setup>
import Cat from "icons/Cat.vue";
import { cats } from "data/cats.js";
import { capitalizeFirst } from "utils/stringHelpers.js";
</script>

<template>
  <div class="container">
    <div class="header">
      <Cat class="cat-icon" />
      <h1>Achou a minha gata?</h1>
    </div>
    <p>
      <span>Por favor</span>, confira se é uma das duas e entre em contato
      comigo:
    </p>
    <div class="cats">
      <RouterLink to="/astrid">
        <div class="astrid">
          <div class="picture">
            <img :src="cats.astrid.picture" alt="Gata preta, Astrid" />
          </div>
          <h2>{{ capitalizeFirst(cats.astrid.name) }}</h2>
        </div>
      </RouterLink>
      <RouterLink to="/mia">
        <div class="mia">
          <div class="picture">
            <img :src="cats.mia.picture" alt="Gata preta e branca, Mia" />
          </div>
          <h2>{{ capitalizeFirst(cats.mia.name) }}</h2>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
}

.cat-icon {
  text-align: center;
}

:deep(.material-design-icon__svg) {
  width: 10em;
  height: 10em;
  margin-bottom: -10%;
}

.cats {
  display: flex;
  width: 100%;
  height: 40%;
  margin-top: 10%;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
}

.astrid, .mia {
  height: 140%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.picture {
  width: 40%;
  height: 100%;
}

img {
  width: 80%;
  margin-bottom: -8%;
  clip-path: circle();
  animation-name: card;
}

span {
  font-weight: bold;
}

p {
  text-align: center;
}
</style>

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
    <p>
      <span>Por favor</span>, confira se é uma das duas e entre em contato
      comigo:
    </p>
    <div class="cats">
      <div class="astrid">
        <div class="picture">
          <RouterLink to="/astrid">
            <img src="assets/img/astrid.png" alt="Gata preta, Astrid" />
          </RouterLink>
        </div>
        <h4>{{ capitalizeFirst(cats.astrid.name) }}</h4>
      </div>
      <div class="mia">
        <div class="picture">
          <RouterLink to="/mia">
            <img src="assets/img/mia.png" alt="Gata preta e branca, Mia" />
          </RouterLink>
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
  width: 90%;
  height: 100%;
  margin-top: 10%;
  justify-content: space-between;
  text-align: center;
}

.astrid:hover,
.mia:hover {
  height: 100%;
  border-radius: 10px 10px 0 0;
  animation-name: card;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  color: var(--white);

  & h4 {
    color: var(--white);
  }
}

@keyframes card {
  100% {
    background-color: var(--black);
  }
}

.picture {
  padding: 5%;
}

img {
  width: 60%;
  margin-bottom: -8%;
  clip-path: circle();
  animation-name: card;
}

span {
  font-weight: bold;
}
</style>

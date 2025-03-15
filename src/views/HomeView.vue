<script setup>
import Cat from "icons/Cat.vue";
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
        <div class="picture"></div>
        <h4>Astrid</h4>
      </div>
      <div class="mia">
        <div class="picture"></div>
        <h4>Mia</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 55%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
}

.cat-icon {
  color: var(--black);
  background-color: green;
}

:deep(.material-design-icon__svg) {
  width: 10em;
  height: 10em;
}
</style>

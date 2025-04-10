<script setup>
import { contact } from "@/data/contact";
import { capitalizeFirst } from "@/utils/stringHelpers";

import Account from "icons/Account.vue";
import Whatsapp from "icons/Whatsapp.vue";
import Email from "icons/Email.vue"
</script>

<template>
  <div class="container">
    <hr>
    <h2>Contato</h2>
    <div class="row">
      <div class="pointer">
        <Account class="icon" />
        <p>Nome</p>
      </div>
      <div class="info">
        <p>{{ capitalizeFirst(contact.name) }}</p>
      </div>
    </div>

    <div class="row">
      <div class="pointer">
        <Whatsapp class="icon" />
        <p>Número</p>
      </div>
      <div class="info">
        <p>{{ contact.number }}</p>
      </div>
    </div>

    <div class="row">
      <div class="pointer">
        <Email class="icon" />
        <p>Email</p>
      </div>
      <div class="info">
        <p>{{ contact.email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50%;
  margin: auto;
  margin-bottom: 1%;
  font-size: 1.3em;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.info {
  width: 25%;
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

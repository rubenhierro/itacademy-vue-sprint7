<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<nav>
  <ul>
    <li><RouterLink to="/inici">Inici</RouterLink></li>
    <li><RouterLink to="/">Pressupostos</RouterLink></li>
  </ul>
</nav>
    <RouterView />
</template>

<style>

</style>

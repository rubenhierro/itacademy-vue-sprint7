<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <RouterView />
<nav>
  <ul>
    <li><RouterLink to="/inici">Inici</RouterLink></li>
    <li><RouterLink to="/">Pressupostos</RouterLink></li>
  </ul>
</nav>
</template>

<style>

</style>

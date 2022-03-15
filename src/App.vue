<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<nav>
  <ul>
    <li><RouterLink to="/">Inici</RouterLink></li>
    <li><RouterLink to="/budgeds">Pressupostos</RouterLink></li>
  </ul>
</nav>
    <RouterView /> 
</template>

<style>

</style>

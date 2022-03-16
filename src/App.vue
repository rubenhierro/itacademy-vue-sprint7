<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="container">
  <nav class="navbar bg-light">
    <ul>
      <li><RouterLink to="/">Inici</RouterLink></li>
      <li><RouterLink to="/budgeds">Pressupostos </RouterLink></li>
    </ul>
  </nav>
      <RouterView /> 
</div>
</template>
<style>

a:link,
a:visited,
a:active {
  color: black;
  text-decoration: none;
}

a:hover {
  color: black;
  text-decoration: underline
}

li {
  float: left;
  list-style-type: none;
  margin: 10px;
  padding: 10px;
  font-size: larger;
}
</style>
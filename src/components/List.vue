<script>
import BudgedService from "../services/BudgedService";

export default {
  props: ['budgedList']
}
</script>

<template>
  <div v-for="budged of budgedList" class="card">
    <div class="card-body">
      <p>{{ budged.name }}</p>
    </div>
  </div>  
</template>

<style>

</style>
<script>
import Panel from './Panel.vue'
import BudgedService from '../services/BudgedService'
const budged = new BudgedService()

export default {
  components: {
    Panel,
  },  
  data(){
    return {
      web: false,
      webPages: 0,
      webLanguages: 0,
      seo: false,
      ads: false,
      total: 0,
    }
  },
  mounted() {
    this.$watch(
     (i) => [i.web, i.webPages, i.webLanguages, i.seo, i.ads],
     (val) => {
       this.total = budged.getTotalBudged(
         this.web,
         this.webPages,
         this.webLanguages,
         this.seo,
         this.ads
       )
     } 
    )
  },
}
</script>

<template>
  <h2>Què vols fer?</h2>
  <input type="checkbox" id="web" v-model="web" @click="budged">
  <label for="web">Una pàgina web (500€)</label> <br>
  <Panel  
    v-if="this.web === true"
      v-model:pages="webPages"
      v-model:languages="webLanguages"
  /> <br>
  <input type="checkbox" id="seo" v-model="seo">
  <label for="seo">Una consultoria SEO (300€}</label> <br>
  <input type="checkbox" id="ads" v-model="ads">
  <label for="ads">Una campanya de Google Ads (200€)</label> <br>
  <h3>{{ total }} €</h3>
</template>

<style>

</style>
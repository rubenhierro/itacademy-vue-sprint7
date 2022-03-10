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
  methods: {
    updatePages(val) {
      this.webPages = Number(val);
    },
    updateLanguages(val) {
      this.webLanguages = Number(val);
    },
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
  <label for="web">Una pàgina web (500€) {{ web }}</label> <br>
  <Panel  
    v-if="this.web === true"
    :pages="webPages"
    :languages="webLanguages"
    @updatePages="updatePages"
    @updateLanguages="updateLanguages"
  /> <br>
  <input type="checkbox" id="seo" v-model="seo">
  <label for="seo">Una consultoria SEO (300€) {{ seo }}</label> <br>
  <input type="checkbox" id="ads" v-model="ads">
  <label for="ads">Una campanya de Google Ads (200€) {{ ads }}</label> <br>
  <h3>{{ total }} €</h3>
</template>

<style>

</style>
<script>
import Panel from './Panel.vue'
import BudgedService from '../services/BudgedService'
import Budged from '../Budged'

const budgedService = new BudgedService()
const budgedList = new Array()

export default {
  components: {
    Panel,
  },  
  data(){
    return {
      name: null,
      customer: null,
      web: false,
      webPages: 0,
      webLanguages: 0,
      seo: false,
      ads: false,
      total: 0,
    }
  },
  methods: {
    addBudged() {
      const budged = new Budged(
        this.name,
        this.customer,
        this.web,
        this.webPages,
        this.webLanguages,
        this.seo,
        this.ads,
        this.total
        )

      if(!budgedService.exist(budgedList, budged)) {
        budgedList.push(budged);
      } else {
        budgedService.update(budgedList, budged)
      }
    }
  },
  mounted() {
    this.$watch(
     (i) => [i.web, i.webPages, i.webLanguages, i.seo, i.ads],
     (val) => {
       this.total = budgedService.getTotalBudged(
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
  <h2>Pressupost</h2>
  <form>
    <input type="text" v-model="name"> <br>
    <input type="text" v-model="customer"> <br>
    <input type="checkbox" id="web" v-model="web">
    <label for="web">Una pàgina web (500€)</label> <br>
    <Panel  
      v-if="this.web === true"
        v-model:pages="webPages"
        v-model:languages="webLanguages"
    /> <br>
    <input type="checkbox" id="seo" v-model="seo">
    <label for="seo">Una consultoria SEO (300€}</label> <br>
    <input type="checkbox" id="ads" v-model="ads">
    <label for="ads">Una campanya de Google Ads (200€)</label><br>
    <h3>{{ total }} €</h3>
    <button type="reset">Reset</button>
    <button type="submit" @click.prevent="addBudged">Afegir</button>
  </form>
</template>

<style>

</style>
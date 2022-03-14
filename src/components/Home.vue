<script>
import Panel from './Panel.vue'
import List from './List.vue'
import BudgedService from '../services/BudgedService'
import Budged from '../BudgedClass'

const budgedService = new BudgedService()

export default {
  components: {
    Panel,
    List
  },  
  data(){
    return {
      budgedList: new Array(),
      selectedItemId: null,
      modeEdit: false,
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
      if(this.modeEdit !== true) {
        if(!budgedService.exist(this.budgedList, budged)) {
          this.budgedList.push(budged);

        } else {
          budgedService.update(this.budgedList, budged)

        } 
      } else {
        budgedService.updateModeEdit(this.budgedList, this.selectedItemId, budged)
        this.modeEdit = false;
      }
      
      localStorage.setItem('budgedList', JSON.stringify(this.budgedList));
      this.reset();
    },
    editSelectedItem(id) {
      this.modeEdit = true;
      console.log(`mode edit: ${this.modeEdit}` )
      this.selectedItemId = id;
      this.name = this.budgedList[id].name
      this.customer = this.budgedList[id].customer
      this.web = this.budgedList[id].web
      this.webPages = this.budgedList[id].webPages
      this.webLanguages = this.budgedList[id].webLanguages
      this.seo = this.budgedList[id].seo
      this.ads = this.budgedList[id].ads
      this.total = this.budgedList[id].total
    },
    reset() {
      this.name = null,
      this.customer = null,
      this.web = false,
      this.webPages = 0,
      this.webLanguages = 0,
      this.seo = false,
      this.ads = false,
      this.total = 0
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
<div class="container">
  <div class="budged-container">
    <h2>Pressupost</h2>
    <h5 v-if="this.modeEdit === true" class="text-danger">Mode edició</h5>
    <form>
      <label for="name">Nom</label>
      <input type="text" id="name" v-model="name"> <br>
      <label for="costurmer">Client</label>
      <input type="text" id="costumer" v-model="customer"> <br>
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
      <!-- delete prevent -->
      <button type="submit" @click.prevent="addBudged">Afegir</button>
    </form>
  </div>
  
  <div class="list-container">
    <List 
      v-if="budgedList.length > 0"
      :budgedList="budgedList"
      @selected-item="editSelectedItem"
    />
  </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
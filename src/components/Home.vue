<script>
import Panel from './Panel.vue'
import List from './List.vue'
import BudgedService from '../services/BudgedService'
import Budged from '../BudgedClass'

const budgedService = new BudgedService()
let budged = new Budged()

budged = localStorage.hasOwnProperty('budged')
? JSON.parse(localStorage.getItem('budged'))
: {
    name: null,
    customer: null,
    web: false,
    webPages: 1,
    webLanguages: 1,
    seo: false,
    ads: false,
    total: 0,
};

export default {
  components: {
    Panel,
    List
  },  
  data(){
    return {

      budgedList: 
      localStorage.hasOwnProperty('budgedList')
      ? JSON.parse(localStorage.getItem('budgedList'))
      : [],
      selectedItemId: null,
      modeEdit: false,
      name: budged.name,
      customer: budged.customer,
      web: budged.web,
      webPages: budged.webPages,
      webLanguages: budged.webLanguages,
      seo: budged.seo,
      ads: budged.ads,
      total: budged.total,
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
      localStorage.removeItem('budged');
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
  },
  mounted() {

    this.$watch(
     (i) => [i.name, i.customer, i.web, i.webPages, i.webLanguages, i.seo, i.ads],
     (val) => {
       this.total = budgedService.getTotalBudged(
         this.web,
         this.webPages,
         this.webLanguages,
         this.seo,
         this.ads
       )
       
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
      
      localStorage.setItem('budged', JSON.stringify(budged));

       this.$router.replace({
         query: {
           web: this.web,
           webPages: this.webPages,
           webLanguages: this.webLanguages,
           seo: this.seo,
           ads: this.ads
         }
       })
     } 
    )
  },
}
</script>

<template>
<div class="home">
  <div class="budged-container">
    <h2>Pressupost</h2>
    <h5 v-if="this.modeEdit === true" class="text-danger">Mode edició</h5>
    <form @submit="addBudged">
      <label for="name">Nom</label>
      <input type="text" id="name" v-model="name" required> <br>
      <label for="costurmer">Client</label>
      <input type="text" id="costumer" v-model="customer" required> <br>
      <input type="checkbox" id="web" v-model="web">
      <label for="web">Una pàgina web (500€)</label> <br>
      <Panel  
        v-if="this.web === true"
          v-model:pages="webPages"
          v-model:languages="webLanguages"
      />
      <input type="checkbox" id="seo" v-model="seo">
      <label for="seo">Una consultoria SEO (300€}</label> <br>
      <input type="checkbox" id="ads" v-model="ads">
      <label for="ads">Una campanya de Google Ads (200€)</label><br>
      <h3 id="total">{{ total }} €</h3>
      <button type="reset">Reset</button>
      <button type="submit">Guardar</button>
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

<style>
.home {
  margin: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

input, button {
  margin: 5px;
}

#total {
  margin-top: 10px;
}
</style>
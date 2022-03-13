<script>
import BudgedService from "../services/BudgedService";

const budgedService = new BudgedService()

export default {
  props: ['budgedList'],
  data(){
    return {
      isNameSortetAsc: false,
      isDateSortetAsc: false,
      obj:[
        {
          name: 'ruben'
        },
        {
          name: 'joan'
        },
        {
          name: 'maria'
        },
        {
          name: 'antonia'
        }
      ],
    }
  },
  methods: {
    sortByName() {
      // const arr = JSON.parse(JSON.stringify(this.obj))
      budgedService.sortByName(this.budgedList, this.isNameSortetAsc)
      this.isNameSortetAsc = !this.isNameSortetAsc
    },

    sortByDate() {
      budgedService.sortByDate(this.budgedList, this.isNameSortetAsc)
      this.isDateSortetAsc = !this.isDateSortetAsc
    },
    sortByDefault() {
      budgedService.sortByDefault(this.budgedList)
    },
  }
}
</script>

<template>
  <span>Ordena per:</span>
  <button @click="sortByName">Nom</button>
  <button @click="sortByDate" >Data</button>
  <button @click="sortByDefault" >Reset</button>
  <div v-for="budged of budgedList" class="card">
    <div class="card-body">
      <p>Nom: {{ budged.name }} - Client: {{ budged.customer }} - {{ budged.date }} - Total {{ budged.total }}€</p>
    </div>
  </div>  
</template>

<style>

</style>
<script>
import BudgedService from "../services/BudgedService";

const budgedService = new BudgedService()

export default {
  props: ['budgedList'],
  emits: ['selected-item'],
  data(){
    return {
      isNameSortetAsc: false,
      isDateSortetAsc: false,
      budgedQueryList: new Array()
    }
  },
  methods: {
    sortByName() {
      budgedService.sortByName(this.budgedList, this.isNameSortetAsc)
      this.isNameSortetAsc = !this.isNameSortetAsc
    },

    sortByDate() {
      budgedService.sortByDate(this.budgedList, this.isNameSortetAsc)
      this.isDateSortetAsc = !this.isDateSortetAsc
    },
    sortByDefault() {
      budgedService.sortByDefault(this.budgedList)
      this.budgedQueryList = []
      this.isDateSortetAsc = false
      this.isNameSortetAsc = false
    },

    search(query) {
      this.budgedQueryList = budgedService.search(this.budgedList, query)
      console.log(this.budgedQueryList)
    },

    deleteItem(index) {
      budgedService.delete(this.budgedList, index)
      localStorage.setItem('budgedList', JSON.stringify(this.budgedList));
    }
  }
}
</script>

<template>
  <form action="">
    <label for="search">Cercar:</label>
    <input type="text" id="search" @input="search($event.target.value)">
    <button type="reset" @click="this.budgedQueryList = []" >x</button>
  </form>
  <span>Ordena per:</span>
  <button @click="sortByName">Nom</button>
  <button @click="sortByDate" >Data</button>
  <button @click="sortByDefault" >Reset</button>
  <div v-for="(budged, key) of budgedQueryList.length > 0 ? budgedQueryList: null || budgedList" class="card">
    <div class="card-body">
      <span>Nom: {{ budged.name }} - Client: {{ budged.customer }} - {{ budged.date }} - Total {{ budged.total }}€
      <button @click="$emit('selected-item', key)">edit</button>
      <button @click="deleteItem(key)">delete</button>
      </span>
    </div>
  </div>  
</template>

<style>

</style>
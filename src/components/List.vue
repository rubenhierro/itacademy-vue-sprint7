<script>
import BudgedService from "../services/BudgedService";

const budgedService = new BudgedService()

export default {
  props: ['budgedList'],
  emits: ['selected-item'],
  data() {
    return {

      budgedQueryList: [...this.budgedList],
      isNameSortedAsc: true,
      isDateSortedAsc: true,
    }
  },
  methods: {
    sortByName() {
      budgedService.sortByName(this.budgedQueryList, this.isNameSortedAsc)
      this.isNameSortedAsc = !this.isNameSortedAsc
    },

    sortByDate() {
      budgedService.sortByDate(this.budgedQueryList, this.isDateSortedAsc)
      this.isDateSortedAsc = !this.isDateSortedAsc
    },
    sortByDefault() {
      this.budgedQueryList = [...this.budgedList]
      this.isDateSortedAsc = true
      this.isNameSortedAsc = true
    },

    search(query) {
      this.budgedQueryList = budgedService.search(this.budgedQueryList, query)
    },
  }
}
</script>

<template>
  <div class="list">
    <div class="options">
      <form>
        <label for="search">Cercar:</label>
        <input type="text" id="search" @input="search($event.target.value)" />
        <button type="reset" @click="this.budgedQueryList = []">x</button>
      </form>
      <div class="filters">
        <span>Ordena per:</span>
        <button @click="sortByName">Nom</button>
        <button @click="sortByDate">Data</button>
        <button @click="sortByDefault">Reset</button>
      </div>
    </div>
    <hr />
    <div
      v-for="(budged, key) of budgedQueryList.length > 0 ? budgedQueryList : null"
      class="card list-items"
    >
      <div class="card-body">
        <span>
          Nom: {{ budged.name }} -
          Client: {{ budged.customer }} -
          Data: {{ budged.date }} -
          Total {{ budged.total }}€
          <button
            @click="$emit('selected-item', key)"
          >edit</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.list {
  display: flex;
  flex-direction: column;
}
.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.filters {
  display: flex;
  align-items: center;
}

hr {
  border: 1px solid;
}
input,
button {
  margin: 5px;
}
</style>
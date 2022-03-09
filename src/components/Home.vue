<script>
export default {
  data(){
    return {
      total: 0,
      web: false,
      seo: false,
      ads: false,
      valors: [this.web, this.seo, this.ads],
    }
  }, 
  watch: {
    web(valor) {
      this.total = valor === true ? this.total += 500 : this.total -= 500;
    },
    seo(valor) {
      this.total = valor === true ? this.total += 300 : this.total -= 300;
    },
    ads(valor) {
      this.total = valor === true ? this.total += 200 : this.total -= 200;
    }
  }

}
</script>

<template>
  <h2>Què vols fer?</h2>
  <input type="checkbox" id="web" v-model="web" @click="budged">
  <label for="web">Una pàgina web (500€) {{ web }}</label> <br>
  <input type="checkbox" id="seo" v-model="seo">
  <label for="seo">Una consultoria SEO (300€) {{ seo }}</label> <br>
  <input type="checkbox" id="ads" v-model="ads">
  <label for="ads">Una campanya de Google Ads (200€) {{ ads }}</label> <br>
  <h3>{{ total }} €</h3>
</template>

<style>

</style>§
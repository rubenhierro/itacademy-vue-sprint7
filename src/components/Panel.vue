<script>
import CustomInput from "./CustomInput.vue"

export default {
    props: ["pages", "languages"],
    emits: ["update:pages", "update:languages"],
    components: { CustomInput },
}
</script>

<template>
  <div class="panel">
    <label for="numPages">Num. pàgines:</label>
    <CustomInput 
      :type="`number`"
      :id="`numPages`"
      :description="`Número de pàgines que tindrà la web.`"
      v-model="pages"
      @vnode-updated="$emit('update:pages', pages)"
    />
  
       <br>
    <label for="numLang">Num. idiomes:</label>
    <CustomInput 
      :type="`number`"
      :id="`numLang`"
      :description="`Número d'idiomes que tindrà la web.`"
      v-model="languages"
      @vnode-updated="$emit('update:languages', languages)"
    />  
  </div>
</template>

<style>
  .panel {
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 12px;
  }

  .panel input {
    width: 50px;
  }

  input, button {
  margin: 5px;
}
</style>
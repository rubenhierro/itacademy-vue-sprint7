<script>
export default {
  props: ['pages', 'languages'],
  emits: ['updatePages', 'updateLanguages'],
}
</script>

<template>
  <label for="numPages">Número de pàgines:</label>
  <input 
    type="text" 
    id="numPages" 
    :value="pages"
    @input="$emit('updatePages', $event.target.value)"
    >
     <br>
  <label for="numLang">Número d'idiomes:</label>
  <input type="text"
  id="numLang" 
  :value="languages"
  @input="$emit('updateLanguages', $event.target.value)"
  >
</template>

<style>

</style>
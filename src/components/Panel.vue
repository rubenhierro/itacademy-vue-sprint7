<script>
import CustomInput from "./CustomInput.vue"

export default {
    props: ["pages", "languages"],
    emits: ["update:pages", "update:languages"],
    components: { CustomInput },
}
</script>

<template>
  <label for="numPages">Número de pàgines:</label>
  <CustomInput 
    :type="`text`"
    :id="`numPages`"
    :description="`Número de pàgines que tindrà la web.`"
    v-model="pages"
    @vnode-updated="$emit('update:pages', pages)"
  />

     <br>
  <label for="numLang">Número d'idiomes:</label>
  <CustomInput 
    :type="`text`"
    :id="`numLang`"
    :description="`Número d'idiomes que tindrà la web.`"
    v-model="languages"
    @vnode-updated="$emit('update:languages', languages)"
  />
</template>

<style>

</style>
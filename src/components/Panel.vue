<script>
import CustomInput from "./CustomInput.vue"

export default {
    props: ["pages", "languages"],
    emits: ["updatePages", "updateLanguages"],
    components: { CustomInput },
    data() {
      return {
          pagesNumber: this.pages,
          languagesNumber: this.languages
      }
    },
  methods: {
    updatePanelPages(val) {
      this.pagesNumber = Number(val);
    },
    updatePanelLanguages(val) {
      this.languagesNumber = Number(val);
    },
  },
}
</script>

<template>
  <label for="numPages">Número de pàgines:</label>
  <CustomInput 
    :type="`text`"
    :id="`numPages`"
    :value="pages"
    @updateInputValue="updatePanelPages"
    @vnode-updated="$emit('updatePages', this.pagesNumber)"
  />

     <br>
  <label for="numLang">Número d'idiomes:</label>
  <CustomInput 
    :type="`text`"
    :id="`numLang`"
    :value="languages"
    @updateInputValue="updatePanelLanguages"
    @vnode-updated="$emit('updateLanguages', this.languagesNumber)"
  />
</template>

<style>

</style>
<script>
export default {
  props: ['value', 'type', 'id'],
  emits: ['updateInputValue'],
}
</script>

<template>
  <button
    @click="$emit('updateInputValue', ++value)"
  >+</button>
  <input
    :type="type"
    :id="id"
    :value="value"
    @input="$emit('updateInputValue', $event.target.value)"
  />
  <button
    @click="$emit('updateInputValue', value >= 1 ? --value : value)"
   >-</button>
</template>

<style>

</style>
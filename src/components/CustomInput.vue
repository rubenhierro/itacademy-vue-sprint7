<script>
export default {
  props: ['modelValue', 'type', 'id'],
  emits: ['update:modelValue'],
}
</script>

<template>
  <button
    @click="$emit('update:modelValue', ++modelValue)"
  >+</button>
  <input
    :type="type"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <button
    @click="$emit('update:modelValue', modelValue >= 1 ? --modelValue : modelValue)"
   >-</button>
</template>

<style>

</style>
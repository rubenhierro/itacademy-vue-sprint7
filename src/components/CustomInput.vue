<script>
export default {
  props: ['modelValue', 'type', 'id', 'description'],
  emits: ['update:modelValue'],
  methods: {
    modelValueHandle(e) {
      const val = e.target.value;
      console.log(val);
      if (Number(val) > 1) {
        e.target.value = parseInt(val);
      } else {
        e.target.value = 1
      }
      
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<template>
  <button @click.prevent="$emit('update:modelValue', ++modelValue)">+</button>
  <input :type="type" :id="id" :value="modelValue" @input="modelValueHandle" />
  <button @click.prevent="$emit('update:modelValue', modelValue >= 2 ? --modelValue : modelValue)">-</button>

  <!-- Bootstrap modal -->
  <a class="btn" data-bs-toggle="modal" data-bs-target=".bd-example-modal-sm">
    <i class="fa-regular fa-circle-question fs-4"></i>
  </a>
  <div
    class="modal fade bd-example-modal-sm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mySmallModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md">
      <div class="modal-content p-3 text-center">{{ description }}</div>
    </div>
  </div>
</template>

<style>
</style>
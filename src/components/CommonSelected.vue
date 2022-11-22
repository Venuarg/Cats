<template>
  <select v-model="modelValue" @change="changeOption">
    <option value="">All</option>
    <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "CommonSelected.vue",

  props: {
    options: {
      type: Array,
    }
  },

  data(){
    return {
      modelValue: {
        type: String
      },
    }
  },

  methods: {
    changeOption (event) {
      this.$emit('update: modelValue', event.target.value)

      if (event.target.value) {
        if (event.target.value / 2) {
          this.$store.commit('setCategory', event.target.value)
        } else if (event.target.value === 'png'|| event.target.value === 'jpg' || event.target.value === 'gif') {
          this.$store.commit('setType', event.target.value)
        } else {
          this.$store.commit('setBreed', event.target.value)
        }
      } else {
        this.$store.commit('setCategory', event.target.value)
        this.$store.commit('setBreed', event.target.value)
        this.$store.commit('setType', event.target.value)
      }

      this.$store.dispatch('getPhotos')
      console.log(event.target.value)
    }
  },
})
</script>

<style scoped>

</style>
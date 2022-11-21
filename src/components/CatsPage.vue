<template>
  <div
      v-for="photo in photos"
      :photo="photo"
      :key="photo.id"
  >
    <img @click.prevent="$router.push(`/item/${photo.id}`)" :src="photo.url">
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Photo} from "@/types/index.js";

export default defineComponent({
    name: 'CatsPage.vue',
    props: {
        photos: {
            type: Array as PropType<Photo[]>,
            required: true
        }
    }
})

</script>

<style scoped>
img {
    height: 200px;
    width: 200px;
    margin: 25px;
    cursor: pointer;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

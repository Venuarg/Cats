<template>
  <div class="filters">
    <div>
      <p>Categories</p>
      <common-selected
          v-model="selectedSort"
          :options="this.$store.state.categories"
      />
    </div>

    <div>
      <p>image type</p>
      <common-selected v-model="selectedSort"/>
    </div>

    <div>
      <p>Breeds</p>
      <common-selected
          v-model="selectedSort"
          :options="this.$store.state.breeds"
      />
    </div>
  </div>

  <hr>

  <div class="app">
    <HelloWorld :photos="computedPhotos"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import CommonSelected from '@/components/CommonSelected.vue'
import {defineComponent} from "vue"
import {Photo} from "@/types/index.js"

interface Data {
    selectedSort: ''
}

export default defineComponent({
    name: 'App',
    components: {
        CommonSelected,
        HelloWorld,
    },

    data(): Data {
        return {
            selectedSort: ""
        }
    },

    computed: {
        computedPhotos (): Photo[] {
            let arr = this.$store.state.photos

            if(this.selectedSort !== '') {
                const selectedSort = this.selectedSort
                arr.sort((a: { [x: string]: number }, b: { [x: string]: number }) => {
                    if (a[selectedSort] === b[selectedSort]) {
                        return 0
                    } else if (a[selectedSort] < b[selectedSort]) {
                        return -1
                    } else {
                        return 1
                    }
                })
            }
            return arr
        }
    },

    mounted() {
        this.$store.dispatch('getPhotos')
        this.$store.dispatch('getBreeds')
        this.$store.dispatch('getCategories')
    }
})
</script>

<style>
.app {
    margin: 0 auto;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
}

.filters {
    width: 700px;
    margin: 0 auto 25px;
    display: flex;
    justify-content: space-around;
}
</style>
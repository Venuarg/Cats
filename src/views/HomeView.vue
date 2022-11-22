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
      <common-selected
          v-model="selectedSort"
          :options="this.$store.state.types"
      />
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

  <div v-show="this.$store.state.photos.length > 0" class="app">
    <CatsPage :photos="computedPhotos"/>
  </div>

  <div>
    <h1 v-if="this.$store.state.photos.length > 25">Cats loading...</h1>
  </div>

  <div v-show="this.$store.state.photos.length === 0">
    <h1>Cats loading...</h1>
  </div>

  <div ref="observer" class="observer">
  </div>
</template>

<script lang="ts">
import CatsPage from '@/components/CatsPage.vue'
import CommonSelected from '@/components/CommonSelected.vue'
import {defineComponent} from "vue"
import {Photo} from "@/types/index.js"

interface Data {
    selectedSort: ''
}

export default defineComponent({
    name: 'HomeView',
    components: {
        CommonSelected,
        CatsPage
    },

    data(): Data {
        return {
            selectedSort: ""
        }
    },

    computed: {
        computedPhotos (): Photo[] {
            let arr = this.$store.state.photos

            if (this.selectedSort !== '') {
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

        const options = {
            rootMargin: '8px',
            threshold: 1.0
        }

        const callback = (enteries: any) => {
            if (enteries[0].isIntersecting) {
                this.$store.dispatch('getMorePhotos')
            }
        }

        const observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.observer)
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

.observer {
    height: 150px;
}
</style>
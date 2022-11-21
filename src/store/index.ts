
import { createStore } from 'vuex'
import {Photo} from "@/types/index.js";
import { getPhotos } from "../api/index";
import axios from "axios";

interface State {
  photos: Photo[]
  breeds: []
  categories: []
  limit: number
  breed: string
  category: number | undefined
}

export default createStore({
  state: (): State => ({
    photos: [],
    breeds: [],
    categories: [],
    limit: 25,
    breed: '',
    category: undefined
  }),

  getters: {
  },
  mutations: {
    setPhotos: (state, payload) => {
      state.photos = payload
    },

    setMorePhotos: (state, payload) => {
      state.photos = [...state.photos, ...payload]
    },

    setBreeds: (state, payload) => {
      state.breeds = payload
    },

    setCategories: (state, payload) => {
      state.categories = payload
    },

    setBreed: (state, payload) => {
      state.breed = payload
    },

    setCategory: (state, payload) => {
      state.category = payload
    }
  },
  actions: {
    async getPhotos  (context)  {
      const {data} = await getPhotos({
        limit: this.state.limit,
        breed: this.state.breed,
        category: this.state.category
      })
      context.commit('setPhotos', data)
    },

    async getMorePhotos  (context)  {
      const {data} = await getPhotos({
        limit: this.state.limit,
        breed: this.state.breed,
        category: this.state.category
      })
      context.commit('setMorePhotos', data)
    },

    async getBreeds (context) {
      const {data} = await axios.get('https://api.thecatapi.com/v1/breeds')
      context.commit('setBreeds', data)
    },

    async getCategories (context) {
      const {data} = await axios.get('https://api.thecatapi.com/v1/Categories')
      context.commit('setCategories', data)
    }
  }
})

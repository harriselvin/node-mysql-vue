import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useCookies } from 'vue-cookies'
import router from '@/router';

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    fruits: null
  },
  getters: {
  },
  mutations: {
    setFruits(state, payload) {
      state.fruits = payload
    }
  },
  actions: {
    async addUser({commit}, info) {
      const data = await axios.post('http://localhost:4000/fullstack/insert', info) 
      console.log(data);
      
      // $cookies.set('token', data.token)
      if (data.message) {
        toast("Sign up was successful!", {
          "theme": "auto",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
    },
    async loginUser({commit}, info) {
      console.log(info);
      
      let {data} = await axios.post('http://localhost:4000/fullstack/login', info)
      console.log(data);
      
      $cookies.set('token', data.token) 
      if (data.message) {
        toast("Login was success!", {
          "theme": "auto",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }     
      await router.push('/') 
      location.reload()
    },
    async getFruits({commit}) {
      let {data} = await axios.get('http://localhost:4000/fullstack/fruit')
      commit('setFruits', data)
    },
    async addToCart({commit}, fruit_id) {
      let {data} = await axios.post('http://localhost:4000/fullstack/cart', {id: fruit_id})
      console.log(data);
      console.log(fruit_id);
      
    },
  },
  modules: {
  }
})

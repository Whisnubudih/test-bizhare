import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import userAxios from '../apis/userAxios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    userId:{},
    isLogin: false
  },
  mutations: {
    SET_USERS(state, payload){
      state.users = payload
    },
    SET_USERID(state, payload){
      state.userId = payload
    },
    SET_IS_LOGIN(state,payload){
      state.isLogin = payload
    }
  },
  actions: {
    fetchUser(context,payload){
      axios({
        method: "GET",
        url:`https://reqres.in/api/users?page=${payload.page}`
      })
      .then((resp) =>{
        context.commit('SET_USERS', resp.data)
      })
    },
    addUser({name,job}){
      return new Promise((resolve,reject)=>{
        axios({
          method:'POST',
          url:"https://reqres.in/api/users",
          date:{
            name,
            job
          }
        })
        .then((resp)=>{
          console.log(resp.status)
          resolve()
        })
        .catch((err)=>{
          reject(err)
        })
      })
    },
    deleteUser(id){
      axios({
        method:'Delete',
          url:`https://reqres.in/api/users/${id}`,
      })
      .then((resp) =>{
        console.log(resp.status)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    editUserId(context,id){
      return new Promise((resolve,reject)=>{
        axios({
          method:'GET',
          url:`https://reqres.in/api/users/${id}`,
        })
        .then((resp)=>{
          
          context.commit('SET_USERID', resp.data.data)
          resolve()
        })
        .catch((err)=>{
          reject(err)
        })
      })
    },
    editUser({name,job},id){
      
      return new Promise((resolve,reject)=>{
        axios({
          method:'PUT',
          url:`https://reqres.in/api/users/${id}`,
          date:{
            name,
            job
          }
        })
        .then((resp)=>{
          console.log(resp.status)
          resolve()
        })
        .catch((err)=>{
          reject(err)
        })
      })
    },

    login (context,{email,password}){
      return new Promise((resolve,reject)=>{
        userAxios({
          method: "post",
          url: "/login",
          data: {
            email,
            password,
          },
        })
        .then(({data}) =>{
          context.commit("SET_IS_LOGIN", true)
          localStorage.setItem("access_token", data.access_token)
          resolve()
        })
        .catch((err)=>{
          console.log(err)
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})

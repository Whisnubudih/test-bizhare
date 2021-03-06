import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import formUser from '../components/form.vue'
import editForm from '../components/FormEdit.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to,from,next) =>{
      if(!localStorage.getItem("access_token")){
        next({name: "Login"})
      }else{
        next()
      }
    }
  },
  {
    path: '/formuser',
    name: 'formUser',
    component: formUser,
    beforeEnter: (to,from,next) =>{
      if(!localStorage.getItem("access_token")){
        next({name: "Login"})
      }else{
        next()
      }
    }
  },
  {
    path: '/editform/:id',
    name: 'editForm',
    component: editForm,
    beforeEnter: (to,from,next) =>{
      if(!localStorage.getItem("access_token")){
        next({name: "Login"})
      }else{
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to,from,next) =>{
      if(localStorage.getItem("access_token")){
        next({name: "Home"})
      }else{
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

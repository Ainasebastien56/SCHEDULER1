import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Calendar from '@/components/calendar/Calendar.vue'
import Sheduler from '@/components/Sheduler'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ 
    {
      path:'/calendar',
      name:'Calendar',
      component:Calendar
    },
    {
      path:'/sheduler',
      name:'Sheduler',
      component:Sheduler
    },
    {
      path: '/Register',
      name: 'Register',
      component:Register
    },
    {
      path: '/',
      name: 'Login',
      component:Login
    }
  ]
})

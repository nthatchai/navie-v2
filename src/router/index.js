import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Download from '@/components/Home/Download'
import Signin from '@/components/Home/Signin'
import Signup from '@/components/Home/Signup'
import Dashboard from '@/components/Dashboard/Dashboard'
import Floorplan from '@/components/Floorplan/Floorplan'
import Monitor from '@/components/Monitor/Monitor'
import Participant from '@/components/Participant/Participant'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/floorplan',
      name: 'Floorplan',
      component: Floorplan
    },
    {
      path: '/monitor',
      name: 'Monitor',
      component: Monitor
    },
    {
      path: '/participant',
      name: 'Participant',
      component: Participant
    }
  ],
  mode: 'history'
})
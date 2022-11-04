// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'semantic-ui-css/semantic.min.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'
Vue.config.productionTip = false

library.add(faChevronRight,faChevronLeft,faCalendarDays,faCalendarDay)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

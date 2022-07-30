import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome'
import AmazonAffiliate from './AmazonAffiliate.vue'
import { faBars, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import anime from 'animejs/lib/anime';
import './styles/tailwind.sass'
import router from './routes'
import clickOutside from './directives/clickOutside'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const animejs = {
  install(app, options){
    app.config.globalProperties.$anime = anime;
  }
}

library.add(
  faBars, 
  faSearch,
  faXmark
)

createApp(AmazonAffiliate)
  .component('font-awesome-icon', FaIcon)
  .use(router)
  .use(animejs)
  .use(PerfectScrollbar)
  .directive("click-outside", clickOutside)
  .mount('#app')

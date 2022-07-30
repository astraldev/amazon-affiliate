<template>
  <nav v-click-outside="clickOutside">
    <button @click="active = true">
      <font-awesome-icon icon="fa-solid fa-bars" class="icon-size-base text-gray-400"></font-awesome-icon>
    </button>
    <h1 class="text-2xl h-full uppercase text-exo text-gray-700 font-bold mb-auto mx-auto md:ml-0 py-4">
      Ed's Recommends
    </h1>
    <div :class="`nav-list ${active ? 'active' : ''}`" ref="navList" >
      <button
        class="text-gray-500 hover:text-gray-700 h-10 grid place-items-center w-10 mx-3 mt-4 mb-2 md:hidden"
        @click="active = false" >
        <font-awesome-icon icon="fa-solid fa-xmark" class="icon-size-base"></font-awesome-icon>
      </button>
      <ul class="flex flex-col md:flex-row">
        <li class="nav-list-item">
          <router-link to="">
             Collections
          </router-link >
        </li>
        <li class="nav-list-item">
          <router-link to="">
             Electronics
          </router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="">
             Health Care
          </router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="">
            Accessories
          </router-link >
        </li>
      </ul>
    </div>
    <span></span>
    <button>
      <font-awesome-icon icon="fa-solid fa-search" class="icon-size-small text-gray-400"></font-awesome-icon>
    </button>
  </nav>
</template>

<script>

import { screens } from 'tailwindcss/defaultTheme'

export default {
  data(){
    return {
      active: false,
      _skip: 0,
    }
  },
  methods: {
    clickOutside(ev){
      this.active = false;
    },
  },
  watch: {
    active(val){
      const nav = this.$refs.navList;
      const navBackdrop = nav.nextSibling;
      if(window.innerWidth < parseInt(screens.md.replace("px"))){
        if(val){
          nav.style.translateX = "-100%";
          this.$anime({
            targets: nav,
            keyframes: [
              {translateX: '-100%', duration: 0},
              {translateX: '0',     duration: 400},
            ],
            easing: "easeInOutExpo"
          })
        }else{
          this.$refs.navList.style.height = "100%"
          this.$refs.navList.style.top = "0"
          this.$refs.navList.style.bottom = "0"
          this.$refs.navList.style.display = "flex"
          
          this.$anime({
            targets: nav,
            keyframes: [
              {translateX: '0',     duration: 0},
              {translateX: '-100%', duration: 400},
            ],
            easing: "easeInOutExpo",
            complete: () => {
              this.$refs.navList.style = ''
            },
          })
        }
      }

    }
  }
}
</script>

<style lang="sass" scoped>
nav 
  @apply mx-0 md:pt-2 lg:pt-4 border-b relative px-2 items-center flex sticky top-0 z-20 bg-white
  &>button 
    @apply w-8 h-8 mr-2 grid place-items-center my-auto md:hidden

.nav-list 
  /* Small Screens */
  @apply z-30 pr-4 shadow-black/30 md:shadow-none bg-white shadow-lg bg-white hidden flex-col fixed h-screen w-56 left-0
  /* Larger Screens */
  @apply md:z-auto md:flex md:flex-row md:relative md:h-auto md:w-auto md:inset-auto md:items-center
  .nav-list-item
    /* Smaller Screens */
    @apply py-3 font-bold font-sans relative ml-4 justify-start mx-1 px-3 grid place-items-stretch text-gray-700 w-full 
    /* Large Screens */
    @apply md:w-auto md:py-4 md:text-sm md:px-3 md:font-normal md:place-items-center md:text-gray-400
  &.active 
    @apply flex inset-y-0
    & + span
      @apply bg-black/25
  & + span
      @apply fixed w-screen inset-0 h-screen bg-transparent transition-colors duration-300 -z-20 md:hidden pointer-events-none

</style>
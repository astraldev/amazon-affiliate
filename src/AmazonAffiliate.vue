<template>
  <router-view />
</template>
<script>
import NavigationBar from './components/NavigationBar.vue'
import Featured from './components/Featured.vue'
export default {
  components: { NavigationBar, Featured }
}
</script>
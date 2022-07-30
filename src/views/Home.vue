<template>
  <landing />
  <navigation-bar />
  <featured />
  <categories />
</template>
<script>
import Featured from '../components/Featured.vue'
import NavigationBar from '../components/NavigationBar.vue'
import Categories from '../components/Categories.vue'
import Landing from '../components/Landing.vue'
export default {
  components: { Featured, NavigationBar, Categories, Landing }
}
</script>
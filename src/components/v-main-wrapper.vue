<template>
  <div class="v-maim-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

<!--    <v-catalog/>-->
<!--    <v-cart-->
<!--        v-if="CART.length"-->
<!--        :cart_data="CART"-->
<!--    />-->
  </div>
</template>

<script>
  // import vCatalog from "./v-catalog"
  // import vCart from "./v-cart"
  import {mapGetters} from "vuex"

  export default {
    name: 'v-main-wrapper',
    // components: {
    //   // vCatalog,
    //   // vCatalogItem,
    //   // vCart
    // },
    props: {},
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
          'CART'
      ])
    },
    methods: {},
    watch: {},
    mounted() {}
  }
</script>

<style scoped>
  .v-maim-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>
<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}" >
      <div class="v-catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>CART</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }} P.</p>
    </div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'DECREMENT_CART_ITEM',
      'INCREMENT_CART_ITEM'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    }
  },
  computed: {
    cartTotalCost() {
      let result = []

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el
        })
      } else {
        return 0
      }
      return result
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
  .v-cart {
    margin-bottom: 100px;
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 3*$padding;
      display: flex;
      justify-content: center;
      background: #26ae68;
      color: #ffffff;
      font-size: 20px;
     }
    .total__name {
      margin-right: 2*$margin;
    }
  }
</style>
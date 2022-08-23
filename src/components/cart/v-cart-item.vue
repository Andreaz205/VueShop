<template>
  <div class="v-cart-item">
    <img
        :src="require('../../assets/images/'+cart_item_data.image)"
        class="v-cart-item__image"
    />
    <div class="cart-item-data__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantity</p>
      <div>
        <span
            @click="decrementItem"
            class="quantity__btn"
        >-</span>
        {{cart_item_data.quantity}}
        <span
            @click="incrementItem"
            class="quantity__btn"
        >+</span>
      </div>

    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>


export default {


  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {

    deleteFromCart () {
      this.$emit('deleteFromCart')
    },
    decrementItem () {
      this.$emit('decrement')
    },
    incrementItem () {
      this.$emit('increment')
    }
  },

}
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #c0c0c0;
    padding: $padding*2;
    margin-bottom: 2*$margin;
    &__image{
      max-width: 50px;
    }

    .quantity__btn {
      cursor: pointer;
    }
  }
</style>
<script setup>
  import {onMounted,  ref, reactive, watch, provide, computed, inject }from 'vue'
  const {cart} = inject('cart')
  import CardDrawer from './cardDrawer.vue'
  const emit = defineEmits(['addToCart', 'removeToCart', 'openInfoCard'])

</script>

<template>
    <CardDrawer
    v-for="item in cart"
            :key="item.id"
            :id="item.id"
            :image="item.image"
            :title="item.title" 
            :model="item.model" 
            :square="item.square" 
            :price="item.price"
            :onClickRemove="() => emit('removeToCart', item)"
            :OnClickOpenInfoCard="() => emit('openInfoCard', item)"

          />
</template>

<script>

</script>

<style>

</style>
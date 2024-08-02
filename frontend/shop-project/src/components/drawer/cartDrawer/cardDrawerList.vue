<script setup>
  import {onMounted,  ref, reactive, watch, provide, computed, inject }from 'vue'
  const {cart} = inject('cart')
  import CardDrawer from './cardDrawer.vue'
  const emit = defineEmits(['addToCart', 'removeToCart', 'openInfoCard'])

</script>

<template>
    <div class="catd-drawer-cont">
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
    </div>
</template>

<script>

</script>

<style scoped>
.catd-drawer-cont {
  display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0px;
    place-items: center;
}
</style>
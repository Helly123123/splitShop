<script setup>
   import Card from './card.vue'

   defineProps({
      items: Array,
    })

    const emit = defineEmits(['addToCart', 'removeToCart', 'openInfoCard'])
</script>

<template>
<div class="card-list">
    <Card
    v-for="item in items"
            :key="item.id"
            :id="item.id"
            :image="item.image"
            :title="item.title" 
            :model="item.model" 
            :square="item.square" 
            :price="item.price"
            :isAdded="item.isAdded"
            :onClickAdd="() => emit('addToCart', item)"
            :onClickRemove="() => emit('removeToCart', item)"
            :onClickOpenInfoCard="() => emit('openInfoCard', item)"
          />
</div>
</template>
<script>

</script>

<style scoped>
.card-list {
    display: grid;
    grid-template-columns: repeat(4, 0.5fr);
    gap: 0px;
    place-items: center;
}
</style>
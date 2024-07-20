<script setup>
import {
  onMounted,
  ref,
  reactive,
  watch,
  provide,
  computed,
  inject,
} from "vue";
const { infoCard } = inject("infoCard");
import CardInfo from "./cardInfo.vue";
const emit = defineEmits(['addDrawer', 'addLiked', 'removeLiked'])
</script>

<template>
  <CardInfo
    v-for="item in infoCard"
    :key="item.id"
    :id="item.id"
    :image="item.image"
    :title="item.title"
    :model="item.model"
    :square="item.square"
    :inDrawer="item.inDrawer"
    :isAdded="item.isAdded"
    :price="item.price"
    :onClickAddPlusDrawerOrder="() => emit('addDrawer', item)"
    :onClickAddPlus="() => emit('addLiked', item)"
    :onClickAddRemove="() => emit('removeLiked', item)"
  />
</template>

<script></script>

<style></style>

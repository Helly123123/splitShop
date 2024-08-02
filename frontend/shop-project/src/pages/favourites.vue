<script setup>
import CardDrawerList from "../components/drawer/cartDrawer/cardDrawerList.vue";
import NoItemDrawer from "../components/drawer/noItemDriver.vue";
import { inject, reactive } from "vue";
const { closeDrawer } = inject("drawer");
const { onClickAddRemove, cart } = inject("cart");
const { drawer } = inject("drawerCard");
const { onClickOpenInfoCardLiked } = inject("drawerCard");
</script>

<template>
  <div class="drawer-cont">
    <h1 class="title-drawer">Избранные</h1>
    <div v-if="cart.length > 0" class="cart-drawers">
      <CardDrawerList
        @open-info-card="onClickOpenInfoCardLiked"
        @remove-to-cart="onClickAddRemove"
      />
    </div>
    <div v-else>
      <NoItemDrawer />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.black-fon {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 50%;
  z-index: 100;
  top: 0;
  left: 0;
}

.drawer-cont {
  text-align: left;
}

.title-drawer {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 50px;
  margin-top: 100px;
  margin-left: 70px;
  margin-bottom: 80px;
}
</style>

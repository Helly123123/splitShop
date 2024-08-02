<script setup>
import CardListOrder from "../components/drawerOrder/drawerOrderCard/drawerOrderCardList.vue";
import NoItemDrawerOrder from "../components/drawerOrder/noItemDriwerOrder.vue";
import { inject } from "vue";
const { onClickAddRemoveDrawerOrder, orderCard } = inject("orderCard");
const {onClickAddPlus, onClickAddRemove} = inject('cart')
</script>

<template>
  <div class="drawer-order-cont">
    <h1 class="drawer-title">Корзина</h1>
    <div class="drawer-cont"> 
      <div v-if="orderCard.length" class="drawer-order-card-cont">
        <CardListOrder 
        @remove-drawer="onClickAddRemoveDrawerOrder"
        @add-liked="onClickAddPlus"
        @remove-liked="onClickAddRemove" />
      </div>
      <div class="cont-no-item" v-else>
        <NoItemDrawerOrder/>
      </div>
      <div class="info-drawer-cont">
        <div class="info-drawer">
          <h1>Оформление заказа</h1>
          <div class="price-cont">
            <h1>Итого:</h1>
            <h2>89 900 ₽</h2>
          </div>
        </div>
        <button class="create-order-btn">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.drawer-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 50px;
  margin-top: 100px;
  margin-bottom: 80px;
  text-align: left;
}

.info-drawer-order {
  border-radius: 13px;
  width: 450px;
  height: 200px;
  background: #F6F6F6;
  margin-left: 200px;
  text-align: center;
  padding: 20px;
}

.drawer-cont {
  display: flex;
  align-items: center;
}

.drawer-order-cont {
  margin-left: 100px;
}

.drawer-order-card-cont {
  height: 650px;
  width: 930px;
  overflow: auto;
}

.drawer-order-card-cont::-webkit-scrollbar {
  width: 5px;
  /* ширина скролла */
}

.drawer-order-card-cont::-webkit-scrollbar-thumb {
  background-color: #999;
  /* цвет полосы скролла */
  border-radius: 50px;
}

.drawer-order-card-cont ::-webkit-scrollbar-track {
  background-color: #868181;
  /* цвет фона скролла */
}

.cont-no-item {
  height: 650px;
  width: 930px;
}

.info-drawer-cont {
  /* border-radius: 15px;
width: 494px;
height: 236px;
background: #f6f6f6; */
}

.info-drawer  {
  padding: 10px;
  border-radius: 15px;
width: 430px;
height: 200px;
background: #f6f6f6;
}

.info-drawer h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 30px;
}

.price-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
}

.price-cont h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 30px;
}

.price-cont h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 30px;
}

.create-order-btn {
  border-radius: 15px;
  width: 450px;
height: 56px;
background: #504f4f;
border: none;
margin-top: 15px;
color: white;
font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
}
</style>

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
      <div class="info-drawer-order">
        <h1 class="title-info-drawer-order">Оформление заказа</h1>
        <div class="cont-info-price-order">
          <p>Общая сумма:</p>
          <span>21 000 ₽</span>
        </div>
        <button v-if="orderCard.length" class="create-order-btn">Оформить заказ</button>
        <button v-else class="no-create-order-btn">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.drawer-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 40px;
}

.info-drawer-order {
  border-radius: 13px;
  width: 500px;
  height: 330px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: white;
  margin-left: 200px;
  text-align: center;
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

.title-info-drawer-order {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 100px;
  margin-top: 30px;
}

.cont-info-price-order {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cont-info-price-order p {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-size: 20px;
  margin-right: 165px;
}

.cont-info-price-order span {
  font-family: "Montserrat", sans-serif;
  font-weight: 350;
  font-size: 20px;
}

.create-order-btn {
  border-radius: 13px;
  width: 400px;
  height: 60px;
  background: #a5ffa8;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-size: 20px;
  transition: all 0.25s;
}

.no-create-order-btn {
  border-radius: 13px;
  width: 400px;
  height: 60px;
  background: #a5ffa8;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-size: 20px;
  transition: all 0.25s;
  cursor: no-drop;
}

.create-order-btn:hover {
  border-radius: 13px;
  width: 400px;
  height: 60px;
  background: #7de481;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-size: 22px;
  transition: all 0.25s;
}

.cont-no-item {
  height: 650px;
  width: 930px;
}
</style>

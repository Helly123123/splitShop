<script setup>
    import {inject} from 'vue'
    const {closeDrawer} = inject('drawer')
</script>

<template>
  <div class="cont-noItem">
    <img src="/drawer/NoItem.svg" alt="" />
    <h1 class="title-noItem">Корзина пуста</h1>
    <h2 class="subtitle-noItem">Добавьте хотя бы один товар, <br/> чтобы сделать заказ.</h2>
    <a @click="closeDrawer" class="btn-go-catalog" href="#/catalog">← Каталог</a>
  </div>
</template>

<script></script>

<style scoped>
.cont-noItem {
  margin-top: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
}

.title-noItem {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 25px;
}

.subtitle-noItem {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 17px;
}

.btn-go-catalog {
    margin-top: 10px;
  border-radius: 18px;
  width: 245px;
  height: 55px;
  background: #9dd458;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: white;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
}


</style>


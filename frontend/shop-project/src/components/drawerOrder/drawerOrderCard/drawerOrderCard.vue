<script setup>
defineProps({
  title: String,
  image: String,
  model: String,
  square: Number,
  price: Number,
  isAdded: Boolean,
  onClickAddRemoveDrawerOrder: Function,
  onClickAddPlus: Function,
  onClickAddRemove: Function
});
</script>

<template>
  <div class="card">
    <div class="img-cont">
      <img class="img" src="/public/catalog/haier.svg" alt="">
    </div>
    <div class="cont">
      <h1 class="title">{{ title }}</h1>
      <h1 class="subtitle">Модель: <span>{{ model }}</span></h1>
      <h1 class="subtitle">Площадь: <span>{{ square }}</span></h1>
      <div class="price-cont">
        <h1 class="price">{{ price }} ₽</h1>
        <div>
          <img class="like_img" src="/drawerOrder/like_drawer.svg" alt="">
          <img class="delete_img" src="/drawerOrder/delete_drawer.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>

 .card {
  display: flex;
  text-align: left;
  align-items: center;
  gap: 60px;
 } 
  
.img-cont {
  width: 350px;
  height: 200px;
  background-color: #F6F6F6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price-cont {
  display: flex;
  align-items: center;
  gap: 30px;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 30px; 
}

.subtitle {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 23px; 
  color: #666666;
}

.subtitle span {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px; 
  color: #666666;
}

.price {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 30px; 
}

.like_img:hover{
  filter: invert(68%) sepia(6%) saturate(6633%) hue-rotate(314deg) brightness(118%) contrast(96%);
}

.delete_img:hover{
  filter: invert(0%) sepia(0%) saturate(7466%) hue-rotate(54deg) brightness(86%) contrast(92%);
}
</style>

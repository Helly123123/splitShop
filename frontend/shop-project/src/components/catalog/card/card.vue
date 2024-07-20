<script setup>
    defineProps({
      title: String,
      image: String,
      model: String,
      square: Number,
      price: Number,
      onClickAdd: Function,
      onClickRemove: Function,
      isAdded: Boolean,
      onClickOpenInfoCard: Function
    })
  </script>

<template>
<div class="card">
    <img class="card-img" :src="image" alt="">
    <h1 class="card-title">{{title}}</h1>
    <div class="cont-card-subtitle">
        <p class="model-card">Модель: <span>{{model}}</span></p>
        <p class="square-card">Площадь: <span>{{square}} м²</span></p>
    </div>
    <div class="price-cont">
        <h1 class="price-card">{{price}} ₽</h1>
        <button  @click="onClickOpenInfoCard" class="add-to-card-btn">Подбронее</button>
        <img v-if="isAdded" @click="onClickRemove" class="like-btn" src="/un_like.svg" alt="">
        <img v-else @click="onClickAdd" class="like-btn" src="/like.svg" alt="">
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Сплит система Ballu",
          image: "/public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        }, 
        {
          name: "Сплит система Ballu",
          image: "/public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        }, 
        {
          name: "Сплит система Ballu",
          image: "/public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        }, 

        {
          name: "Сплит система Ballu",
          image: "/public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        }, 
        {
          name: "Сплит система Ballu",
          image: "/public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        }, 
        {
          name: "Сплит система Ballu",
          image: "/public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        },

      ]
      }
    }, methods: {

    }
}
</script>

<style scoped>
.card {
  margin: 50px 0px 0px 0px;
  padding: 20px;
  min-width: 300px; 
  transition: transform 0.3s ease-in-out;
  text-align: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: white;
  border-radius: 12px;
  width: 396px;
  height: 390px;
}

.card-img {
    width: 270px;
    margin-bottom: 15px;
}

.card-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 25px;
}

.model-card {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 23px;
}

.model-card span {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 16px;
}

.square-card {
   font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 23px;
}

.square-card span {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 16px;
}

.cont-card-subtitle {
    text-align: left;
    margin-top: 50px;
}

.price-cont {
    display: flex;
    align-items: center;
}

.price-card {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 30px;
}

.add-to-card-btn {
    border-radius: 4px;
    width: 149px;
    height: 42px;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
    background: #c1ffac;
    border: none;
    margin-left: 70px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 15px;
    transition: all 0.3s;   
}
.add-to-card-btn:hover {
    width: 160px;
    height: 46px;
    transition: all 0.15s;
}


.like-btn {
    margin-left: 15px;
}

.like-btn:hover {
    filter: invert(13%) sepia(69%) saturate(6219%) hue-rotate(2deg)
    brightness(110%) contrast(124%);
  transition: all 0.15s;
}

</style>
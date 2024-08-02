<script setup>
defineProps({
  title: String,
  image: String,
  model: String,
  square: Number,
  price: Number,
  inDrawer: Boolean,
  isAdded: Boolean,
  onClickAddPlusDrawerOrder: Function,
  onClickAddPlus: Function,
  onClickAddRemove: Function,
});

import { inject } from "vue";
const { closeInfoCard } = inject("infoCard");
</script>

<template>
  <div class="black-cont"></div>
  <div class="contanier">
    <img
      @click="closeInfoCard"
      class="close-info-card"
      src="/infoCard/close.svg"
      alt=""
    />
    <div class="img-cont">
      <img class="main-img" :src="image.mainImg" alt="" />
      <div class="mini-img-cont">
        <img @click="oneClick" class="img" :src="image.one" alt="" />
        <img @click="twoClick" class="img" :src="image.two" alt="" />
        <img @click="threeClick" class="img" :src="image.three" alt="" />
        <img @click="fourClick" class="img" :src="image.four" alt="" />
      </div>
    </div>
    <div class="info-cont">
      <h1 class="title">Характеристики</h1>
      <div>
        <p class="subtitle">
          Модель: <span>{{ model }}</span>
        </p>
        <p class="subtitle">
          Площадь: <span>{{ square }}</span>
        </p>
        <p class="subtitle">Производитель: <span>Ballu</span></p>
        <p class="subtitle">Мощность: <span>9 BTU</span></p>
      </div>
      <h2 class="price">{{ price }} ₽</h2>
      <div class="btn-cont">
        <button class="buy">Купить сейчас</button>
        <button class="add-to-card">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: {
        one: "/infoCard/one.svg",
        two: "/infoCard/two.svg",
        three: "/infoCard/three.svg",
        four: "/infoCard/four.svg",
        mainImg: "/infoCard/one.svg",
      },
    };
  },
  methods: {
    oneClick() {
      this.image.mainImg = this.image.one;
    },
    twoClick() {
      this.image.mainImg = this.image.two;
    },
    threeClick() {
      this.image.mainImg = this.image.three;
    },
    fourClick() {
      this.image.mainImg = this.image.four;
    },
  },
};
</script>

<style scoped>
.black-cont {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 50%;
  z-index: 20;
  top: 0;
  left: 0;
}

.contanier {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 150;
  height: 700px;
  width: 1200px;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.img-cont {
  display: flex;
  align-items: center;
  gap: 30px;
}

.mini-img-cont {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.main-img {
  width: 500px;
  height: 600px;
}

.img {
  width: 150px;
  cursor: pointer;
}

.info-cont {
  text-align: left;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 35px;
}

.subtitle {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 25px;
  color: #666666;
}

.subtitle span {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: black;
}

.price {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 35px;
}

.buy {
  border-radius: 10px;
  width: 360px;
  height: 59px;
  background: #55a34f;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: white;
  transition: all 0.2s;
}

.buy:hover {
  background: #5fb859;
  transition: all 0.25s;
}

.add-to-card {
  border: 1.5px solid black;
  border-radius: 10px;
  width: 360px;
  height: 59px;
  background-color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  transition: all 0.1s;
  cursor: pointer;
}

.btn-cont {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.close-info-card {
  opacity: 50%;
  margin: 30px;
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
}

.close-info-card:hover {
  opacity: 100%;
}
</style>

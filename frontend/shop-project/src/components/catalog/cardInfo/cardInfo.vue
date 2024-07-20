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
      <img class="img" @click="oneClick" :src="image.one" alt="" />
      <img class="img" @click="twoClick" :src="image.two" alt="" />
      <img class="img" @click="threeClick" :src="image.three" alt="" />
      <img class="img" @click="fourClick" :src="image.four" alt="" />
    </div>
    <div class="img-cont-two">
      <img class="main-img" :src="image.mainImg" alt="" />
    </div>
    <div class="info-cont">
      <h1 class="main-title">Характеристики</h1>
      <div class="info-title-cont">
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">
          Модель: <span>{{ model }}</span>
        </p>
        <p class="subtitle">
          Площадь: <span>{{ square }} м²</span>
        </p>
        <p class="subtitle">Производитель: <span>Ballu</span></p>
        <div class="price-cont">
          <h1 class="price-info">{{ price }} ₽</h1>
          <button
            v-if="inDrawer"
            @click="onClickAddPlusDrawerOrder"
            class="add-drawer-btn"
          >
            Добавлено
          </button>
          <button
            v-else
            @click="onClickAddPlusDrawerOrder"
            class="add-drawer-btn"
          >
            В корзину
          </button>
          <img
            v-if="isAdded"
            @click="onClickAddRemove"
            class="like-btn"
            src="/un_like.svg"
            alt=""
          />
          <img
            @click="onClickAddPlus"
            v-else
            class="like"
            src="/like.svg"
            alt=""
          />
        </div>
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
  border-radius: 20px;
  padding: 30px;
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

.img-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.img {
  margin: 10px;
  width: 165px;
  height: 149px;
}

.main-img {
  width: 500px;
  height: 500px;
  margin: 0px 70px 0px 70px;
}

.info-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 35px;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 25px;
}

.subtitle {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 20px;
}

.subtitle span {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 15px;
}

.price-info {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 28px;
}

.price-cont {
  display: flex;
  align-items: center;
}

.add-drawer-btn {
  border-radius: 4px;
  width: 149px;
  height: 42px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: #c1ffac;
  border: none;
  margin-left: 40px;
  margin-right: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: all 0.3s;
}
.add-drawer-btn:hover {
  background-color: #b3f99c;
  transition: all 0.15s;
}

.add-drawer-btn:active {
  background-color: #79e256;
}

.img-cont-two {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

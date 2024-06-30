<template>
  <div class="slider-container">
    <img style="cursor: pointer; width: 60px" @click="scrollLeft" src="/left.svg" alt="" />
    <div class="slider" ref="slider">
      <div
        class="card"
        v-for="(item, index) in items"
        :key="index"
        v-show="index >= startIndex && index < startIndex + 4"
      >
        <img style="width: 250px" :src="item.image" alt="" />
        <p class="title-product">{{ item.name }}</p>
        <div class="cont-mes">
          <p class="model-product">
            Модель: <span class="">{{ item.model }}</span>
          </p>
          <p class="square-product">
            Площадь: <span>{{ item.square }}</span>
          </p>
        </div>
        <div class="cont-price-product">
          <p class="price-product">{{ item.price }}</p>
          <button class="add-basket-product-button">В корзину</button>
          <img class="like" src="/like.svg" alt="" />
        </div>
      </div>
    </div>
    <img style="cursor: pointer; width: 60px" @click="scrollRight" src="/right.svg" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      startIndex: 0,
      items: [
        {
          name: "Сплит система Ballu",
          image: "../public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        },
        {
          name: "Сплит система Ballu",
          image: "../public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        },
        {
          name: "Сплит-система Haier",
          image: "../public/haier.svg",
          model: "HSU-07HTT03/R2 Tundra",
          square: "23",
          price: "24 000 ₽",
        },
        {
          name: "Сплит-система Haier",
          image: "../public/haier.svg",
          model: "HSU-07HTT03/R2 Tundra",
          square: "23",
          price: "24 000 ₽",
        },
        {
          name: "Сплит-система Dantex",
          image: "../public/dan.svg",
          model: "RK-07SDM4 Corso",
          square: "22",
          price: "22 000 ₽",
        },
        {
          name: "Сплит-система Dantex",
          image: "../public/dan.svg",
          model: "RK-07SDM4 Corso",
          square: "22",
          price: "22 000 ₽",
        },
        {
          name: "Сплит-система Electrolux",
          image: "../public/elec.svg",
          model: "EACS-09HAL/N3 Loft",
          square: "22",
          price: "28 000 ₽",
        },
        {
          name: "Сплит-система Electrolux",
          image: "../public/elec.svg",
          model: "EACS-09HAL/N3 Loft",
          square: "22",
          price: "28 000 ₽",
        },
      ],
    };
  },
  methods: {
    scrollLeft() {
      if (this.startIndex > 0) {
        this.startIndex--;
        this.smoothScroll();
      }
    },
    scrollRight() {
      if (this.startIndex < this.items.length - 4) {
        this.startIndex++;
        this.smoothScroll();
      }
    },
    smoothScroll() {
      const slider = this.$refs.slider;
      const cardWidth = slider.querySelector(".card").clientWidth;
      slider.scroll({
        left: cardWidth * this.startIndex,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.slider-container {
  justify-content: center;
  display: flex;
  align-items: center;
}

.slider {
  display: flex;
  overflow: hidden;
}

.card {
  margin: 0px 20px 0px 20px;
  padding: 20px;
  min-width: 300px; 
  transition: transform 0.3s ease-in-out;
  text-align: center;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: white;
  border-radius: 12px;
  width: 396px;
  height: 315px;
}

.cont-mes {
  text-align: left;
}

.title-product {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 30px;
}

.model-product {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-size: 17px;
}

.model-product span {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 14px;
}

.square-product {
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-size: 17px;
}

.square-product span {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 14px;
}

.cont-price-product {
  display: flex;
  align-items: center;
}

.price-product {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 26px;
  margin-right: 80px;
}

.add-basket-product-button {
  border-radius: 4px;
  width: 130px;
  height: 40px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: #87ff5f;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin-right: 10px;
  transition: transform 0.3s;
}

.add-basket-product-button:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}

.like {
  transition: all 0.3s;
}

.like:hover {
  filter: invert(13%) sepia(69%) saturate(6219%) hue-rotate(2deg)
    brightness(110%) contrast(124%);
  transition: all 0.3s;
}
</style>

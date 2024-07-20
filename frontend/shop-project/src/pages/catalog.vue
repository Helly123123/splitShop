<script setup>
import CardList from "../components/catalog/card/cardList.vue";
import {
  onMounted,
  ref,
  reactive,
  watch,
  provide,
  computed,
  inject,
} from "vue";
const { cart, addToCart, removeToCart, onClickAddRemove, onClickOpenInfoCard, onClickAddPlus } =
  inject("cart");

const items = reactive([
  {
    id: 1,
    title: "Сплит система Balslu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false
  },
  {
    id: 1,
    title: "Сплит sсистема Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false
  },
  
]);
</script>

<template>
  <Header />
  <main>
    <div class="cont-catalog">
      <input class="catalog-search" type="text" placeholder="Поиск..." />
      <img class="filter-btn" src="/catalog/search.svg" alt="" />
    </div>
    <CardList
      :items="items"
      @remove-to-cart="onClickAddRemove"
      @add-to-cart="onClickAddPlus"
      @open-info-card="onClickOpenInfoCard"
      class="card-list-catalog"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      itSems: [
        {
          name: "Сплит система Ballsu",
          image: "/public/ballu.svg",
          model: "BSGR-12HN1 Greenland",
          square: "22",
          price: "21 000 ₽",
        },
        {
          name: "Сплит систsема Ballu",
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
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.catalog-search {
  border-radius: 10px;
  width: 900px;
  height: 20px;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
  background: white;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 20px;
  padding: 20px;
  outline: none;
}

.filter-btn {
  margin-left: 25px;
}

.cont-catalog {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-list-catalog {
  margin-top: 200px;
}
</style>

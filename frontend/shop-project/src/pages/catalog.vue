<script setup>
import CardList from "../components/catalog/card/cardList.vue";
import Filter from "../components/catalog/filter.vue";
import {
  onMounted,
  ref,
  reactive,
  watch,
  provide,
  computed,
  inject,
} from "vue";
const {
  cart,
  addToCart,
  removeToCart,
  onClickAddRemove,
  onClickOpenInfoCard,
  onClickAddPlus,
} = inject("cart");

const items = reactive([
  {
    id: 1,
    title: "Сплит система Balslu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false,
  },
  {
    id: 1,
    title: "Сплит sсистема Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false,
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false,
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false,
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false,
  },
  {
    id: 1,
    title: "Сплиsт система Ballu",
    image: "/public/ballu.svg",
    model: "BSGR-12HN1 Greenland",
    square: 22,
    price: 21000,
    isAdded: false,
    inDrawer: false,
  },
]);
</script>

<template>
  <Header />
  <main>
    <div class="cont">
      <Filter/>
        <CardList
        :items="items"
        @remove-to-cart="onClickAddRemove"
        @add-to-cart="onClickAddPlus"
        @open-info-card="onClickOpenInfoCard"
        class="card-list-catalog"
      />
    </div>
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
.card-list-catalog {
  /* margin-top: 200px; */
}

.cont {
  display: flex;
  justify-content: center;
    margin-top: 200px;
  gap: 200px;
}

</style>

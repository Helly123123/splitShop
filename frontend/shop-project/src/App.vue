<script setup>
import {
  onMounted,
  ref,
  reactive,
  watch,
  provide,
  computed,
  inject,
} from "vue";
import CardList from "./components/catalog/card/cardList.vue";
import InfoCardList from "./components/catalog/cardInfo/cardInfoList.vue";
import Header from "./components/header/header.vue";

const cart = ref([]);
const drawer = ref([]);
const orderCard = ref([]);
const infoCard = ref([]);
const drawerStation = ref(false);
const infoCardStation = ref(false);

const openInfoCard = () => {
  infoCardStation.value = true;
};

const closeInfoCard = () => {
  infoCardStation.value = false;
};

const openDrawer = () => {
  drawerStation.value = true;
};

const closeDrawer = () => {
  drawerStation.value = false;
};

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeToCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
  console.log("rere");
};

const onClickAddPlus = async (item) => {
  await addToCart(item);
  console.log('sdsds')
};

const onClickAddRemove = async (item) => {
  await removeToCart(item);
};

const addToCartDrawer = (item) => {
  drawer.value.push(item);
  item.isAdded = true;
};

const removeToCartDrawer = (item) => {
  drawer.value.splice(drawer.value.indexOf(item), 1);
  item.isAdded = false;
};

const onClickAddPlusDrawer = async (item) => {
  await addToCartDrawer(item);
};

const onClickAddRemoveDrawer = async (item) => {
  await removeToCartDrawer(item);
};

const clearInfoCard = async () => {
  infoCard.value = [];
};

const addToCartToInfo = (item) => {
  infoCard.value.push(item);
};

const addToCartDrawerOrder = (item) => {
  orderCard.value.push(item);
  item.inDrawer = true;
};

const removeToCartDrawerOrder = (item) => {
  orderCard.value.splice(orderCard.value.indexOf(item), 1);
  item.inDrawer = false;
};

const onClickAddPlusDrawerOrder = async (item) => {
  await addToCartDrawerOrder(item);
};

const onClickAddRemoveDrawerOrder = async (item) => {
  await removeToCartDrawerOrder(item);
};

const onClickOpenInfoCard = async (item) => {
  if (infoCard) {
    await clearInfoCard();
    addToCartToInfo(item);
    openInfoCard();
  } else {
    await addToCartToInfo(item);
    openInfoCard();
  }
};

const onClickOpenInfoCardLiked = async (item) => {
  if (infoCard) {
    await clearInfoCard();
    addToCartToInfo(item);
    openInfoCard();
    await closeDrawer();
  } else {
    await addToCartToInfo(item);
    await closeDrawer();
    openInfoCard();
  }
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

watch(
  orderCard,
  () => {
    localStorage.setItem("orderCard", JSON.stringify(orderCard.value));
  },
  { deep: true }
);

onMounted(async () => {
  const localCart = localStorage.getItem("cart");
  const localCartOrder = localStorage.getItem("orderCard");
  cart.value = localCart ? JSON.parse(localCart) : [];
  orderCard.value = localCartOrder ? JSON.parse(localCartOrder) : [];
});

provide("cart", {
  cart,
  addToCart,
  removeToCart,
  onClickAddRemove,
  onClickAddPlus,
  onClickOpenInfoCard,
});

provide("drawerCard", {
  drawer,
  addToCartDrawer,
  removeToCartDrawer,
  onClickAddPlusDrawer,
  onClickAddRemoveDrawer,
  onClickOpenInfoCardLiked,
});

provide("infoCard", {
  infoCard,
  closeInfoCard,
});

provide("drawer", {
  openDrawer,
  closeDrawer,
});

provide("orderCard", {
  onClickAddPlusDrawerOrder,
  onClickAddRemoveDrawerOrder,
  orderCard,
});
</script>

<template>
  <Drawer v-if="drawerStation" />
  <Header />
  <!-- <CardList/> -->
  <!-- <MainPage/> -->
  <!-- <Application/> -->
  <!-- <Choose/> -->
  <!-- <MainSlider/> -->
  <!-- <Slider/>  -->
  <!-- <Catalog /> -->
  <InfoCardList
    @add-drawer="onClickAddPlusDrawerOrder"
    @add-liked="onClickAddPlus"
    @remove-liked="onClickAddRemove"
    v-if="infoCardStation"
  />
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Сплит система Ballu",
          image: "../public/ballu.svg",
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

<style>
body,
html {
  background-color: #ffffff;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>

<script setup>
import { inject } from "vue";
const { openDrawer } = inject("drawer");
</script>

<template>
  <header>
    <nav class="nav">
      <a class="logo page" href="">Cold Wind</a>
      <img
        src="/header/menu.svg"
        @click="toggleMenu"
        class="menu page"
        alt=""
      />
      <div class="search-cont">
        <img src="/header/search.svg" class="search-img" alt="" />
        <input placeholder="Найти в Каталоге" class="search page" type="text" />
      </div>
      <div @click="goToOrder" class="header-btn-cont page">
        <img src="/header/bas.svg" alt="" />
        <p>Корзина</p>
      </div>
      <div @click="goToFavourites" class="header-btn-cont page">
        <img src="/header/liked.svg" alt="" />
        <p>Избранные</p>
      </div>
      <a class="login-btn page" href="">Войти</a>
    </nav>
    <div v-if="showMenu" class="menu-block">
      <h1 @click="goToMain" class="main menu-page">Главная</h1>
      <h1 @click="goToCatalog" class="catalog menu-page">Каталог</h1>
      <h1 class="about-us menu-page">О нас</h1>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    goToMain() {
      this.$router.push("/");
      this.showMenu = false;
    },
    goToOrder() {
      this.$router.push("/order");
      this.showMenu = false;
    },
    goToCatalog() {
      this.$router.push("/catalog");
      this.showMenu = false;
    },
    goToFavourites() {
      this.$router.push("/favourites");
    },
  },
};
</script>

<style scoped>
.nav {
  margin-top: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.logo {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 40px;
  text-decoration: none;
  color: black;
}

.menu {
  cursor: pointer;
}

.search-cont {
  position: relative;
  display: flex;
}

.search-img {
  position: absolute;
  left: 13px;
  top: 14px;
  width: 27px;
}

.search {
  width: 974px;
  height: 25px;
  border-radius: 15px;
  background-color: #efeeed;
  border: none;
  color: #8e8e8e;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  padding: 15px 15px 15px 45px;
  outline: none;
}

.header-btn-cont {
  height: 24px;
  background-color: #efeeed;
  display: flex;
  align-items: center;
  padding: 16px 23px 16px 23px;
  border-radius: 15px;
  cursor: pointer;
}

.header-btn-cont:hover {
  background-color: #d7d5d5;
  transition: all 0.25s;
}

.header-btn-cont p {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  margin-left: 7px;
}

.login-btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  height: 24px;
  background-color: #efeeed;
  padding: 16px 23px 16px 23px;
  border-radius: 15px;
}

.menu-block {
  position: absolute;
  width: 200px;
  height: 210px;
  background-color: #efeeed;
  border-radius: 10px;
  margin-left: 200px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.menu-page {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 25px;
  cursor: pointer;
}
</style>

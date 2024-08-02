<template>
    <div id="app">
        <header>
          <button @click="toggleMenu">Меню</button>
          <ul v-if="showMenu">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Vue.js</a></li>
          </ul>
        </header>
      </div>      
</template>

<script>
export default {
  data() {
    return {
        showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
};
</script>

<style scoped>
            
</style>

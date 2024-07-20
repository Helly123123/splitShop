<script setup>
import MainSlider from "../components/mainPage/slider/mainSlider.vue";
import Slider from "../components/mainPage/slider/slider.vue";
import Choose from "../components/mainPage/choose/choose.vue";
import Application from "../components/mainPage/application/application.vue";
import Footer from "../components/footer/footer.vue";
</script>

<template>
  <div class="cont-title">
    <MainSlider class="main-slider" />
    <div class="cont-main-title">
      <h1 class="main-title">Летние <br/> Скидки</h1>
    </div>
  </div>  
  <main class="main">
    <h1 class="slider-title">Наши новинки</h1>
    <Slider />
    <h1 class="slider-title">Почему выбирают нас?</h1>
    <Choose />
    <div class="Application-cont">
      <h1 class="slider-title">Остались вопросы?</h1>
      <Application />
    </div>
  </main>
  <Footer />
</template>

<script></script>

<style scoped>
  
body, html {
    overflow-x: hidden;
    background-color: #faf8f8;
  }

.cont-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.main-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 650;
  font-size: 140px;
  background: linear-gradient(270deg, #ff7223 0%, #ff5e5e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cont-main-title {
  margin-left: 150px;
}

.main-slider {
  margin-left: 50px;
}

.Application-cont {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.main {
  margin-top: 200px;
}

.slider-title {
  margin-left: 50px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 40px;
  margin-top: 250px;
}
</style>

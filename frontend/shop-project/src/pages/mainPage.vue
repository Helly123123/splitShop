<script setup>
  import Slider from "../components/mainPage/slider/slider.vue";
  import InfoBlock from "../components/mainPage/infoBlock/infoBlock.vue";
  import Footer from "../components/footer/footer.vue";
</script>

<template>
  <div class="cont">
    <img class="main-img" src="/mainPage/main_img.svg" alt="" />
    <div>
      <h1 class="main-title">Незабываемый Опыт</h1>
      <h2 class="main-subtitle">Cплит-системы</h2>
      <div class="info-cont">
        <div class="sect-info">
          <h1 class="title-info">90+</h1>
          <h2 class="subtitle-info">Моделей</h2>
        </div>
        <div class="sect-info">
          <h1 class="title-info">1000+</h1>
          <h2 class="subtitle-info">Установок</h2>
        </div>
      </div>
    </div>
    <div class="info-block-cont">
      <h1>Комфорт в каждый дом</h1>
      <p>
        Мы предлагаем профессиональную установку сплит-систем, чтобы обеспечить
        вам и вашим <br />
        близким максимальный комфорт в любое время года. Наша компания
        специализируется на <br />
        установке современных и надёжных сплит-систем от ведущих производителей.
      </p>
      <button class="btn">Каталог</button>
    </div>
  </div>
  <main class="main">
    <InfoBlock/>
    <div class="reviews-cont">
      <h1 class="reviews-title">Отзывы наших клиентов</h1>
      <Slider/>
    </div>
  </main>
  <Footer/>
</template>

<script></script>

<style scoped>
.cont {
  text-align: center;
  margin-top: 150px;
}

.main-img {
  box-shadow: 0 15px 34px 0 rgba(141, 205, 226, 0.15),
    0 61px 61px 0 rgba(141, 205, 226, 0.13),
    0 138px 83px 0 rgba(141, 205, 226, 0.08),
    0 245px 98px 0 rgba(141, 205, 226, 0.02),
    0 383px 107px 0 rgba(141, 205, 226, 0);
}
.main-title {
  margin-top: 100px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 80px;
}

.main-subtitle {
  margin-top: -40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 50px;
}

.info-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.title-info {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: -20px;
}

.subtitle-info {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 40px;
}

.info-block-cont h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 60px;
  margin-top: 150px;
}

.info-block-cont p {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: #666;
  text-align: center;
}

.btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: white;
  border-radius: 15px;
  background: #504f4f;
  width: 291px;
  height: 72px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.05s;
}

.btn:hover {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: white;
  border-radius: 15px;
  background: #646363;
  width: 291px;
  height: 72px;
  text-align: center;
  border: none;
  transition: all 0.15s;
}

.main {
  margin-top: 250px;
}

.reviews-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 60px;
  margin-bottom: 100px;
}

.reviews-cont {
  margin-top: 250px;
}

</style>

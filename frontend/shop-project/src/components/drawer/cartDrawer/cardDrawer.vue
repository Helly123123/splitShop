<script setup>
    defineProps({
      title: String,
      image: String,
      model: String,
      square: Number,
      price: Number,
      onClickRemove: Function,
      OnClickOpenInfoCard: Function
    })
</script>

<template>
    <div class="card">
        <div class="img-card-cont">
          <img @click="onClickRemove" class="like-img" src="/like.svg"  alt="">
          <img class="img-card" src="/public/catalog/haier.svg" alt="" />
        </div>
        <div class="info-card">
          <h1>{{ title }}</h1>
          <p>
            Модель: <span class="subtitle">{{ model }}</span>
          </p>
          <p>
            Площадь: <span class="subtitle">{{ square }} м²</span>
          </p>
          <h2>{{ price }} ₽</h2>
          <button>Подробнее</button>
        </div>
      </div>
</template>

<script>

</script>

<style scoped>
.img-card-cont {
  width: 337px;
  height: 210px;
  background-color: #f6f6f6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.card {
  margin-bottom: 80px;
}

.info-card {
  text-align: left;
}

.info-card h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 28px;
}

.info-card p {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #666666;
}

.subtitle {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: black;
}

.info-card h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 30px;
}

.info-card button {
  border-radius: 10px;
  width: 337px;
  height: 50px;
  background: #55a34f;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 23px;
  border: none;
  color: white;
  transition: all 0.15s;
}

.like-img {
  position: absolute;
  top: 15px;
  left: 305px;
  width: 19px;
  transition: all 0.15s;
  filter: invert(70%) sepia(6%) saturate(6201%) hue-rotate(309deg) brightness(107%) contrast(116%);
}

.info-card button:hover {
  background: #53924f;
  transition: all 0.25s;
}
</style>
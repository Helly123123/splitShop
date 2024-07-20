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
    <div class="cart-drawer">
        <img class="img-drawer" :src="image" alt="">
        <div class="info-drawer-cont">
            <h1 class="title-drawer-card">{{title}}</h1>
            <div class="subtitle-driwer-cont">
                <p class="model-drawer">Модель: <span>{{model}}</span></p>
                <p class="square-drawer">Площадь: <span>{{square}} м²</span></p>
            </div>
            <div class="price-drawer-cont">
                <h1 class="price-drawer">{{price}} ₽</h1>
                <button @click="OnClickOpenInfoCard" class="add-to-card-drawer">Подробнее</button>
                <img @click="onClickRemove" class="like" src="/un_like.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.cart-drawer {
    display: flex;
    border-radius: 13px;
    width: 644px;
    height: 229px;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
    background-color: white;
    margin-bottom: 30px;
}

.img-drawer {
    width: 250px;
    margin-left: 20px;
}

.info-drawer-cont {
    /* text-align: center; */
    margin-left: 45px;
}

.title-drawer-card {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 25px; 
}

.model-drawer {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px; 
}

.model-drawer span {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 15px; 
}

.square-drawer {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px; 
}

.square-drawer span {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 15px; 
}

.price-drawer-cont {
    display: flex;
    align-items: center;
}

.price-drawer {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 30px; 
}

.add-to-card-drawer {
    border-radius: 4px;
    width: 110px;
    height: 35px;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.08), 0 0 6px 0 rgba(0, 0, 0, 0.02);
    background: #c1ffac;
    border: none;
    margin-left: 40px;
    margin-right: 10px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 13px;
    transition: all 0.3s;   
}
.add-to-card-drawer:hover {
    width: 120px;
    height: 38px;
    transition: all 0.15s;
}
</style>
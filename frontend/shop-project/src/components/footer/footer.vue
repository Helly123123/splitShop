<template>
<footer>
    <div class="logo-footer-cont">
        <h1 class="logo-footer">ColdWind</h1>
    </div>
    <div class="info-footer-cont">
        <h1 class="main-title-footer">Контакты</h1>
        <h2 class="title-footer">Телефон</h2>
        <p class="subtitle-footer">+7922 855 6998</p>
        <p class="subtitle-footer">+7922 855 6998</p>
    </div>
    <div class="info-footer-cont">
        <h1 class="main-title-footer">Навигация</h1>
        <p class="subtitle-footer">Главная</p>
        <p class="subtitle-footer">Каталог</p>
        <p class="subtitle-footer">О нас</p>
    </div>
</footer>
</template>

<script>

</script>

<style scoped>
footer {
    display: flex;
    margin-top: 200px;
    width: 100%;
    height: 348px;
    background-color: #5a5a5a;
}

.logo-footer-cont {
    margin-left: 100px;
    margin-top: 50px;
}

.info-footer-cont {
    margin-left: 500px;
    margin-top: 50px;
}

.logo-footer {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 35px;
}

.main-title-footer {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 35px;
}

.title-footer {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 25px;
}

.subtitle-footer {
    cursor: pointer;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 20px;
}

.subtitle-footer:hover {
    text-decoration: underline;
    cursor: pointer;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 20px;
}

</style>
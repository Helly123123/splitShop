<template>
    <header>
       <nav class="nav">
        <a class="page" href="">Корзина</a>
        <a class="page" href="">Избранное</a>
        <a class="logo" href="">Cold Wind</a>
        <a class="page" href="">О нас</a>
        <a class="page" href="">Каталог</a>
        <a class="page" href="">Войти</a> 
       </nav>
    </header>
</template>

<script>

</script>

<style scoped>
.nav {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}

.page {
    position: relative;
    margin: 13px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 30px; 
    text-decoration: none;
    color: black;
    transition: all 0.2s;
}


.page:hover:before {
    transform: scaleX(1);
    transition: transform 0.25s;
}

.page:before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgb(141, 141, 141);
    position: absolute;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 0.25s;
}



.logo {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    background: linear-gradient(270deg, #88c9f9 0%, #5c87c7 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: font-size 0.1s;
}

.logo:hover {
    transition: font-size 0.1s;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 43px;
    background: linear-gradient(270deg, #88c9f9 0%, #5c87c7 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.login {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 22px; 
    text-decoration: none;
    color: black;
}


</style>
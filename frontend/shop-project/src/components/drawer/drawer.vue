<script setup>
    import CardDrawerList from "./cartDrawer/cardDrawerList.vue";
    import NoItemDrawer from "./noItemDriver.vue";
    import {inject, reactive} from 'vue'
    const {closeDrawer, } = inject('drawer')
    const {onClickAddRemove, cart} = inject('cart')
    const {drawer} = inject('drawerCard')
    const {onClickOpenInfoCardLiked} = inject('drawerCard')
</script>

<template>
    <div class="black-fon"></div>
    <div class="drawer-cont">
        <img @click="closeDrawer" class="img-close-drawer" src="/drawer/close.svg" alt="">
        <div class="drawer-header-cont">
            <h1 class="title-drawer">Избранные</h1>
        </div>
        <div v-if="cart.length > 0" class="cart-drawers">
            <CardDrawerList @open-info-card="onClickOpenInfoCardLiked" @remove-to-cart="onClickAddRemove" />
        </div>
        <div v-else>
            <NoItemDrawer/>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

.black-fon {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 50%;
    z-index: 100;
    top: 0;
    left: 0;
}

.drawer-cont {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #FAF8F8;
    z-index: 150;
    height: 100%;
    width: 700px;
}

.drawer-header-cont {
    padding: 20px;
    display: flex;  
    margin-top: 20px;
    align-items: center;
    justify-content: center;
}

.title-drawer {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 35px;    
}

.img-close-drawer {
    position: absolute;
    top: 60px;
    left: 40px;
    cursor: pointer;
    opacity: 30%;
    transition: all 0.25s;
}

.img-close-drawer:hover {
opacity: 70%;
transition: all 0.25s;
}

.cart-drawers {
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 650px;
    width: 700px;
    overflow: auto;
    /* overflow-y: scroll; */
}

.cart-drawers::-webkit-scrollbar {
    width: 5px; /* ширина скролла */
    
}

.cart-drawers::-webkit-scrollbar-thumb {
    background-color: #999; /* цвет полосы скролла */
    border-radius: 50px;
}

.cart-drawers::-webkit-scrollbar-track {
    background-color: #f5f5f5; /* цвет фона скролла */
}


</style>
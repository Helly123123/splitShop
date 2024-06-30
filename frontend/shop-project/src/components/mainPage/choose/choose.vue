<template>
        <div class="cont-grid">
            <div class="item-choose">
                <img style="width: 45px;" src="/choose/Official_suppliers.svg" alt="">
                <p>Официальные поставщики</p>
            </div>
            <div class="item-choose">
                <img style="width: 45px;" src="/choose/twelwe_year.svg" alt="">
                <p>20 лет опыта на рынке</p>
            </div>
            <div class="item-choose">
                <img style="width: 45px;" src="/choose/good_price.svg" alt="">
                <p>Гарантия лучшей цены</p>
            </div>
            <div class="item-choose">
                <img style="width: 45px;" src="/choose/big_shop.svg" alt="">
                <p>Большой ассортимент</p>
            </div>
        </div>
</template>

<script>

</script>

<style scoped>
.cont-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));  
  place-items: center;
}

.item-choose {
    display: flex;
    align-items: center;
    border-radius: 11px;
    width: 300px;
    height: 100px;
    background: rgba(234, 234, 234, 0.5);
    padding: 0px 20px 0px 20px;
}

.item-choose p {
    margin-left: 40px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 25px;
}
</style>
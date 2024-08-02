<template>
<footer class="footer">
    <div class="footer-cont">
        <h1>ColdWind</h1>
        <h2>Контакты</h2>
        <div class="footer-contacts">
            <img src="/footer/num.svg" alt="">
            <p>8 922 855-69-98</p>
        </div>
        <div class="footer-contacts">
            <img src="/footer/email.svg" alt="">
            <p>ColdWind.help@mail.ru</p>
        </div>
    </div>
        <div class="card">
        </div>
</footer>
</template>

<script>

</script>

<style scoped>
.footer {
    margin-top: 300px;
    display: flex;
    align-items: center;
    gap: 700px;
    padding: 30px;
    height: 352px;
    background-color: #5A5A5A;
    text-align: left;
}

.footer-cont {
    margin-left: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.footer h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 50px;
    color: white;
}

.footer h2 {
    margin-top: 40px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 40px;
    color: #B0B0B0;
}

.footer-contacts {
    display: flex;
    gap: 10px;
    margin-top: -40px;
}

.footer-contacts p {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 30px;
    color: #ffffff;
}

.card {
    width: 500px;
    height: 300px;
    background-color: rgb(153, 153, 153);
    border-radius: 10px;
}

</style>
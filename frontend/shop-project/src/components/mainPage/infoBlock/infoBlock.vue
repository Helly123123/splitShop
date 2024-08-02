<template>
  <div class="section-block">
    <div class="img-block">
      <img class="img" src="/mainPage/one_img.svg" alt="" />
    </div>
    <div class="text-cont">
      <h1>Опыт и профессионализм</h1>
      <p>
        Наши мастера имеют большой опыт работы с <br />
        различными типами сплит-систем и готовы <br />
        предложить оптимальное решение для <br />
        вашего дома.
      </p>
    </div>
  </div>
  <div class="section-block">
    <div class="text-cont">
      <h1>Качество</h1>
      <p>
        Мы работаем только с проверенными <br />
        брендами, чтобы гарантировать <br />
        долговечность и надёжность наших систем.
      </p>
    </div>
    <div class="img-block">
      <img class="img" src="/mainPage/two_img.svg" alt="" />
    </div>
  </div>
  <div class="section-block">
    <div class="img-block">
      <img class="img" src="/mainPage/thre_img.svg" alt="" />
    </div>
    <div class="text-cont">
      <h1>Индивидуальный подход</h1>
      <p>
        Мы учитываем все ваши пожелания и <br />
        требования при выборе и установке <br />
        сплит-системы.
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.section-block {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
}

.text-cont {
  text-align: left;
}

.text-cont h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 50px;
}

.text-cont p {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: #666;
}

.img-block {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 48px 78px;
  width: 500px;
  height: 250px;
  background: #ececec;
  box-shadow: 0 17px 36px 0 rgba(0, 0, 0, 0.1),
    0 66px 66px 0 rgba(0, 0, 0, 0.09), 0 149px 90px 0 rgba(0, 0, 0, 0.05),
    0 265px 106px 0 rgba(0, 0, 0, 0.01), 0 415px 116px 0 rgba(0, 0, 0, 0);
}

.img {
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.1), 0 17px 17px 0 rgba(0, 0, 0, 0.09),
    0 37px 22px 0 rgba(0, 0, 0, 0.05), 0 66px 27px 0 rgba(0, 0, 0, 0.01),
    0 104px 29px 0 rgba(0, 0, 0, 0);
}
</style>

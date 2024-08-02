<template>
  <div class="filter-cont">
    <h1>Цена, ₽</h1>
    <div class="cont-input">
      <input class="input" placeholder="От 21 500" type="number" />
      <input class="input" placeholder="До 49 000" type="number" />
    </div>
    <h1>Производитель</h1>
    <div>
      <form action="">
        <label class="manufacturer-label">
          <input
            @change="onChangeSelectManufacturer"
            value="Ballu"
            type="radio"
            name="radio"
            class="manufacturer-input"
          />
          <span class="manufacturer-input-title">Ballu</span>
        </label>
        <label class="manufacturer-label">
          <input
            @change="onChangeSelectManufacturer"
            value="Ballu"
            type="radio"
            name="radio"
            class="manufacturer-input"
          />
          <span class="manufacturer-input-title">Haier</span>
        </label>
        <label class="manufacturer-label">
          <input
            @change="onChangeSelectManufacturer"
            value="Ballu"
            type="radio"
            name="radio"
            class="manufacturer-input"
          />
          <span class="manufacturer-input-title">Dahatsu</span>
        </label>
        <label class="manufacturer-label">
          <input
            @change="onChangeSelectManufacturer"
            value="Ballu"
            type="radio"
            name="radio"
            class="manufacturer-input"
          />
          <span class="manufacturer-input-title">Dantex</span>
        </label>
        <label class="manufacturer-label">
          <input
            @change="onChangeSelectManufacturer"
            value="Ballu"
            type="radio"
            name="radio"
            class="manufacturer-input"
          />
          <span class="manufacturer-input-title">Бирюса</span>
        </label>
      </form>
    </div>
    <h1>Площадь, м²</h1>
    <div class="cont-input">
      <input class="input" placeholder="От 22" type="number" />
      <input class="input" placeholder="До 53" type="number" />
    </div>
    <div class="btn-cont">
      <button>Применить</button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.filter-cont {
  text-align: left;
}

.filter-cont h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 35px;
}

.input {
  border: 2px solid #666;
  border-radius: 15px;
  height: 23px;
  width: 100px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #666;
  padding: 10px;
}

.cont-input {
  display: flex;
  gap: 20px;
}

.manufacturer-input-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 25px;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  display: flex;
  height: 180px;
  width: 295px;
  overflow: auto;
  gap: 20px;
  margin-top: 0px;
}

form::-webkit-scrollbar {
  width: 5px; /* ширина скролла */
}

form::-webkit-scrollbar-thumb {
  background-color: #d9d9d9; /* цвет полосы скролла */
  border-radius: 50px;
}

form::-webkit-scrollbar-track {
  /* background-color: #f5f5f5; цвет фона скролла */
}

.manufacturer-label {
  display: flex;
  align-items: center;
  gap: 5px;
}

input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
}

input[type="radio"]:checked {
  background-color: #494949; /* изменить цвет фона при выборе */
}

input[type="radio"] {
  border-radius: 7px;
  width: 17px;
  height: 17px;
  background: #d9d9d9;
}

.btn-cont {
  text-align: center;
}

.btn-cont button {
  border-radius: 10px;

  width: 300px;
  height: 40px;
  border: none;
  background: #504f4f;
  margin-top: 30px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: white;
}
</style>

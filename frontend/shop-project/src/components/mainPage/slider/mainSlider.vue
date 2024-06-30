<template>
  <div class="slider">
    <div :style="oneStyle" class="slider-item"></div>
    <div :style="twoStyle" class="slider-item"></div>
    <div :style="threeStyle" class="slider-item"></div>
    <div :style="fourStyle" class="slider-item"></div>
    <div class="btn-cont">
      <button :style="btnOneStyle" @click="oneClick" class="btn-slider"></button>
      <button :style="btnTwoStyle" @click="twoClick" class="btn-slider"></button>
      <button
        :style="btnThreeStyle"
        @click="threeClick"
        class="btn-slider"
      ></button>
      <button
        :style="btnFourStyle"
        @click="fourClick"
        class="btn-slider"
      ></button>
    </div>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      oneStyle: {
        display: "",
      },
      twoStyle: {
        display: "none",
        backgroundColor: "blue",
      },
      threeStyle: {
        display: "none",
        backgroundColor: "green",
      },
      fourStyle: {
        display: "none",
        backgroundColor: "gray",
      },
      btnOneStyle: {
        opacity: "",
      },
      btnTwoStyle: {
        opacity: "50%",
      },
      btnThreeStyle: {
        opacity: "50%",
      },
      btnFourStyle: {
        opacity: "50%",
      },
    };
  },
  methods: {
    oneClick() {
      this.oneStyle.display = "";
      this.twoStyle.display = "none";
      this.threeStyle.display = "none";
      this.fourStyle.display = "none";
      this.btnOneStyle.opacity = "";
      this.btnTwoStyle.opacity = "50%";
      this.btnThreeStyle.opacity = "50%";
      this.btnFourStyle.opacity = "50%";
    },
    twoClick() {
      this.oneStyle.display = "none";
      this.twoStyle.display = "";
      this.threeStyle.display = "none";
      this.fourStyle.display = "none";
      this.btnOneStyle.opacity = "50%";
      this.btnTwoStyle.opacity = "";
      this.btnThreeStyle.opacity = "50%";
      this.btnFourStyle.opacity = "50%";
    },
    threeClick() {
      this.oneStyle.display = "none";
      this.twoStyle.display = "none";
      this.threeStyle.display = "";
      this.fourStyle.display = "none";
      this.btnOneStyle.opacity = "50%";
      this.btnTwoStyle.opacity = "50%";
      this.btnThreeStyle.opacity = "";
      this.btnFourStyle.opacity = "50%";
    },
    fourClick() {
      this.oneStyle.display = "none";
      this.twoStyle.display = "none";
      this.threeStyle.display = "none";
      this.fourStyle.display = "";
      this.btnOneStyle.opacity = "50%";
      this.btnTwoStyle.opacity = "50%";
      this.btnThreeStyle.opacity = "50%";
      this.btnFourStyle.opacity = ""
    },
  },
};
</script>

<style scoped>
.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.slider-item {
  border-radius: 15px;
  width: 950px;
  height: 550px;
  background-color: red;
}

.btn-cont {
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.btn-slider {
  cursor: pointer;
  /* opacity: 50%; */
  border: none;
  outline: none;
  margin: 10px;
  border-radius: 100px;
  width: 25px;
  height: 25px;
  background-color: #cbcaca;
}
</style> 


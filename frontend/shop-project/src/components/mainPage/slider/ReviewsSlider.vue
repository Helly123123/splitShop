<template>
  <div class="cont">
    <img class="btn" @click="prevSlide" src="/mainPage/left.svg" alt="" />
    <div class="slider">
      <div class="slider-inner" :style="sliderStyle">
        <div class="review" v-for="review in visibleReviews" :key="review.id">
          <h1 class="review-name">{{ review.name }}</h1>
          <img src="/mainPage/gold.svg" alt="" />
          <p class="review-mes">{{ review.text }}</p>
        </div>
      </div>
    </div>
    <img class="btn" @click="nextSlide" src="/mainPage/right.svg" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    visibleReviews() {
      return this.reviews.slice(this.currentIndex, this.currentIndex + 2);
    },
    sliderStyle() {
      return {
        display: "flex",
        transition: "transform 0.5s ease",
      };
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex + 2 < this.reviews.length) {
        this.currentIndex += 2;
      }
    },
    prevSlide() {
      if (this.currentIndex - 2 >= 0) {
        this.currentIndex -= 2;
      }
    },
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider {
  width: 1400px;
  overflow: hidden;
}

.slider-inner {
  display: flex;
  gap: 50px;
}

.review {
  padding: 20px 50px 20px 50px;
  text-align: left;
  width: 1000px;
  height: 500px;
  background-color: #ececec;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

.btn {
  margin: 0px 30px 0px 30px;
}

.review-name {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 45px;
}

.review-mes {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 20px;
}
</style>

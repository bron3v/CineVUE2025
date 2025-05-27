<template>
  <div class="carousel-wrapper">
    <!-- Contenitore slider -->
    <div class="carousel-slider">
      <!-- Pulsante prev -->
      <button class="nav left" @click="prev"><img src="../assets/icons/chevron_left.svg"></button>

      <!-- Slides -->
      <div
        v-for="(img, i) in images"
        :key="i"
        v-show="currentIndex === i"
        class="slider"
      >
        <img :src="img" />
      </div>

      <!-- Pulsante next -->
      <button class="nav right" @click="next"><img src="../assets/icons/chevron_right.svg"></button>
    </div>

    <!-- Indicatori -->
    <div class="dots">
      <span
        v-for="(img, i) in images"
        :key="i"
        @click="goTo(i)"
        :class="currentIndex === i ? 'dot active' : 'dot'"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/images/admin1.png',
        '/images/admin2.png',
      ],
      currentIndex: 0,
      interval: null,
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    goTo(index) {
      this.currentIndex = index
    },
    startAutoSlide() {
      this.interval = setInterval(this.next, 3000)
    },
  },
  mounted() {
    this.startAutoSlide()
  }
}
</script>

<style scoped>
.carousel-wrapper {
  max-width: 600px;
  margin: auto;
}

.carousel-slider {
  position: relative;
  overflow: hidden;
}

.slider {
  text-align: center;
}

.slider img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  border-radius: 10px;
}

.nav > img{
  fill: black;
  z-index: 10;
}

.nav.left {
  left: 10px;
}

.nav.right {
  right: 10px;
}

.dots {
  text-align: center;
  margin-top: 10px;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: gray;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background: blue;
}
</style>

<template>
  <div id="app">
    <div class="my-container flex h-screen">
      <div class="slider pt-10 pl-20 sm:w-full w-5/6">
        <Slider />
      </div>
      <div class="sidebar p-10 flex justify-center h-screen sm:w-full w-1/6">
        <SideBar />
      </div>
      <div class="w-1 left-2 opacity-25 bg-gray-300 h-full top-0 bg-black absolute border-r"></div>
    </div>
  </div>
</template>
<script>

import SideBar from './components/SideBar.vue'
import Slider from './components/Slider.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    Slider
  },created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },
  methods: {
    async accept() {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  }
}
</script>

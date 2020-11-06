<template>
  <div id="app">
    <div class="flex h-screen">
      <div class="w-5/6 pt-10 pl-20">
        <Slider />
      </div>
      <div class="w-1/6 p-10 flex justify-center h-screen">
        <SideBar />
      </div>
      <div class="w-1 left-2 opacity-25 bg-gray-200 h-full top-0 bg-black absolute border-r"></div>

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
  }
}
</script>

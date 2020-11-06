<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="flex h-screen">
      <div class="w-1/2 flex justify-between flex-col flex-wrap">
        <span class="font-light text-xs">Dubai, UAE</span>
        <div class="controls">
          <h2 class="text-6xl leading-tight w-16 font-light">Jumehira Villa</h2>
          <div class="my-swiper-button-prev inline uppercase text-xs pr-3" slot="button-prev" @click="prev()">Prev.</div>
          <div class="my-swiper-button-next inline uppercase text-xs" slot="button-next" @click="next()">Next</div>
       </div>
        <div>01 / 02</div>
      </div>
      <div class="w-1/2 relative">
       <img src="../assets/images/jumehira.png" alt="jumehira" class="h-slide">
       <button class="w-48 text-left bg-white absolute inset-x-0 bottom-0 pt-6 focus:outline-none">
        <span class="uppercase text-xs font-normal tracking-widest">Details
          <svg class="inline ml-10" width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="#333333"/>
          </svg>
        </span>
        </button>
      </div>
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'main-swiper',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods: {
      prev() {
        this.$refs.mySwiper.$swiper.slidePrev();
      },
      next() {
        this.$refs.mySwiper.$swiper.slideNext();
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    },
  }
</script>
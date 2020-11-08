<template>
  <swiper ref="mySwiper" :options="swiperOptions"
                         :auto-update="true"
                         :auto-destroy="true"
                         :delete-instance-on-destroy="true"
                         :cleanup-styles-on-destroy="true">
    <swiper-slide class="flex h-screen" v-for="(villa, villaKey) in villaData" :key="villa.villa_name">
      <div class="w-1/2 flex justify-between flex-col flex-wrap villa-info">
        <span class="font-light lg:text-xs">{{villa.villa_location}}</span>
        <div class="controls">
          <h2 class="text-6xl leading-tight w-16 font-light">{{villa.villa_name}}</h2>
          <div class="flex flex-row-reverse">
            <div class="w-40 bg-gray-300 border-r opacity-25 h-onepx mt-2 ml-4"></div>
            <div class="my-swiper-button-next swiper-btn inline uppercase outline-none text-sm tracking-widest cursor-pointer font-light" slot="button-next" @click="next()">Next</div>
            <div class="my-swiper-button-prev swiper-btn inline uppercase outline-none text-sm pr-10 tracking-widest cursor-pointer font-light" slot="button-prev" @click="prev()">Prev.</div>
          </div>
       </div>
        <div class="text-gray-dark text-2xl opacity-25 font-light sm:hidden">
          <span class="mr-4 ml-2" v-if="villaKey < 10">0{{villaKey+1}}</span>
          <span class="mr-4 ml-2" v-else>>{{villaKey+1}}</span>
          <svg class="inline" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="31.3536" y1="0.353553" x2="0.353553" y2="31.3536" stroke="#E0E0E0"/>
          </svg>
          <span class="ml-2" v-if="villaData.length < 10">0{{villaData.length}}</span>
          <span class="ml-2" v-else>>{{villaData.length}}</span>
        </div>
      </div>
      <div class="w-1/2 relative full-sm slider-img cursor-pointer">
      <div class="inline-block overflow-hidden">
        <img v-bind:src="getSliderImage(villa)" :alt="getSliderImage(villa)" class="h-slide transition-all duration-700">
      </div>
       <button class="w-48 text-left bg-white absolute inset-x-0 detail-btn bottom-0 pt-6 focus:outline-none">
        <span class="uppercase text-xs font-normal tracking-widest">Details
          <svg class="inline ml-2 transition-all duration-500" width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="#333333"/>
          </svg>
        </span>
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  import villaJson from '../data/villa-data.json'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'main-swiper',
    data() {
      return {
        villaData: villaJson,
        components: {
          Swiper,
          SwiperSlide
        },
        swiperOptions: {
          watchOverflow: true,
          fadeEffect: { crossFade: true },
          effect: "fade",
          speed: 1000,
          autoplay: true,
          grabCursor: true,
          parallax: true,
          watchSlidesProgress: true,
          mousewheelControl: true,
          keyboardControl: true,
          navigation: {
            nextEl: '.my-swiper-button-next',
            prevEl: '.my-swiper-button-prev',
          }
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
      },
      getSliderImage(villa) {
        return villa.villa_image;
      }
    },
    mounted() {
    },
  }
</script>
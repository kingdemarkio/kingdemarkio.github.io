<script setup>
import Mark from '@/components/Mark.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

</script>

<template>
    <Swiper class="w-full h-screen relative" :modules="[Navigation, Pagination, Keyboard]" navigation pagination keyboard :loop="true">
        <header class="absolute top-0 left-0 z-50 sm:flex items-center px-16 py-8 hidden gap-16">
            <RouterLink to="/" class="hover:opacity-40 transition-opacity duration-300">
                <Mark class="w-16 h-16 text-white animate-spin-slow" />
            </RouterLink>
        </header>
        <SwiperSlide v-for="sectionIndex in 6" :key="sectionIndex" class="w-full h-full">
            <section class="w-full h-full bg-main/40 grid grid-cols-3 grid-rows-2 gap-8 p-8">
                <div v-for="index in 6" :key="index" class="w-full h-full bg-white/20 backdrop-blur-3xl border border-white/20 rounded-xl flex flex-col items-center justify-center gap-4">
                    <img src="/store/black-tee.webp" alt="Plain Black Tee" class="h-auto w-32">
                    <div class="text-center">
                        <p class="font-bold">Black Gildan Tee</p>
                        <p class="text-xs font-light">USD$120.00</p>
                    </div>
                    <button class="px-8 py-2 bg-white text-black rounded-full drop-shadow-2xl hover:scale-110 transition-transform duration-300">Buy Now</button>
                </div>
            </section>
        </SwiperSlide>
    </Swiper>
</template>

<style scoped>

</style>
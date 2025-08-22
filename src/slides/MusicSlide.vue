<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import SoundCloudIcon from '@/icons/SoundCloudIcon.vue';
</script>

<template>
    <section class="w-full h-screen flex flex-col py-16 bg-black/40 backdrop-blur-3xl text-white section-fade-edges">
        <h3 class="text-4xl sm:text-6xl font-bold px-16 sm:pb-8">Listen Carefully</h3>
        <Swiper class="w-full h-full mb-16 sm:mb-0" :modules="[Navigation, Pagination, Keyboard]" navigation pagination keyboard>
            
            <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                    <a href="https://soundcloud.com/kingdemarkio/super-bad-freestyle" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                        <img src="/covers/super-bad-freestyle.png" alt="Cover Art">
                        <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                            <SoundCloudIcon class="w-24 h-24 drop-shadow" />
                        </div>
                    </a>
                    <p class="text-2xl font-black pt-8 px-16 text-center max-w-lg min-h-24 uppercase">Super Bad Freestyle</p>
                    <p class="text-xl font-light pt-2">DeMarkio</p>
                    <p class="text-xs pt-4 uppercase">Single &bull; 1:37AM On Friday August 22nd</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
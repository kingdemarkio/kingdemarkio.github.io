<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import SoundCloud from '@/icons/SoundCloud.vue';
</script>

<template>
    <section class="snap-section snap-start w-full h-screen flex flex-col py-16 bg-black/40 backdrop-blur-3xl text-white section-fade-edges">
        <h3 class="text-4xl sm:text-6xl font-bold px-16 sm:pb-8">Listen Carefully</h3>
        <Swiper class="w-full h-full mb-16 sm:mb-0" :modules="[Navigation, Pagination, Keyboard]" navigation pagination keyboard>
            
            <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                    <a href="https://soundcloud.com/kingdemarkio/super-bad-freestyle" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                        <img src="/covers/super-bad-freestyle.png" alt="Cover Art">
                        <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                            <SoundCloud class="w-24 h-24 drop-shadow" />
                        </div>
                    </a>
                    <p class="text-2xl font-black pt-8 px-16 text-center max-w-lg min-h-24 uppercase">Super Bad Freestyle</p>
                    <p class="text-xl font-light pt-2">DeMarkio</p>
                    <p class="text-xs pt-4 uppercase">Single &bull; 1:37AM On Friday August 22nd</p>
                </div>
            </SwiperSlide>
            
            <template v-if="false">
            <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                    <a href="https://soundcloud.com/kingdemarkio" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                        <img src="/covers/so-good.png" alt="Cover Art">
                        <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                            <SoundCloud class="w-24 h-24 drop-shadow drop-shadow-black" />
                        </div>
                    </a>
                    <p class="text-2xl font-black pt-8 px-16 text-center max-w-lg min-h-24 uppercase">SO GOOD THAT IT LOOKS SUPER BAD AND THAT'S EVIL</p>
                    <p class="text-xl font-light pt-2">DeMarkio</p>
                    <p class="text-xs pt-4 uppercase">Single &bull; Work In Progress</p>
                </div>
            </SwiperSlide>
            <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                    <a href="https://soundcloud.com/kingdemarkio" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                        <img src="/covers/01-fake-fucks.png" alt='"Fake Fucks" Cover Art'>
                        <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                            <SoundCloud class="w-24 h-24 drop-shadow drop-shadow-black" />
                        </div>
                    </a>
                    <p class="text-2xl font-black pt-8 px-16 text-center max-w-lg min-h-24 uppercase">Plan B: No Fake Fucks Allowed</p>
                    <p class="text-xl font-light pt-2">DeMarkio</p>
                    <p class="text-xs pt-4 uppercase">Single &bull; Work In Progress</p>
                </div>
            </SwiperSlide>
            <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                    <a href="https://soundcloud.com/kingdemarkio" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                        <img src="/covers/02-doomsday.jpg" alt='"Fake Fucks" Cover Art'>
                        <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                            <SoundCloud class="w-24 h-24 drop-shadow drop-shadow-black" />
                        </div>
                    </a>
                    <p class="text-2xl font-black pt-8 px-16 text-center max-w-lg min-h-24 uppercase">Doomsday Scenario From Cornwall Ontario</p>
                    <p class="text-xl font-light pt-2">DeMarkio</p>
                    <p class="text-xs pt-4 uppercase">Album &bull; 2025-08-27</p>
                </div>
            </SwiperSlide>
            </template>
            <SwiperSlide v-if="false" class="w-full h-full cursor-grab active:cursor-grabbing">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                    <a href="https://soundcloud.com/kingdemarkio" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                        <img src="/covers/02-doomsday.jpg" alt='"Fake Fucks" Cover Art'>
                        <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                            <SoundCloud class="w-24 h-24 drop-shadow drop-shadow-black" />
                        </div>
                    </a>
                    <p class="text-2xl font-black pt-8">Doomsday Scenario From Cornwall Ontario</p>
                    <p class="text-xl font-light pt-2">DeMarkio</p>
                    <p class="text-xs pt-4 uppercase">Album &bull; 2025-08-27</p>
                </div>
            </SwiperSlide>
            <SwiperSlide v-if="false" class="w-full h-full cursor-grab active:cursor-grabbing">
                <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                    <a href="https://soundcloud.com/kingdemarkio" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                        <img src="/covers/the-clown-got-he-crown.jpg" alt="Album Cover">
                        <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                            <SoundCloud class="w-24 h-24" />
                        </div>
                    </a>
                    <p class="text-2xl font-black pt-8">The Clown Got He Crown</p>
                    <p class="text-xl font-light pt-2">DeMarkio</p>
                    <p class="text-xs pt-4 uppercase">Single</p>
                </div>
            </SwiperSlide>
            <template v-if="false">
                <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-01.png" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8">This Nazi Loves Jews</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">Not Released</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/album-01.jpg" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8">Doomsday Scenario From Cornwall Ontario</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">Not Released</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-02.png" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8">Birthday Wish</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 28th, 2025</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/album-02.png" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8">Double Cross</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">Not Released</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-03.png" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8">Oh Shit! It's 6:66 O'clock on Judgement Day</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 29th, 2025</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-04.jpg" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8">Two Aliens Did Choose Cornwall</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 30th, 2025</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-04.jpg" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8">Who's The Real Slim Shady?</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 30th, 2025</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-04.jpg" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8 w-full max-w-xl">Unholy Mother of Satan! What a Horrific Beast.</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 30th, 2025</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-04.jpg" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8 w-full max-w-xl text-center">Rachel is the New Name for Infidel Moms</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 30th, 2025</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-04.jpg" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8 w-full max-w-xl text-center">Rachel Gave Birth To Baby Jesus.<br>Then Convinced Him To Become The Devil.</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 30th, 2025</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                        <div class="w-64 h-64 rounded-lg overflow-hidden relative group">
                            <img src="/assets/covers/single-05.png" alt="Album Cover">
                            <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                <Play class="w-24 h-24" v-if="false" />
                                <Pause class="w-24 h-24" v-if="true" />
                            </div>
                        </div>
                        <p class="text-2xl font-black pt-8 w-full max-w-xl text-center">Condom Sex is Fake. Time for Plan B</p>
                        <p class="text-xl font-light pt-2">DeMarkio</p>
                        <p class="text-xs pt-4">August 30th, 2025</p>
                    </div>
                </SwiperSlide>
            </template>
        </Swiper>
    </section>
</template>

<style scoped>

</style>
<script setup>
import Logo from '@/components/Logo.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import Instagram from '@/icons/Instagram.vue';
import OnlyFans from '@/icons/OnlyFans.vue';
import SnapChat from '@/icons/SnapChat.vue';
import Twitter from '@/icons/Twitter.vue';
import TikTok from '@/icons/TikTok.vue';
import Play from '@/icons/Play.vue';
import Pause from '@/icons/Pause.vue';
import Mark from '@/components/Mark.vue';
import PiggyBank from '@/icons/PiggyBank.vue';

import { ref, onMounted, nextTick } from 'vue';
import Trippy from '@/components/Trippy.vue';
import SoundCloud from '@/icons/SoundCloud.vue';
import Shirt from '../icons/Shirt.vue';
import Vinyl from '../icons/Vinyl.vue';
import Smilie from '../components/Smilie.vue';

const snapContainer = ref(null);
const snapSections = ['Intro', 'Listen', 'Zombie Boy'];

let snapEnabled = true;
let lastScrollTop = 0;

onMounted(() => {
    const container = snapContainer.value;
    
    container.addEventListener('scroll', () => {
        const scrollTop = container.scrollTop;
        const goingDown = scrollTop > lastScrollTop;
        lastScrollTop = scrollTop;
        
        const maxScroll = container.scrollHeight - container.clientHeight;
        
        // reached bottom of snap
        if (goingDown && scrollTop >= maxScroll - 1 && snapEnabled) {
            disableSnap();
        }
        
        // going up from normal area
        if (!goingDown && window.scrollY === 0 && !snapEnabled) {
            enableSnap(true);
        }
    });
});

function disableSnap() {
    snapEnabled = false;
    snapContainer.value.classList.remove('snap-enabled');
    document.body.style.overflow = 'auto';
}

function enableSnap(jumpTop = false) {
    snapEnabled = true;
    snapContainer.value.classList.add('snap-enabled');
    document.body.style.overflow = 'hidden';
    if (jumpTop) {
        snapContainer.value.scrollTo({ top: 0, behavior: 'instant' });
    }
}

const isLoading = ref(true);

onMounted(async () => {
    await nextTick(); // Ensure videos are rendered
    
    const videos = Array.from(document.querySelectorAll('video'));
    
    let loadedCount = 0;
    const total = videos.length;
    
    const checkDone = () => {
        loadedCount++;
        if (loadedCount === total) {
            isLoading.value = false;
        }
    };
    
    // Listen for each video's 'canplaythrough' event
    videos.forEach((video) => {
        if (video.readyState >= 3) {
            checkDone(); // Already ready
        } else {
            video.addEventListener('canplaythrough', checkDone, { once: true });
        }
    });
    
    // Fallback: hide after timeout just in case
    setTimeout(() => {
        if (isLoading.value) isLoading.value = false;
    }, 8000); // max wait 8s
});


</script>

<template>
    <div :class="{'opacity-0 pointer-events-none': !isLoading}" class="fixed top-0 left-0 w-full h-screen bg-black z-[100] flex flex-col items-center py-16 text-center">
        <h1 class="text-4xl font-thin mb-32 px-16"><span class="underline font-black">Ouu, I</span> <span class="text-2xl opacity-50">don't</span> <span class="font-black underline">Think You're Ready For This!</span></h1>
        <Smilie class="w-64 h-64 animate-spin" />
    </div>
    
    <div class="z-[101] fixed top-0 left-0 w-full h-screen flex items-start sm:items-center justify-end pointer-events-none sm:p-32 p-4">
        <img src="/assets/pictures/bullet-hole.png" alt="" class="w-64 h-64">
    </div>
    
    <div v-if="false" class="fixed z-50 bottom-0 left-0 w-full px-8 py-4 bg-white/60 backdrop-blur-3xl border-t border-white/20">
        <audio controls src="/songs/the-bees-knees.wav" class="w-full bg-transparent"></audio>
    </div>
    <main>
        <div ref="snapContainer" class="snap-container snap-enabled snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
            
            <section class="snap-section snap-start w-full h-screen flex items-center justify-center bg-main/40 text-white relative">
                <header class="absolute top-0 left-0 z-50 sm:flex items-center px-16 py-8 hidden gap-16">
                    <RouterLink to="/" class="hover:opacity-40 transition-opacity duration-300">
                        <Mark class="w-16 h-16 text-white animate-spin-slow" />
                    </RouterLink>
                    <template>
                        <RouterLink to="/" class="hover:opacity-40 transition-opacity duration-300">
                            <p class="text-xl border-b-2 border-white/0 hover:border-white/60 pb-2 transition-all duration-300 !border-white">Home</p>
                        </RouterLink>
                        <RouterLink to="/" class="hover:opacity-40 transition-opacity duration-300">
                            <p class="text-xl border-b-2 border-white/0 hover:border-white/60 pb-2 transition-all duration-300">Music</p>
                        </RouterLink>
                        <RouterLink to="/store" class="hover:opacity-40 transition-opacity duration-300">
                            <p class="text-xl border-b-2 border-white/0 hover:border-white/60 pb-2 transition-all duration-300">Merch</p>
                        </RouterLink>
                        <RouterLink to="/" class="hover:opacity-40 transition-opacity duration-300">
                            <p class="text-xl border-b-2 border-white/0 hover:border-white/60 pb-2 transition-all duration-300">About</p>
                        </RouterLink>
                    </template>
                    <template v-if="false">
                        <RouterLink to="/store" class="flex items-center gap-4 px-8 py-2 rounded-full bg-white/20 hover:bg-white/95 border border-white/20 text-white backdrop-blur-3xl hover:text-main drop-shadow-2xl hover:scale-110 hover:drop-shadow-black transition-all duration-300">
                            <Shirt class="w-12 h-12" />
                            <div>
                                <p class="font-bold">The Devil's Mark</p>
                                <p class="text-xs font-light">Merch Store</p>
                            </div>
                        </RouterLink>
                        <RouterLink to="/" class="flex items-center gap-4 px-8 py-2 rounded-full bg-white/20 hover:bg-white/95 border border-white/20 text-white backdrop-blur-3xl hover:text-main drop-shadow-2xl hover:scale-110 hover:drop-shadow-black transition-all duration-300">
                            <Vinyl class="w-12 h-12" />
                            <div>
                                <p class="font-bold">The Devil's Word</p>
                                <p class="text-xs font-light">Music Library</p>
                            </div>
                        </RouterLink>
                    </template>
                </header>
                <header class="fixed top-0 right-0 z-50 sm:flex items-center justify-between px-16 py-8 hidden">
                    <div class="text-center bg-black/40 text-white px-8 py-2 rounded-lg backdrop-blur-xl flex items-center gap-8">
                        <div>
                            <PiggyBank class="w-8 h-8" />
                        </div>
                        <div>
                            <p class="text-xs font-light">Interac e-Transfer Donation (Canada)</p>
                            <p class="underline text-lg">kingdemarkio@gmail.com</p>
                        </div>
                    </div>
                </header>
                
                <footer class="fixed bottom-0 left-0 z-50 w-full items-center sm:justify-start sm:px-16 py-8 flex justify-center">
                    <a href="https://soundcloud.com/kingdemarkio" class="flex group items-center gap-4 sm:gap-8 px-8 py-2 rounded-full bg-white/20 hover:bg-white/95 border border-white/20 text-white backdrop-blur-3xl hover:text-main drop-shadow-2xl hover:scale-110 hover:drop-shadow-black transition-all duration-300">
                        <SoundCloud class="w-8 h-8 sm:w-16 sm:h-16 drop-shadow" />
                        <div class="drop-shadow">
                            <p class="sm:block hidden text-xl font-bold">SoundCloud</p>
                            <p class="text-sm">@kingdemarkio</p>
                        </div>
                    </a>
                </footer>
                
                <aside class="absolute top-0 left-0 h-screen w-10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <p class="uppercase -rotate-90 text-nowrap text-xl font-light">The Apocalypse is Now. Stay Calm. Fear No Evil.</p>
                </aside>
                
                <aside class="absolute top-0 right-0 h-screen w-10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <p class="uppercase rotate-90 text-nowrap text-xl font-light">In a world full of chaos and confusion. I bring hope.</p>
                </aside>
                
                <div class="p-16 flex flex-col items-center gap-4 sm:gap-8 drop-shadow-2xl sm:scale-100 scale-90">
                    <div class="perspective w-64 h-64 group sm:mt-0 -mt-1.5">
                        <Logo class="w-full h-full text-main bg-white p-8 rounded-full transition-all duration-700 transform-style preserve-3d group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-black group-hover:rotate-y-180" />
                    </div>
                    <div class="flex flex-col items-center gap-4 text-center">
                        <h1 class="text-6xl font-black">King DeMarkio</h1>
                        <h2 class="text-3xl font-light">Homeless From Cornwall Ontario</h2>
                    </div>
                    <div>
                        <p class="text-2xl sm:text-4xl font-thin text-center">Hello, world! Have no fear, your God is here.</p>
                    </div>
                    <div>
                        <p class="uppercase text-center text-xs sm:text-base hidden sm:block">It's Always 4:20 Around Here. Blazing The Good Stuff Daily.<br>All they do is wine and complain. I don't like lame.</p>
                    </div>
                    </div>
                </section>
                <section class="snap-section snap-start w-full h-screen flex flex-col py-16 bg-black/40 backdrop-blur-3xl text-white section-fade-edges">
                    <h3 class="text-4xl sm:text-6xl font-bold px-16 sm:pb-8">Listen Carefully</h3>
                    <Swiper class="w-full h-full mb-16 sm:mb-0" :modules="[Navigation, Pagination, Keyboard]" navigation pagination keyboard>
                        
                        <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                            <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                                <a href="https://soundcloud.com/kingdemarkio" target="_blank" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                                    <img src="/covers/01-fake-fucks.png" alt='"Fake Fucks" Cover Art'>
                                    <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                        <SoundCloud class="w-24 h-24 drop-shadow drop-shadow-black" />
                                    </div>
                                </a>
                                <p class="text-2xl font-black pt-8">Fake Fucks</p>
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
                                <p class="text-2xl font-black pt-8 px-8 text-center">Doomsday Scenario From Cornwall Ontario</p>
                                <p class="text-xl font-light pt-2">DeMarkio</p>
                                <p class="text-xs pt-4 uppercase">Album &bull; 2025-08-27</p>
                            </div>
                        </SwiperSlide>
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
                <section class="snap-section snap-start w-full h-screen relative">
                    <div class="absolute top-0 left-0 w-full h-full -z-40 bg-black">
                        <video src="/assets/videos/223460.mp4" class="w-full h-full object-cover" autoplay muted loop></video>
                    </div>
                    <div class="absolute top-0 left-0 -z-30 w-full h-screen flex justify-between brightness-50 blur-xs">
                        <img src="/assets/style/left-side-money.png" alt="" class="h-full absolute left-0 top-0">
                        <img src="/assets/style/right-side-money.png" alt="" class="h-full absolute right-0 top-0">
                    </div>
                    <div class="w-full h-full relative drop-shadow-2xl drop-shadow-black">
                        <div class="absolute top-0 left-0 p-16 text-left">
                            <h1 class="text-4xl sm:text-6xl font-black">Zombie Boy</h1>
                            <h2 class="text-xl sm:text-3xl font-black">Chasing That Good Brain.</h2>
                            
                        </div>
                        <div class="absolute bottom-16 sm:bottom-0 right-0 p-16 text-right">
                            <h1 class="text-3xl sm:text-6xl font-black">Clinically Insane</h1>
                            <h2 class="text-xl sm:text-3xl font-black">With Absolutely No Game.</h2>
                        </div>
                    </div>
                </section>
                <section v-if="false" class="snap-start w-full h-screen relative">
                    <div class="absolute top-0 left-0 w-full h-full -z-40 bg-black">
                        <video src="/assets/videos/78116-565144690.mp4" class="w-full h-full object-cover" autoplay muted loop></video>
                    </div>
                    <div class="absolute top-0 left-0 -z-30 w-full h-screen flex justify-between brightness-50 blur-xs">
                        <img src="/assets/style/left-side-money.png" alt="" class="h-full absolute left-0 top-0">
                        <img src="/assets/style/right-side-money.png" alt="" class="h-full absolute right-0 top-0">
                    </div>
                    <div class="w-full h-full relative drop-shadow-2xl drop-shadow-black">
                        <div class="absolute top-0 left-0 p-16 text-left">
                            <h1 class="text-4xl sm:text-6xl font-black">Hell Boy</h1>
                            <h2 class="text-xl sm:text-3xl font-black">Still Has His Soul.</h2>
                            <p class="text-lg font-light">It's All For Her.</p>
                        </div>
                        <div class="absolute bottom-0 right-0 p-16 text-right">
                            <h1 class="text-3xl sm:text-6xl font-black">God Mode</h1>
                            <h2 class="text-xl sm:text-3xl font-black">Give My Freewill To God.</h2>
                            <p class="text-lg font-light">He Said Judge.</p>
                        </div>
                    </div>
                </section>
                
                <section v-if="false" class="snap-start w-full h-screen relative">
                    <div class="absolute top-0 left-0 w-full h-full -z-40 bg-black">
                        <video src="/assets/videos/117734-713278961.mp4" class="w-full h-full object-cover" autoplay muted loop></video>
                    </div>
                    <div class="absolute top-0 left-0 -z-30 w-full h-screen flex justify-between brightness-50 blur-xs">
                        <img src="/assets/style/left-side-money.png" alt="" class="h-full absolute left-0 top-0">
                        <img src="/assets/style/right-side-money.png" alt="" class="h-full absolute right-0 top-0">
                    </div>
                    <div class="absolute top-0 left-0 -z-20 w-full h-screen flex justify-between">
                        <img src="/assets/pictures/gun.png" alt="" class="absolute right-0 bottom-0 w-full max-w-3xl">
                    </div>
                    <div class="w-full h-full relative drop-shadow-2xl drop-shadow-black">
                        <div class="absolute top-0 left-0 p-16 text-left">
                            <h1 class="text-4xl sm:text-6xl font-black">Covid Was The Test</h1>
                            <h2 class="text-xl sm:text-3xl font-black">Hint. Hint. You Failed.</h2>
                            <p class="text-lg font-light">Brain Dead Zombies Are Lame.</p>
                        </div>
                        <div class="absolute bottom-0 right-0 p-16 text-right">
                            <h1 class="text-3xl sm:text-6xl font-black">You're Marked For Death</h1>
                            <h2 class="text-xl sm:text-3xl font-black">Those Vaxx Shots Are The Mark of The Beast.</h2>
                            <p class="text-lg font-light">How Could You Let Society Change Your DNA.</p>
                        </div>
                    </div>
                </section>
                <section v-if="false" class="snap-start w-full h-screen relative">
                    <div class="absolute top-0 left-0 -z-20 w-full h-screen flex justify-between">
                        <img src="/assets/pictures/grandma.jpg" alt="" class="top-0 left-0 w-full h-screen object-cover">
                    </div>
                    <div class="w-full h-full relative">
                        <div class="flex flex-col items-end text-6xl font-black absolute right-16 bottom-16">
                            <p class="bg-main px-8 py-2 rounded-lg !rounded-br-none !rounded-bl-none">Was</p>
                            <p class="bg-main px-8 py-2 rounded-lg !rounded-tr-none !rounded-br-none">Protecting</p>
                            <p class="bg-main px-8 py-2 rounded-lg !rounded-tr-none !rounded-br-none !rounded-tl-none">Grandma</p>
                            <p class="bg-main px-8 py-2 rounded-lg !rounded-tr-none !rounded-br-none !rounded-tl-none">Worth</p>
                            <p class="bg-main px-8 py-2 rounded-lg !rounded-tr-none !rounded-br-none !rounded-tl-none">Going</p>
                            <p class="bg-main px-8 py-2 rounded-lg !rounded-tr-none !rounded-br-none !rounded-bl-none !rounded-tl-none">To</p>
                            <p class="bg-main px-8 py-2 rounded-lg !rounded-tr-none">Hell?</p>
                        </div>
                    </div>
                </section>
                <section class="snap-start w-full h-screen flex flex-col items-center justify-center gap-16 p-16">
                    <h1 class="text-4xl text-center sm:text-6xl font-black">Dare To Do Drugs?</h1>
                    <video src="/assets/videos/fried.mp4" muted autoplay loop class="rounded-4xl shadow-2xl"></video>
                    <h2 class="text-2xl text-center sm:text-4xl font-black">Doesn't Getting Fried Look Like Fun?</h2>
                </section>
                <section v-if="false" class="snap-start w-full h-screen flex flex-col items-center justify-center gap-16 p-16 relative">
                    <div class="absolute -z-10 top-0 left-0 w-full h-screen">
                        <video src="/assets/videos/7529-201118756.mp4" class="w-full h-full object-cover" autoplay muted loop></video>
                    </div>
                    <h1 class="text-6xl font-medium uppercase">Don't Take Music Seriously?</h1>
                    <h2 class="text-3xl font-light uppercase text-center">Why Would Anyone Take You Seriously?</h2>
                </section>
                <section v-if="false" class="snap-start w-full h-screen flex flex-col items-center justify-center p-16 relative">
                    <div class="absolute -z-10 top-0 left-0 w-full h-screen">
                        <img src="/assets/pictures/black-sheep.jpg" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col items-center -mt-64">
                        <h1 class="text-6xl font-medium bg-black px-8 py-2 rounded-lg">Don't Want To Stand Out?</h1>
                        <h2 class="text-3xl font-light uppercase bg-black px-8 py-4 rounded-b-lg">I Find It Hard Not To.</h2>
                    </div>
                </section>
            </div>
            
            <section class="w-full min-h-screen flex flex-col py-16 drop-shadow-2xl bg-main/40">
                <h3 class="text-center sm:text-left text-6xl font-bold px-16 pb-8">Follow Me</h3>
                <h4 class="text-2xl sm:text-4xl font-bold pb-8 text-center">Pretty Inappropriate <span class="font-light">Not To See</span></h4>
                <div class="flex gap-16 flex-col lg:flex-row items-center justify-center text-main px-16">
                    <a href="https://instagram.com/kingdemarkio/" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                        <Instagram class="w-16 h-16" />
                        <div class="text-center">
                            <p class="text-3xl font-bold">Instagram</p>
                            <p>@kingdemarkio</p>
                        </div>
                    </a>
                    <a href="https://tiktok.com/@kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                        <TikTok class="w-16 h-16" />
                        <div class="text-center">
                            <p class="text-2xl font-bold">TikTok</p>
                            <p>@kingdemarkio</p>
                        </div>
                    </a>
                    <a href="https://x.com/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                        <Twitter class="w-16 h-16" />
                        <div class="text-center">
                            <p class="text-2xl font-bold">Twitter</p>
                            <p>@kingdemarkio</p>
                        </div>
                    </a>
                </div>
                <template v-if="false">
                <h4 class="text-2xl font-bold py-8 text-center">Adults Only <span class="font-light">Truly Get To Know Me</span></h4>
                <div class="flex flex-col sm:flex-row gap-16 items-center justify-center text-main px-16">
                    <a href="https://www.snapchat.com/add/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                        <SnapChat class="w-16 h-16" />
                        <div class="text-center">
                            <p class="text-2xl font-bold">SnapChat <span class="font-light">(Invite Only)</span></p>
                            <p>@kingdemarkio</p>
                        </div>
                    </a>
                    <a href="https://onlyfans.com/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                        <OnlyFans class="w-16 h-16" />
                        <div class="text-center">
                            <p class="text-2xl font-bold">OnlyFans <span class="font-light">(Girls Only)</span></p>
                            <p>@kingdemarkio</p>
                        </div>
                    </a>
                </div>
                </template>
            </section>
            <section class="w-full h-screen flex flex-col py-16 drop-shadow-2xl bg-main/40 px-8">
                <h3 class="text-4xl text-center sm:text-6xl font-bold px-16 sm:mt-0 -mt-8">The Mission</h3>
                <h4 class="text-2xl sm:text-8xl font-light text-center py-16">Rapper - Influencer - Developer</h4>
                <h5 class="text-center uppercase">And Everything Else. Just Your Average Joe Super Star. Young Boss.</h5>
                <div class="pt-16">
                    <p class="text-center uppercase text-2xl">The Mission is Simple... Total Global Take Over.<br> Make it look easy because my life isn't simple.</p>
                </div>
                <h4 v-if="false" class="text-3xl font-medium">The Mission is Simple.<br>Take Over the World While Making it Look Easy.<br>I'm the Devil!<br>This Entire World Worships Me Already.<br>Because I'm Proud to be a 22 Year Old Virgin in the City with the Most Easy Pussy in All of History.<br>100% Not Gay, Just don't like my Girls Filthy.<br>I can wait till I get Married.</h4>
                <div class="h-full flex items-center justify-center">
                    <h5 class="text-center text-4xl sm:text-6xl font-light"><b class="font-bold">Celebrity Status:</b> Highest</h5>
                </div>
            </section>
            <footer class="p-16 drop-shadow-2xl sm:pb-16 pb-64">
                <p class="text-center">&copy; Copyright {{ new Date().getFullYear() }}, Jonas Markus Gudelis from Cornwall Ontario Canada.</p>
            </footer>
            <section v-if="false">
                <h4 class="text-3xl font-blmediumack">Follow Me</h4>
                <div class="flex items-center gap-16 justify-center w-full overflow-scroll">
                    <div class="p-8 bg-white text-main rounded-xl">
                        <p class="text-3xl font-bold">Instagram</p>
                    </div>
                    <div class="p-8 bg-white text-main rounded-xl">
                        <p class="text-3xl font-bold">TikTok</p>
                    </div>
                    <div class="p-8 bg-white text-main rounded-xl">
                        <p class="text-3xl font-bold">Twitter</p>
                    </div>
                </div>
                <h4 class="text-3xl font-medium">Fan Club</h4>
                <div class="flex items-center gap-16 justify-center">
                    <div class="p-8 bg-white text-main rounded-xl">
                        <p class="text-3xl font-bold">SnapChat</p>
                    </div>
                    <div class="p-8 bg-white text-main rounded-xl">
                        <p class="text-3xl font-bold">OnlyFans</p>
                    </div>
                </div>
            </section>
            
        </main>
    </template>
    
    <style>
    
    /* Enable 3D perspective */
    .perspective {
        perspective: 1000px;
    }
    
    /* Keep child transform in 3D */
    .transform-style {
        transform-style: preserve-3d;
    }
    
    /* Rotation class for hover */
    .rotate-y-180 {
        transform: rotateY(180deg);
    }
    
    
    .snap-container.snap-enabled {
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        height: 100vh;
    }
    .snap-container.snap-enabled > .snap-section {
        scroll-snap-align: start;
    }
    
</style>
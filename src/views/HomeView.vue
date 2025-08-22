<script setup>

import { ref, onMounted, nextTick } from 'vue';
import SoundCloud from '@/icons/SoundCloud.vue';
import Smilie from '@/components/Smilie.vue';
import { useIntersectionObserver } from '@vueuse/core';
import HeroSection from '@/sections/HeroSection.vue';
import HomeSection from '@/sections/HomeSection.vue';
import LinksSection from '@/sections/LinksSection.vue';
import AboutSection from '@/sections/AboutSection.vue';
import InteracLogo from '@/components/InteracLogo.vue';
import InteracEmblem from '@/components/InteracEmblem.vue';
import InteracEmblemTwo from '@/components/InteracEmblemTwo.vue';


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


const introDone = ref(false);

const showHero = ref(true)

const aboutSectionRef = ref(null)

useIntersectionObserver(
aboutSectionRef,
([entry]) => {
    if (entry.isIntersecting) {
        introDone.value = true;
        showHero.value = false;
        console.log('hit it');
    }
},
{
    threshold: 0,
}
)

const showAdultLinks = ref(true);

</script>

<template>
    <div :class="{'opacity-0 pointer-events-none': !isLoading}" class="fixed top-0 left-0 w-full h-screen bg-black z-[100] flex flex-col items-center py-16 text-center">
        <h1 class="text-4xl font-thin mb-32 px-16"><span class="underline font-black">Ouu, I</span> <span class="text-2xl opacity-50">don't</span> <span class="font-black underline">Think You're Ready For This!</span></h1>
        <Smilie class="w-64 h-64 animate-spin" />
    </div>
    
    <div class="z-[99] fixed top-0 left-0 w-full h-screen flex items-start sm:items-center justify-end pointer-events-none sm:p-32 p-4">
        <img src="/assets/pictures/bullet-hole.png" alt="" class="w-48 h-48 sm:w-64 sm:h-64">
    </div>
    
    <header v-if="false" class="fixed top-0 right-0 z-50 sm:flex items-center justify-between px-16 py-4 hidden">
        <div class="flex items-center bg-black/40 rounded-lg backdrop-blur-xl pl-0.5">
            <InteracLogo class="w-14 h-14" />
            <div class="text-center text-white px-8 py-2">
                <p class="text-xs font-light uppercase">Email Messages and e-Transfer Donations</p>
                <p class="text-lg lowercase"><a href="mailto: kingdemarkio@gmail.com" class="hover:opacity-60 transition-opacity duration-300">kingdemarkio@gmail.com</a></p>
            </div>
        </div>
    </header>
    
    <Transition
        enter-active-class="transform transition ease-out duration-300 delay-300"
        enter-from-class="translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transform transition ease-in duration-200"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="translate-x-full opacity-0"
    >
    <header v-if="!isLoading" class="fixed top-0 right-0 z-50 sm:flex items-center justify-between px-16 py-4 hidden">
        <div class="flex items-center bg-[#fdb913] text-[#231f20] rounded-lg px-4 py-1 gap-8 shadow-2xl shadow-black/60">
            <InteracEmblemTwo class="w-14 h-14" />
            <div class="text-center">
                <p class="text-xs font-light uppercase">Email Messages and e-Transfer Donations</p>
                <p class="text-lg lowercase"><a href="mailto: kingdemarkio@gmail.com" class="hover:opacity-40 transition-opacity duration-300">kingdemarkio@gmail.com</a></p>
            </div>
        </div>
    </header>
</Transition>

<footer class="fixed bottom-0 left-0 z-50 w-full items-center sm:justify-start sm:px-16 py-8 flex justify-center">
    <a href="https://soundcloud.com/kingdemarkio" class="flex group items-center gap-4 sm:gap-8 px-8 py-2 rounded-full bg-white/20 hover:bg-white/95 border border-white/20 text-white backdrop-blur-3xl hover:text-main drop-shadow-2xl hover:scale-110 hover:drop-shadow-black transition-all duration-300">
        <SoundCloud class="w-8 h-8 sm:w-16 sm:h-16 drop-shadow" />
        <div class="drop-shadow">
            <p class="sm:block hidden text-xl font-bold">SoundCloud</p>
            <p class="text-sm">@kingdemarkio</p>
        </div>
    </a>
</footer>

<main>
    <HeroSection v-if="!introDone" />
    <HomeSection v-else />
    
    <LinksSection />
    
    <AboutSection ref="aboutSectionRef" />
    
    <section v-if="false" class="block sm:hidden">
        <div class="flex items-center gap-8 bg-black/40 border-y border-black backdrop-blur-xl px-4 py-2">
            <InteracLogo class="w-14 h-14" />
            <div class="text-center text-white py-2">
                <p class="text-xs font-light uppercase">Email Messages and e-Transfer Donations</p>
                <p class="text-lg lowercase"><a href="mailto: kingdemarkio@gmail.com" class="hover:opacity-60 transition-opacity duration-300">kingdemarkio@gmail.com</a></p>
            </div>
        </div>
    </section>
    
    <section class="block sm:hidden">
        <div class="flex items-center bg-[#fdb913] text-[#231f20] px-4 py-1 gap-8 shadow-2xl shadow-black/60">
            <InteracEmblemTwo class="w-14 h-14" />
            <div class="text-center">
                <p class="text-xs font-light uppercase">Email Messages and e-Transfer Donations</p>
                <p class="text-lg lowercase"><a href="mailto: kingdemarkio@gmail.com" class="hover:opacity-40 transition-opacity duration-300">kingdemarkio@gmail.com</a></p>
            </div>
        </div>
    </section>

    <footer class="p-16 drop-shadow-2xl sm:pb-16 pb-48">
        <p class="text-center">&copy; Copyright {{ new Date().getFullYear() }}, Jonas Markus Gudelis from Cornwall Ontario Canada.</p>
    </footer>        
</main>
</template>
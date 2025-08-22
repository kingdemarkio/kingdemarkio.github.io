<script setup>
import Logo from '@/components/Logo.vue';
import Mark from '@/components/Mark.vue';
import PiggyBank from '@/icons/PiggyBank.vue';
import SoundCloud from '@/icons/SoundCloud.vue';
</script>

<template>
    <section class="w-full h-screen flex items-center justify-center bg-main/40 text-white relative">
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
                <h2 class="text-3xl font-light">Homeless From Cornwall&nbsp;Ontario</h2>
            </div>
            <div>
                <p class="text-2xl sm:text-4xl font-thin text-center">Hello, world! Have no fear, your God is here.</p>
            </div>
            <div>
                <p class="uppercase text-center text-xs sm:text-base hidden sm:block">It's Always 4:20 Around Here. Blazing The Good Stuff Daily.<br>All they do is wine and complain. I don't like lame.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
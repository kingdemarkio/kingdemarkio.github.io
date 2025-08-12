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
import YingYang from './components/YingYang.vue';
import HeartRate from './icons/HeartRate.vue';
import PiggyBank from './icons/PiggyBank.vue';
import Download from './icons/Download.vue';

</script>

<template>
    <div class="fixed top-0 left-0 w-full h-screen -z-50">
        <video src="/assets/videos/219971.mp4" class="w-full h-screen object-cover object-center" autoplay muted loop></video>
    </div>    
    <main>
        <div class="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
            
            <section class="snap-start w-full h-screen flex items-center justify-center bg-main/40 text-white relative">
                <header class="absolute top-0 left-0 w-full z-50 sm:flex items-center justify-between px-16 py-8 hidden">
                    <Mark class="w-16 h-16 text-white animate-spin-slow" />
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

                <aside class="absolute top-0 left-0 h-screen w-10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <p class="uppercase -rotate-90 text-nowrap text-xl font-light">The Apocalypse is Now. Stay Calm. Fear No Evil.</p>
                </aside>

                <aside class="absolute top-0 right-0 h-screen w-10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <p class="uppercase rotate-90 text-nowrap text-xl font-light">In a world full of chaos and confusion. I bring hope.</p>
                </aside>
                
                <div class="p-16 flex flex-col items-center gap-8 drop-shadow-2xl">
                    <div class="perspective w-64 h-64 group">
                        <Logo class="w-full h-full text-main bg-white p-8 rounded-full transition-all duration-700 transform-style preserve-3d group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-black group-hover:rotate-y-180" />
                    </div>
                    <div class="flex flex-col items-center gap-4 text-center">
                        <h1 class="text-6xl font-black">King DeMarkio</h1>
                        <h2 class="text-3xl font-light">From Cornwall Ontario</h2>
                    </div>
                    <div>
                        <p class="text-2xl sm:text-4xl font-thin text-center">Hello, world! Have no fear, your God is here.</p>
                    </div>
                    <div>
                        <p class="uppercase text-center text-sm sm:text-base">It's Always 4:20 Around Here. Blazing The Good Stuff Daily.<br>All they do is wine and complain. I don't like lame.</p>
                    </div>
                </div>
            </section>
            <section class="snap-start w-full h-screen flex flex-col py-16 bg-black/40 backdrop-blur-3xl text-white section-fade-edges">
                <h3 class="text-6xl font-bold px-16 pb-8">Listen Carefully</h3>
                <Swiper class="w-full h-full" :modules="[Navigation, Pagination, Keyboard]" navigation pagination keyboard>
                    <SwiperSlide class="w-full h-full cursor-grab active:cursor-grabbing">
                        <div class="w-full h-full flex flex-col items-center justify-center drop-shadow-2xl">
                            <a href="/downloads/wav/the-clown-got-he-crown/the-bees-knees.wav" download="demarkio-the-bees-knees-2022-08-27.wav" class="w-64 h-64 rounded-lg overflow-hidden relative group">
                                <img src="/assets/covers/_5f604c0c-69bb-4759-b4c8-281fb7ccf5c5.jpeg" alt="Album Cover">
                                <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer top-0 left-0 w-full h-full bg-black/60 text-white flex items-center justify-center">
                                    <Download class="w-24 h-24" />
                                </div>
                            </a>
                            <p class="text-2xl font-black pt-8">The Bees Knees</p>
                            <p class="text-xl font-light pt-2">DeMarkio</p>
                            <p class="text-xs pt-4 uppercase">The Clown Got He Crown</p>
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
            <section class="snap-start w-full h-screen relative">
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
                    <div class="absolute bottom-0 right-0 p-16 text-right">
                        <h1 class="text-3xl sm:text-6xl font-black">Clinically Insane</h1>
                        <h2 class="text-xl sm:text-3xl font-black">With Absolutely No Game.</h2>
                    </div>
                </div>
            </section>
            <section class="snap-start w-full h-screen flex flex-col items-center justify-center gap-16 p-16">
                <h1 class="text-4xl text-center sm:text-6xl font-black">Dare To Do Drugs?</h1>
                <video src="/assets/videos/fried.mp4" muted autoplay loop class="rounded-4xl shadow-2xl"></video>
                <h2 class="text-2xl text-center sm:text-4xl font-black">Doesn't Getting Fried Look Like Fun?</h2>
            </section>
        </div>
        
        <section class="w-full min-h-screen flex flex-col py-16 drop-shadow-2xl bg-main/40">
            <h3 class="text-6xl font-bold px-16 pb-8">Follow Me</h3>
            <h4 class="text-4xl font-bold pb-8 text-center">Pretty Inappropriate <span class="font-light">To See</span></h4>
            <div class="flex gap-16 items-center justify-center text-main px-16">
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
            <h4 class="text-4xl font-bold py-8 text-center">Adults Only <span class="font-light">Get To Know Me</span></h4>
            <div class="flex gap-16 items-center justify-center text-main px-16">
                <a href="https://www.snapchat.com/add/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                    <SnapChat class="w-16 h-16" />
                    <div class="text-center">
                        <p class="text-2xl font-bold">SnapChat</p>
                        <p>@kingdemarkio</p>
                    </div>
                </a>
                <a href="https://onlyfans.com/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                    <OnlyFans class="w-16 h-16" />
                    <div class="text-center">
                        <p class="text-2xl font-bold">OnlyFans</p>
                        <p>@kingdemarkio</p>
                    </div>
                </a>
            </div>
        </section>
        <section class="w-full h-screen flex flex-col py-16 drop-shadow-2xl bg-main/40 px-8">
            <h3 class="text-4xl text-center sm:text-6xl font-bold px-16">The Mission</h3>
            <h4 class="text-2xl sm:text-8xl font-light text-center py-16">Rapper - Influencer - Developer</h4>
            <h5 class="text-center uppercase">And Everything Else. Just Your Average Joe Super Star. Young Boss.</h5>
            <div class="pt-16">
                <p class="text-center uppercase text-2xl">The Mission is Simple... Total Global Take Over.<br> Make it look easy because my life isn't simple.</p>
            </div>
            <h4 v-if="false" class="text-3xl font-medium">The Mission is Simple.<br>Take Over the World While Making it Look Easy.<br>I'm the Devil!<br>This Entire World Worships Me Already.<br>Because I'm Proud to be a 22 Year Old Virgin in the City with the Most Easy Pussy in All of History.<br>100% Not Gay, Just don't like my Girls Filthy.<br>I can wait till I get Married.</h4>
        </section>
        <footer class="p-16 drop-shadow-2xl">
            <p class="text-center">&copy; Copyright {{ new Date().getFullYear() }}, Jonas Markus Gudelis from Cornwall Ontario Canada.</p>
        </footer>
        <section v-if="false">
            <h4 class="text-3xl font-blmediumack">Follow Me</h4>
            <div class="flex items-center gap-16 justify-center">
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
        
        <div v-if="false">
            
            <h3>They call me the Devil but she calls me Jesus.</h3>
            <h4>Just your average Rapper + Influencer + Software Developer + CEO</h4>
            <h5>Born for Horns. They didn't think God would "Choose Cornwall" a city full of losers except for me, the only leader.</h5>
        </div>
        
    </main>
    <footer v-if="false">
        <p>Developed with Pride in Cornwall Ontario</p>
    </footer>
</template>

<style>
/* Make navigation arrows white */
.swiper-button-next,
.swiper-button-prev {
    color: white;
}

/* Make pagination bullets white */
.swiper-pagination-bullet {
    background-color: white;
}

/* Optional: Make the active bullet slightly larger or different */
.swiper-pagination-bullet-active {
    background-color: white;
    opacity: 1;
}


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


</style>
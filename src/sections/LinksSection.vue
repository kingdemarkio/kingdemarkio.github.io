<script setup>

import InstagramIcon from '@/icons/InstagramIcon.vue';
import OnlyFansIcon from '@/icons/OnlyFansIcon.vue';
import SnapChatIcon from '@/icons/SnapChatIcon.vue';
import TwitterIcon from '@/icons/TwitterIcon.vue';
import TikTokIcon from '@/icons/TikTokIcon.vue';
import YouTubeIcon from '@/icons/YouTubeIcon.vue';

import { ref } from 'vue';

const showAdultLinks = ref(true);

</script>

<template>
    <section class="w-full min-h-screen flex flex-col py-16 drop-shadow-2xl bg-main/40">
            <h3 class="text-center sm:text-left text-6xl font-bold px-16 pb-8">Follow Me</h3>
            <h4 class="text-2xl sm:text-4xl font-bold pb-8 text-center">Pretty Inappropriate <span class="font-light">Not To See</span></h4>
            <div class="flex gap-16 flex-col lg:flex-row items-center justify-center text-main px-16">
                <a href="https://instagram.com/kingdemarkio/" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                    <InstagramIcon class="w-16 h-16" />
                    <div class="text-center">
                        <p class="text-3xl font-bold">Instagram</p>
                        <p>@kingdemarkio</p>
                    </div>
                </a>
                <a href="https://tiktok.com/@kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                    <TikTokIcon class="w-16 h-16" />
                    <div class="text-center">
                        <p class="text-2xl font-bold">TikTok</p>
                        <p>@kingdemarkio</p>
                    </div>
                </a>
                <a href="https://x.com/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                    <TwitterIcon class="w-16 h-16" />
                    <div class="text-center">
                        <p class="text-2xl font-bold">Twitter</p>
                        <p>@kingdemarkio</p>
                    </div>
                </a>
                <a href="https://www.youtube.com/@kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                    <YouTubeIcon class="w-16 h-16" />
                    <div class="text-center">
                        <p class="text-2xl font-bold">YouTube</p>
                        <p>@kingdemarkio</p>
                    </div>
                </a>
            </div>
            <template v-if="showAdultLinks">
                <h4 class="text-2xl font-bold py-8 text-center">Adults Only (18+) <span class="font-light">Truly Get To Know Me</span></h4>
                <div class="flex flex-col sm:flex-row gap-16 items-center justify-center text-main px-16">
                    <a href="https://www.snapchat.com/add/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                        <SnapChatIcon class="w-16 h-16" />
                        <div class="text-center">
                            <p class="text-2xl font-bold">SnapChat <span class="font-light"><br class="lg:hidden" />(Invite Only)</span></p>
                            <p>@kingdemarkio</p>
                        </div>
                    </a>
                    <a href="https://onlyfans.com/kingdemarkio" target="_blank" class="p-8 flex flex-col items-center gap-4 bg-white rounded-xl w-full hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all duration-300">
                        <OnlyFansIcon class="w-16 h-16" />
                        <div class="text-center">
                            <p class="text-2xl font-bold">OnlyFans <span class="font-light"><br class="lg:hidden" />(Girls Only)</span></p>
                            <p>@kingdemarkio</p>
                        </div>
                    </a>
                </div>
            </template>
        </section>
</template>
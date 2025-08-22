<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'

import MusicSlide from '@/slides/MusicSlide.vue'
import ZombieBoyOneSlide from '@/slides/ZombieBoyOneSlide.vue'
import DareFriedSlide from '@/slides/DareFriedSlide.vue'
import HomeSection from '@/sections/HomeSection.vue'
import MySoulIsHersSlide from '@/slides/MySoulIsHersSlide.vue'
import OhYouCantRapSlide from '@/slides/OhYouCantRapSlide.vue'
import SelectRandomChild from '@/components/SelectRandomChild.vue'
import GotTheMarkSlide from '../slides/GotTheMarkSlide.vue'

const swiperRef = ref(null)
let releaseTimeout = null
let disableAfterExit = false;

// Phase 1: wait 1s when last slide is fully in view
const handleSlideChange = (swiper) => {
    if (swiper.isEnd) {
        // last slide is active
        clearTimeout(releaseTimeout)
        releaseTimeout = setTimeout(() => {
            swiper.allowTouchMove = false
            swiper.params.mousewheel.releaseOnEdges = true
        }, 600) // wait 0.6s
    } else {
        // reset if not on last slide
        clearTimeout(releaseTimeout)
        swiper.allowTouchMove = true
        swiper.params.mousewheel.releaseOnEdges = false
    }
}

// Phase 2: once last slide is scrolled out of view, disable all but first slide
const handleWindowScroll = () => {
    if (disableAfterExit) return
    const swiperEl = swiperRef.value?.$el
    if (!swiperEl) return
    
    const rect = swiperEl.getBoundingClientRect()
    
    // if swiper is fully above viewport
    if (rect.bottom <= 0) {
        const swiper = swiperRef.value.swiper
        //swiper.allowTouchMove = false
        swiper.params.mousewheel.releaseOnEdges = true
        
        // disable all but first slide
        swiper.slides.forEach((slide, i) => {
            if (i !== 0) slide.style.display = 'none'
        })
        disableAfterExit = true
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleWindowScroll, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleWindowScroll)
    clearTimeout(releaseTimeout)
})
</script>

<template>
    <div class="h-screen w-full">
        <Swiper
        ref="swiperRef"
        direction="vertical"
        :mousewheel="{ forceToAxis: true, releaseOnEdges: true, sensitivity: 0.1 }"
        :modules="[Mousewheel]"
        class="h-full w-full"
        @slideChange="handleSlideChange"
        >
        <SwiperSlide>
            <HomeSection />
        </SwiperSlide>
        <SwiperSlide>
            <MusicSlide />
        </SwiperSlide>
        <SwiperSlide>
            <SelectRandomChild>
                <ZombieBoyOneSlide />
                <MySoulIsHersSlide />
            </SelectRandomChild>
        </SwiperSlide>
        <SwiperSlide>
            <SelectRandomChild>
                <DareFriedSlide />
                <OhYouCantRapSlide />
                <GotTheMarkSlide />
            </SelectRandomChild>
        </SwiperSlide>
    </Swiper>
</div>
</template>

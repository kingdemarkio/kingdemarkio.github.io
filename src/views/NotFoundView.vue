<script setup>

</script>

<template>
    <section class="w-full h-screen bg-black relative flex flex-col items-center justify-center gap-8">
        <video src="/assets/videos/223468.mp4" class="absolute top-0 left-0 z-10 w-full h-full object-contain" muted autoplay loop></video>
        <div class="relative z-20">
            <h1 class="text-6xl font-black bg-black/40 text-white px-8 py-4 backdrop-blur-3xl border border-white/20 rounded-t-2xl">Page Not Found</h1>
            <RouterLink to="/" class="block px-8 py-2 bg-white/40 backdrop-blur-xl text-white uppercase text-center rounded-b-2xl hover:bg-white hover:text-black transition-colors duration-300 font-medium">Click Here To Go Back To The Starting Page</RouterLink>
        </div>
    </section>
</template>

<style scoped>

</style>
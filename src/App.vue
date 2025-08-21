<script setup>

</script>

<template>
    <div class="fixed top-0 left-0 w-full h-screen -z-50">
        <video src="/assets/videos/219971.mp4" class="w-full h-screen object-cover object-center" autoplay muted loop></video>
    </div>
    <div class="fixed top-0 left-0 w-full h-screen z-40 opacity-10 pointer-events-none">
        <video src="/assets/videos/film.mp4" class="w-full h-screen object-cover object-center" autoplay muted loop></video>
    </div>
    <main>
        <RouterView />
    </main>
</template>

<style scoped>

</style>
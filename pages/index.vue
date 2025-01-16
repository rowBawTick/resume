<script setup lang="ts">

import About from "~/pages/About.vue";
import Experience from "~/pages/Experience.vue";
import Education from "~/pages/Education.vue";
import Projects from "~/pages/Projects.vue";
import {onMounted, onUnmounted} from "vue";

const moveSpotlight = (e: MouseEvent) => {
    const spot = document.getElementById('spotlight');
    if (!spot) return;
    spot.style.background = `radial-gradient(
      circle 600px at ${e.clientX}px ${e.clientY}px,
      rgba(29, 78, 216, 0.20) 0%,
      rgba(29, 78, 216, 0.10) 40%,
      rgba(29, 78, 216, 0.05) 60%,
      rgba(29, 78, 216, 0) 100%
    )`;

};

onMounted(() => {
    window.addEventListener('mousemove', moveSpotlight);
    onUnmounted(() => {
        window.removeEventListener('mousemove', moveSpotlight);
    });
});

</script>

<template>
    <div class="lg:flex min-h-screen bg-slate-900 text-slate-400">
        <div id="spotlight"></div>
        <!-- Header (Left side on full screen) -->
        <div class="lg:w-1/2 lg:fixed px-6 py-12 overflow-y-auto">
            <Header />
        </div>

        <!-- Main Content -->
        <main class="flex-1 px-6 py-12 lg:w-1/2 lg:ml-[50%] lg:px-16 lg:py-24 overflow-y-auto">
            <!-- About Section -->
            <About/>

            <!-- Experience Section -->
            <Experience/>

            <!-- Education Section -->
            <Education />
        </main>
    </div>
</template>

<style scoped>
#spotlight {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    transition: background 0.3s ease; /* for smoothness */
}
</style>


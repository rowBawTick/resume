<script setup lang="ts">

import About from "~/pages/About.vue";
import Experience from "~/pages/Experience.vue";
import Education from "~/pages/Education.vue";
import Projects from "~/pages/Projects.vue";
import {onMounted, onUnmounted} from "vue";

const updateCursor = (e: MouseEvent) => {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
}

onMounted(() => {
    document.addEventListener('mousemove', updateCursor);

    onUnmounted(() => {
        document.removeEventListener('mousemove', updateCursor);
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

<style>
#spotlight {
    position: fixed;
    width: 1600px;
    height: 1600px;
    border-radius: 50%;
    background: radial-gradient(
        circle at center,
        rgba(46, 117, 163, 0.08) 5%,
        rgba(35, 72, 97, 0.07) 15%,
        rgba(29, 62, 94, 0.06) 25%,
        rgba(18, 52, 78, 0.05) 35%,
        rgba(11, 40, 68, 0.04) 45%,
        rgba(5, 33, 50, 0.03) 55%,
        transparent 80%
    );
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    mix-blend-mode: screen;
}

/* Add a subtle background glow */
.bg-slate-700 {
    position: relative;
    background: radial-gradient(
        circle at 50% 50%,
        rgba(2, 12, 27, 0.98),
        rgba(2, 12, 27, 1)
    );
}
</style>


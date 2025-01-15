<script setup lang="ts">

import About from "~/pages/About.vue";
import Experience from "~/pages/Experience.vue";
import Education from "~/pages/Education.vue";
import Projects from "~/pages/Projects.vue";
</script>

<template>
    <div class="lg:flex min-h-screen bg-slate-900 text-slate-400">
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



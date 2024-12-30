<script setup lang="ts">

import About from "~/pages/About.vue";
import Experience from "~/pages/Experience.vue";
import Education from "~/pages/Education.vue";
import Projects from "~/pages/Projects.vue";
</script>

<template>
    <div class="lg:flex min-h-screen bg-slate-900 text-slate-400">
        <!-- Header (Left side on full screen) -->
        <div class="px-6 py-12">
            <Header />
        </div>

        <!-- Main Content -->
        <main class="flex-1 px-6 py-12 lg:px-16 lg:py-24">
            <!-- About Section -->
            <About/>

            <!-- Experience Section -->
            <Experience/>

            <!-- Education Section -->
            <Education />
        </main>
    </div>
</template>



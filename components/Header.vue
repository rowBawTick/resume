<script setup>
import NavLink from './NavLink.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
    <header class="flex flex-col justify-between">
        <div>
            <h1 class="text-slate-200 text-5xl font-bold">Chris Chambers</h1>
            <h2 class="text-slate-200 mt-2 text-xl font-medium">Software Engineer</h2>
            <p class="mt-4">
                I love to help businesses grow by building efficient, scalable, and user-friendly applications that
                align with the needs of customers.
            </p>
            <!-- Hide navigation on mobile -->
            <nav class="hidden lg:flex mt-12">
                <ul class="space-y-4">
                    <NavLink href="#about" text="About" />
                    <NavLink href="#experience" text="Experience" />
                    <NavLink href="#projects" text="Projects" />
                </ul>
            </nav>
            <div class="mt-8 flex space-x-6">
                <a href="https://github.com/rowBawTick" target="_blank" rel="noopener noreferrer" class="hover:text-teal-300">
                    <font-awesome-icon :icon="['fab', 'github']" class="text-3xl lg:text-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/christopher-chambers-2403b912b" target="_blank" rel="noopener noreferrer" class="hover:text-teal-300">
                    <font-awesome-icon icon="fa-brands fa-linkedin" class="text-3xl lg:text-2xl" />
                </a>
                <a href="mailto:chris@iterative-edge.co.uk" class="hover:text-teal-300">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="text-3xl lg:text-2xl" />
                </a>
                <a href="https://www.google.co.uk/maps/place/Edinburgh/@55.9411885,-3.2753784" target="_blank" class="hover:text-teal-300">
                    <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="text-3xl lg:text-2xl" />
                </a>
            </div>
        </div>
    </header>
</template>


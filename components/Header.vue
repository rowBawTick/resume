<script setup>
import NavLink from './NavLink.vue';
import IconLink from './IconLink.vue';

const socialLinks = [
    { href: 'https://github.com/rowBawTick', icon: ['fab', 'github'] },
    { href: 'https://www.linkedin.com/in/christopher-chambers-2403b912b', icon: ['fab', 'linkedin'] },
    { href: 'mailto:christopher.chambers@live.co.uk', icon: ['fa-solid', 'envelope'] },
    {
        href: 'https://www.google.co.uk/maps/place/Edinburgh/@55.9411885,-3.2753784',
        icon: ['fa-solid', 'map-marker-alt']
    },
];
</script>

<template>
    <header class="flex flex-col justify-between h-full">
        <div class="lg:mx-auto lg:w-[60%] lg:flex lg:flex-col lg:justify-center lg:h-full">
            <h1 class="text-slate-200 text-5xl font-bold">Chris Chambers</h1>
            <h2 class="text-slate-200 mt-2 text-xl font-medium">Software Engineer</h2>
            <p class="mt-4">
                I love to help businesses grow by building efficient, scalable, and user-friendly applications that
                align with the needs of customers.
            </p>
            <!-- Hide navigation on mobile -->
            <nav class="hidden lg:block mt-12">
                <ul class="space-y-4">
                    <NavLink href="#about" text="About" />
                    <NavLink href="#experience" text="Experience" />
                    <NavLink href="#education" text="Education" />
                </ul>
            </nav>
            <div class="mt-8 flex space-x-6">
                <IconLink v-for="link in socialLinks"
                         :key="link.href"
                         v-bind="link"
                         :external="!link.href.startsWith('mailto:')" />
            </div>
        </div>
    </header>
</template>

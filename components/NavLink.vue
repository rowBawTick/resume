<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    href: String,
    text: String,
});

const isActive = ref(false);

onMounted(() => {
    // Get the target section element (remove the # from href)
    const targetId = props.href?.replace('#', '');
    const targetSection = document.getElementById(targetId || '');
    
    if (targetSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isActive.value = entry.isIntersecting;
                });
            },
            {
                rootMargin: '-20% 0px -30% 0px' // Adjust these values to control when the section is considered active
            }
        );

        observer.observe(targetSection);

        onUnmounted(() => {
            observer.disconnect();
        });
    }
});
</script>

<template>
    <li class="group">
        <a :href="href" class="flex items-center">
            <div 
                class="h-px bg-slate-600 transition-all duration-300 mr-4"
                :class="[
                    isActive ? 'w-24 bg-teal-300' : 'w-12',
                    'group-hover:w-24 group-hover:bg-teal-300'
                ]"
            ></div>
            <span 
                class="transition-colors duration-300"
                :class="[
                    isActive ? 'text-teal-300' : '',
                    'group-hover:text-teal-300'
                ]"
            >{{ text }}</span>
        </a>
    </li>
</template>


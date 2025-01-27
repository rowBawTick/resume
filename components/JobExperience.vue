<script setup lang="ts">
import ExternalLinkIcon from './DiagonalArrowIcon.vue';
import type { Job } from '~/constants/experience';

defineProps<Job>();
</script>

<template>
    <li class="md:-ml-4">
        <a :href="companyUrl" 
           target="_blank" 
           rel="noopener noreferrer"
           class="md:grid md:grid-cols-5 md:gap-4 block group md:p-4 hover-card-effect border border-transparent">
            <p class="text-slate-400 text-sm opacity-75 mt-1 mb-2 md:mb-0">{{ dateRange }}</p>
            <div class="md:col-span-4">
                <div class="text-slate-200 font-bold group-hover:text-teal-300 inline-flex items-center">
                    {{ title }} — <span class="inline-block">{{ company }}
                        <ExternalLinkIcon />
                    </span>
                </div>
                <p class="mt-2 group-hover:text-slate-300">{{ description }}</p>
                <div v-if="skills.length" class="mt-3 flex flex-wrap gap-2">
                    <span v-for="skill in skills"
                          :key="skill"
                          class="px-3 py-1 text-sm rounded-full text-teal-300 bg-teal-300/10 group-hover:bg-teal-300/20">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </a>
    </li>
</template>

<style scoped>
.external-link-icon {
    @apply inline-block h-4 w-4 shrink-0 transition-transform ml-1 translate-y-px text-slate-200;
}

.group:hover .external-link-icon {
    @apply text-teal-300 -translate-y-1 translate-x-1;
}
</style>
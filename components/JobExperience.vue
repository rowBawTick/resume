<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    companyUrl: {
        type: String,
        required: true
    },
    dateRange: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        default: () => []
    }
});
</script>

<template>
    <li>
        <a :href="companyUrl" 
           target="_blank" 
           rel="noopener noreferrer"
           class="md:grid md:grid-cols-5 md:gap-4 block group rounded-lg md:p-4 
                  lg:hover:bg-slate-700/60 lg:hover:border lg:hover:border-slate-100/5">
            <p class="text-slate-400 text-sm opacity-75 mt-1 mb-2 md:mb-0">{{ dateRange }}</p>
            <div class="md:col-span-4">
                <div class="text-slate-200 font-bold group-hover:text-teal-300 inline-flex items-center">
                    {{ title }} — <span class="inline-block">{{ company }}
                        <svg class="external-link-icon"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"
                             fill="currentColor"
                             aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"/>
                        </svg>
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
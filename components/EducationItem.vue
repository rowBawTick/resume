<script setup>
defineProps({
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    locationLink: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <li class="md:-ml-4">
        <a :href="website"
           target="_blank"
           rel="noopener noreferrer"
           class="md:grid md:grid-cols-5 md:gap-4 block group md:p-4 hover-card-effect border border-transparent">
            <p class="text-slate-400 text-sm opacity-75 mt-1 mb-2 md:mb-0">{{ date }}</p>
            <div class="md:col-span-4">
                <div class="flex flex-col gap-1">
                    <h3 v-if="degree" class="text-slate-200 font-bold group-hover:text-teal-300">{{ degree }}</h3>
                    <div class="text-slate-200 font-bold group-hover:text-teal-300 inline-flex items-center">
                        {{ name }}
                        <svg class="external-link-icon"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"
                             fill="currentColor"
                             aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <a :href="locationLink"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="text-slate-400 hover:text-teal-300 inline-flex items-center">
                        <span class="mr-1">📍</span>{{ location }}
                    </a>
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
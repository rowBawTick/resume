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
    <li class="bg-slate-800 p-4 rounded-md md:relative md:group">
        <div class="hidden md:block absolute inset-0 bg-slate-800/0 hover-card-effect"></div>

        <a :href="website"
           target="_blank"
           rel="noopener noreferrer"
           class="hidden md:absolute md:inset-0 md:block">
            <span class="sr-only">View {{ name }} website</span>
        </a>

        <div class="relative">
            <p class="text-slate-400 text-sm opacity-75 mb-2 group-hover:text-slate-300">{{ date }}</p>
            <div>
                <h3 v-if="degree" class="text-slate-200 font-bold mb-1 group-hover:text-slate-100">{{ degree }}</h3>
                <div class="text-slate-200 font-bold group-hover:text-teal-300">
                    {{ name }}
                </div>
                <a :href="locationLink"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-slate-400 hover:text-teal-300 mt-1 inline-flex items-center relative z-10">
                    <span class="mr-1">📍</span>{{ location }}
                </a>
            </div>
        </div>
    </li>
</template> 
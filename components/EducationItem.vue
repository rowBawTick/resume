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
    <li class="bg-slate-800 p-4 rounded-md">
        <p class="text-slate-400 text-sm opacity-75 mb-2">{{ date }}</p>
        <div>
            <h3 v-if="degree" class="text-slate-200 font-bold mb-1">{{ degree }}</h3>
            <a :href="website" target="_blank" rel="noopener noreferrer" 
               class="text-slate-200 font-bold hover:text-teal-300 block">
                {{ name }}
            </a>
            <a :href="locationLink" target="_blank" rel="noopener noreferrer"
               class="text-slate-400 hover:text-teal-300 mt-1 inline-flex items-center">
                <span class="mr-1">📍</span>{{ location }}
            </a>
        </div>
    </li>
</template> 
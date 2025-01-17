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
    <li>
        <a :href="website" 
           target="_blank" 
           rel="noopener noreferrer"
           class="block group hover-card-effect p-4">
            <p class="text-slate-400 text-sm opacity-75 mb-2 group-hover:text-slate-300">{{ date }}</p>
            <div>
                <h3 v-if="degree" class="text-slate-200 font-bold mb-1 group-hover:text-slate-100">{{ degree }}</h3>
                <div class="text-slate-200 font-bold group-hover:text-teal-300">
                    {{ name }}
                </div>
                <div class="text-slate-400 mt-1 inline-flex items-center">
                    <a :href="locationLink" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="hover:text-teal-300 inline-flex items-center">
                        <span class="mr-1">📍</span>{{ location }}
                    </a>
                </div>
            </div>
        </a>
    </li>
</template> 
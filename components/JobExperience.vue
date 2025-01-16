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
        <p class="text-slate-400 text-sm opacity-75 mt-1 mb-2">{{ dateRange }}</p>
        <a :href="companyUrl" target="_blank" rel="noopener noreferrer" class="text-slate-200 font-bold hover:text-teal-300">
            {{ title }} — {{ company }}
        </a>
        <p class="mt-2">{{ description }}</p>
        <div v-if="skills.length" class="mt-3 flex flex-wrap gap-2">
            <span v-for="skill in skills" 
                  :key="skill" 
                  class="px-3 py-1 text-sm rounded-full text-teal-300 bg-teal-300/10">
                {{ skill }}
            </span>
        </div>
    </li>
</template> 
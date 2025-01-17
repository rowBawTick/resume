<script setup lang="ts">
defineProps({
    href: String,
    text: String,
});
</script>

<template>
    <li class="group">
        <a :href="href" class="flex items-center">
            <div class="h-px w-12 bg-slate-600 group-hover:w-24 group-hover:bg-teal-300 transition-all duration-300 mr-4">

            </div>
            <span class="group-hover:text-teal-300 transition-colors duration-300">{{ text }}</span>
        </a>
    </li>
</template>


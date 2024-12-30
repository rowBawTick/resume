<script setup lang="ts">
defineProps({
    href: String,
    text: String,
});
</script>

<template>
    <li>
        <a :href="href" class="hover:text-teal-300">
            {{ text }}
        </a>
    </li>
</template>


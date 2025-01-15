<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
});


const wordArray = computed(() => {
    return props.text ? props.text.split("") : [];
});

// Colors array for cycling through the letters
const colors = [
    "#4fd1c5", // teal-300
    "#63b3ed", // blue-400
    "#667eea", // indigo-400
    "#9f7aea", // violet-400
    "#ed64a6", // pink-400
    "#fc8181", // red-400
    "#f6ad55", // orange-400
    "#f6e05e", // yellow-400
    "#68d391", // green-400
    "#4fd1c5", // teal-400
];

// Compute inline styles for each letter dynamically
const getLetterStyle = (index) => ({
    transitionDelay: `${index * 50}ms`,
    color: "inherit", // Default to inherit (matches the surrounding text)
    "--hover-color": colors[index % colors.length], // Dynamically set hover color
});
</script>

<template>
  <span class="inline-flex">
    <!-- Loop through each letter -->
    <span
        v-for="(letter, index) in wordArray"
        :key="index"
        :style="getLetterStyle(index)"
        class="transition duration-500 ease-in-out hover:color-[var(--hover-color)]"
    >
      {{ letter }}
    </span>
    </span>
<!--        :style="getLetterStyle(index)"-->
</template>


<style scoped>
span {
    color: inherit; /* Matches the text color of the parent element */
}

/* On hover, apply the color defined in the inline style */
span:hover {
    color: var(--hover-color); /* Apply the hover color */
}
</style>

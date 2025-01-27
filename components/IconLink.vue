<script setup lang="ts">
interface Props {
  href: string
  icon: string[]
  external?: boolean
}

defineProps<Props>();
</script>

<template>
  <a :href="href"
     :target="external ? '_blank' : undefined"
     :rel="external ? 'noopener noreferrer' : undefined"
     class="hover:text-teal-300">
    <font-awesome-icon :icon="icon" class="text-3xl lg:text-2xl" />
  </a>
</template>

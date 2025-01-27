<script setup lang="ts">
import JobExperience from '~/components/JobExperience.vue';
import { jobs } from '~/constants/experience';
</script>

<template>
    <section id="experience" class="mb-16">
        <h2 class="section-heading">Experience</h2>
        <ul class="mt-4 space-y-8">
            <JobExperience
                v-for="job in jobs"
                :key="job.company"
                v-bind="job"
            />
        </ul>
    </section>
</template>

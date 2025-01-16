<script setup>
import JobExperience from '~/components/JobExperience.vue';

const jobs = [
    {
        title: 'Software Engineer',
        company: 'Iterative Edge',
        companyUrl: 'https://iterative-edge.co.uk',
        dateRange: '2024 — Present',
        description: 'Currently freelancing for a small company building out AI infrastructure in the property technology sector. Working on a few other small projects in parallel.',
        skills: ['PHP', 'Laravel', 'Nova', 'JavaScript', 'Vue.js']
    },
    {
        title: 'Software Engineer',
        company: 'Substantive Research',
        companyUrl: 'https://substantiveresearch.com',
        dateRange: '2021 — 2024',
        description: 'Fostered collaboration among junior developers, improved code quality through testing and secure practices, and built a streamlined CI/CD pipeline. Engaged with clients to ensure features met their needs and delivered lasting value. Maintained a strong emphasis on secure coding practices and conducted annual penetration tests to safeguard sensitive data, ensuring industry compliance.',
        skills: ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'Python', 'Django', 'AWS', 'Docker']
    },
    {
        title: 'Junior Software Developer',
        company: 'Gigabyte Software',
        companyUrl: 'https://www.gigabytesoft.co.uk',
        dateRange: '2018 — 2021',
        description: 'Worked with stakeholders to enhance a bespoke enterprise system, addressing issues and adding new features. Supported greenfield projects, facilitated team communication as a part-time scrum master, and improved workflow through sprint planning and retrospectives.',
        skills: ['PHP', 'Symfony', 'JavaScript', 'Vue.js', 'MySQL']
    }
];
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

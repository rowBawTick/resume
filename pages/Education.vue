<script setup>
import EducationItem from '~/components/EducationItem.vue';

const schools = [
    {
        date: '2010 — 2012',
        name: 'Utrecht University',
        website: 'https://www.uu.nl/en/research/physics-and-astronomy',
        location: 'Utrecht',
        locationLink: 'https://www.google.co.uk/maps/place/Utrecht,+Netherlands/@52.084166,5.0124519',
        degree: 'MSc in Astrophysics and Space Research'
    },
    {
        date: '2005 — 2009',
        name: 'University of Edinburgh',
        website: 'https://www.ph.ed.ac.uk',
        location: 'Edinburgh',
        locationLink: 'https://www.google.co.uk/maps/place/Edinburgh/@55.9411885,-3.2753782',
        degree: 'BSc with Hons in Astrophysics'
    }
];
</script>

<template>
    <section id="education" class="mb-16">
        <h2 class="section-heading">Education</h2>
        <ul class="mt-4 space-y-4">
            <EducationItem
                v-for="school in schools"
                :key="school.name"
                v-bind="school"
            />
        </ul>
    </section>
</template>

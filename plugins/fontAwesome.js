import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Disable auto CSS injection to avoid duplication in Nuxt's SSR.
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    library.add(faEnvelope, faMapMarkerAlt, faGithub, faLinkedin);
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});

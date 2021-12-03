import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {faTwitter,faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'


// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;


// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
    faLongArrowAltRight,
    faTwitter,
    faLinkedinIn,
    faGithub
    )

Vue.component('fs-icon',FontAwesomeIcon)

// Ref : https://fontawesome.com/v6.0/docs/web/use-with/vue/use-with


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import '../leaflet/leaflet.css/';

import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';


/* add icons to the library */
library.add(faSearch)
library.add(faAngleRight)
library.add(faAngleLeft)
library.add(faArrowLeft)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-popup', LPopup);
app.use(router);
app.mount('#app');


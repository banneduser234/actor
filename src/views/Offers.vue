<template>

            <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>
                
                <header class="text-green-700 text-3xl font-extrabold text-center relative py-8 after:content-[''] after:absolute after:border-2 afer:border-4 after:border-green-700 after:w-60 after:bottom-0 after:left-0 after:right-0 after:mx-auto uppercase">
                    Offres Disponibles <span class='absolute inline-block border-8 z-30 border-green-700 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3'></span>
                </header>
        
                <article class="">
                  <!-- {{ JSON.stringify(offers) }} -->
                  <OffersVue v-if="offers.length > 0" :offers="offers"/>
                </article>
                
            </section>

            <Loader v-if="loader"/>

</template>

<script>

import HomeHero from '../components/HomeHero.vue';
import Map from '../components/Map.vue';
import OffersVue from '@/components/OffersVue.vue'

import { useRoute } from 'vue-router';
import { computed, onMounted, watch, ref } from 'vue';
import axios from 'axios';
import Loader from '@/components/Loader.vue'

export default {
  name: 'Accueil',
  components: {
    HomeHero, Map, OffersVue, Loader
  },
  setup () {

    const route = useRoute()

    const offers = ref([])

    const loader = ref(false)

    const pageTitle = computed(() => {
      return route.meta.title || 'Default Page Title';
    });

    onMounted(() => {
      document.title = pageTitle.value;
      fetch_offers()
    });

    watch(pageTitle, (newTitle) => {
      document.title = newTitle;
    });

    const fetch_offers = () => {

        loader.value = true

      axios.get('https://gestion.acteur-agricole.bj/api/v1/get-offers')
      .then(res => {

        offers.value = res.data.offers

        loader.value = false

      })

    }

    return { pageTitle, offers, loader };

  },
//   computed : {
//     loader () {
//         return this.offers.length > 0 ? true : false
//     }
//   }
}

</script>
<template>
    
    <HomeHero></HomeHero>

    <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>
                
        <header class="text-green-700 text-3xl font-extrabold text-center relative py-8 after:content-[''] after:absolute after:border-2 afer:border-4 after:border-green-700 after:w-60 after:bottom-0 after:left-0 after:right-0 after:mx-auto">
            ACTEURS AGRICOLES <span class='absolute inline-block border-8 z-30 border-green-700 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3'></span>
        </header>

    </section>

    <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8 z-0'>

        <Map></Map>
                
    </section>

    <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>
                
        <header class="text-green-700 text-3xl font-extrabold text-center relative py-8 after:content-[''] after:absolute after:border-2 afer:border-4 after:border-green-700 after:w-60 after:bottom-0 after:left-0 after:right-0 after:mx-auto uppercase">
            Dernières offres <span class='absolute inline-block border-8 z-30 border-green-700 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3'></span>
        </header>

        <section class="my-8 clear-both after:table">
          <a href="/offres" class="rounded bg-blue-600 text-sm px-8 py-2 font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center lg:h-10 inline-flex items-center justify-center float-right">
            <font-awesome-icon icon="fas fa-list"></font-awesome-icon> <span class="inline-block ml-4">Voir tout</span>
          </a>
        </section>

        <article class="">
          <!-- {{ JSON.stringify(offers) }} -->
          <OffersVue v-if="offers.length > 0" :offers="offers"/>
        </article>
        
    </section>

</template>

<script>

import HomeHero from '../components/HomeHero.vue';
import Map from '../components/Map.vue';
import OffersVue from '@/components/OffersVue.vue'

import { useRoute } from 'vue-router';
import { computed, onMounted, watch, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Accueil',
  components: {
    HomeHero, Map, OffersVue
  },
  setup () {

    const route = useRoute()

    const offers = ref([])

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

      axios.get('https://gestion.acteur-agricole.bj/api/v1/get-ten-offers')
      .then(res => {

        offers.value = res.data.offers

      })

    }

    return { pageTitle, offers };

  }
}

</script>
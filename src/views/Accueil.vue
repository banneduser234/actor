<template>
    
    <HomeHero></HomeHero>

    <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>
                
        <header class="text-green-700 text-3xl font-extrabold text-center relative py-8 after:content-[''] after:absolute after:border-2 afer:border-4 after:border-green-700 after:w-60 after:bottom-0 after:left-0 after:right-0 after:mx-auto">
            ACTEURS AGRICOLES <span class='absolute inline-block border-8 border-green-700 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3'></span>
        </header>

    </section>

    <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

        <Map></Map>
                
    </section>

</template>

<script>

import HomeHero from '../components/HomeHero.vue';
import Map from '../components/Map.vue';

export default {
  name: 'Accueil',
  components: {
    HomeHero, Map
  }
}

</script>
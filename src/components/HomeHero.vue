<template>
    <div class="relative isolate overflow-hidden bg-green-700 py-20 sm:py-32">

      <img :src="bgimg" alt="" class="absolute inset-0 -z-40 h-full w-full object-cover" />
      
      <div class="absolute inset-0 -z-40 h-full w-full object-cover bg-gradient-to-t from-green-700/95 to-green-300/25"></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">ACTEURS AGRICOLES DU BENIN</h2>
          <p class="mt-6 text-xl leading-8 text-gray-300">
            La Chambre Nationale d’Agriculture en route pour mettre en place
                un système d’information de marché grâce à l’appui technique du
                Ministère de l’Agriculture et l’appui financier du PARASEP à travers
                un financement de l’Union européenne et de l’Agence f rançaise de
                Développement.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
        <SearchHero/>
      </div>

    </div>
</template>

<script>

import SearchHero from "./SearchHero.vue"
import bgimg from "@/images/background_image.png"

export default {
  name: 'HeroHome',
  components: {
    SearchHero
  },
  data () {
    return {

      bgimg : bgimg

    }
  }
}

</script>
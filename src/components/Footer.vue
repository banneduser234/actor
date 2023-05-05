<template>
    <footer class="bg-green-700" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-10 pt-10 sm:pt-10 lg:px-8 lg:pt-10">
        <div class="xl:grid xl:grid-cols-2 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Acteurs agricoles</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.acteurs" :key="item.name">
                    <router-link :to="item.href" class="text-sm leading-6 text-gray-100">{{ item.name }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.support" :key="item.name">
                    <router-link :to="item.href" class="text-sm leading-6 text-gray-100">{{ item.name }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">En savoir plus</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.company" :key="item.name">
                    <router-link :to="item.href" class="text-sm leading-6 text-gray-100">{{ item.name }}</router-link>
                  </li>
                </ul>
              </div>
              <!-- <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in navigation.legal" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
        <!-- <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div> -->
      </div>
    </footer>
    <div class="mx-auto max-w-7xl px-6 pb-10 pt-10 sm:pt-10 lg:px-8 ">

        <div class="grid grid-cols-3 gap-5">

        <!-- {footerimg.map((img,id) => (<img key={id} src={img.src} alt="" width='' height=''/>))} -->

        <img v-for="item in footerimg" :key="item.key"  :src="item.src"/>

        <!-- <li v-for="item in navigation.acteurs" :key="item.name">
                        <a :href="item.href" class="text-sm leading-6 text-gray-100">{{ item.name }}</a>
                    </li> -->

        </div>

        <p class="text-xs leading-5 text-green-700 text-center">&copy; 2021 Acteurs agricoles. Tous droits réservés. Propulsé par la Chambre Nationale d’Agriculture du Bénin</p>

    </div>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  
  const navigation = {
    acteurs: [
      { name: 'A propos', href: '/mentions-legales' },
      { name: 'Nous contacter', href: '/contact' },
    ],
    support: [
      { name: 'Faire une suggestion', href: '/contact' },
      { name: 'Signaler un probleme', href: '/contact' },
    ],
    company: [
      { name: 'Mensions legales', href: '/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
      { name: 'CGU', href: '/cgu' },
    ]
  }

  const footerimg = [
    {
        src:"maep.png",
        key:0
    },
    {
        src:"partners.png",
        key:1
    },
    {
        src:"giz.png",
        key:2
    }
  ]
  </script>
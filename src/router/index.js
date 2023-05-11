import { createRouter, createWebHistory } from 'vue-router';
import Accueil from "@/views/Accueil.vue"
import Cgu from "@/views/Cgu.vue"
import Mentions from "@/views/Mention.vue"
import Confidentialite from "@/views/Confidentialite.vue"
import Contact from "@/views/Contact.vue"
import Search from "@/views/Search.vue"
import Bg404 from "@/views/404.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: "home",
      component: Accueil ,
      meta : {
        title : 'Acteurs agricoles'
      }
    },
    { 
      path: '/cgu', 
      name: "cgu",
      component: Cgu ,
      meta : {
        title : 'Termes et conditions'
      }
    },
    { 
      path: '/mentions-legales', 
      name: "mentions",
      component: Mentions ,
      meta : {
        title : 'Mentions légales'
      }
    },
    { 
      path: '/politique-de-confidentialite', 
      name: "confidentialite",
      component: Confidentialite ,
      meta : {
        title : 'Politique de conidentialité'
      }
    },
    { 
      path: '/contact', 
      name: "contact",
      component: Contact ,
      meta : {
        title : 'Contactez nous'
      }
    },
    { 
      path: '/rechercher', 
      name: "search",
      component: Search ,
      meta : {
        title : 'Recherchez un acteur'
      }
    },
    {
      path: '/:catchAll(.*)',
      component: Bg404,
      meta : {
        title : 'Page introuvable'
      }
    }
    
  ]
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Accueil from "@/views/Accueil.vue"
import Cgu from "@/views/Cgu.vue"
import Mentions from "@/views/Mention.vue"
import Confidentialite from "@/views/Confidentialite.vue"
import Contact from "@/views/Contact.vue"
import Search from "@/views/Search.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: "home",
      component: Accueil 
    },
    { 
      path: '/cgu', 
      name: "cgu",
      component: Cgu 
    },
    { 
      path: '/mentions-legales', 
      name: "mentions",
      component: Mentions 
    },
    { 
      path: '/politique-de-confidentialite', 
      name: "confidentialite",
      component: Confidentialite 
    },
    { 
      path: '/contact', 
      name: "contact",
      component: Contact 
    },
    { 
      path: '/rechercher', 
      name: "search",
      component: Search 
    },
  ]
});

export default router;

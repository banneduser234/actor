<template>

    <SearchPageHero></SearchPageHero>

    <ResultVue v-if="!loader" :searchRes="requestsRes.searches"/>

    <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

        <article class=''>
            
            <div class=''>

                <form @submit.prevent="makeSearch">

                <div>
                    <label htmlFor="search" class="block text-2xl my-5 font-bold leading-6 text-gray-900">
                        Recherchez un acteur
                    </label>
                    <div class="relative mt-2 flex items-center">
                        <input
                        type="text"
                        name="query"
                        id="search"
                        placeholder='Recherchez un acteur ici'
                        class="block w-full rounded-md border-0 px-5 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 sm:text-sm sm:leading-6 py-4"
                        />
                        <input type='hidden' id='cat_id'/>
                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                <div className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                                    <button class='px-4'><font-awesome-icon icon="fa-search"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </form>

            </div>

        </article>

    </section>

    <Loader v-if="loader"/>

</template>

<script>

import SearchPageHero from "@/components/SearchPageHero.vue"
import ResultVue from "@/components/ResultVue.vue"
import { onMounted, onUnmounted, reactive,ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import Loader from '@/components/Loader.vue'

export default {
    components : {
        SearchPageHero, ResultVue, Loader
    }, 
    setup () {
        const query = ref('')

        const router = useRoute()

        const the_router = useRouter()

        const loader = ref(false)

        const requestsRes = reactive({
            searches : []
        })

        const makeSearch = e => {

            let query = e.target["query"].value

            the_router.push({
                name : 'search',
                query : {q : query.split('+'),cat : ''}
            }).then(() => the_router.go(0))

            

        }

        const performSearch = (query, cat) => {

            loader.value = true


            axios.get(`https://gestion.acteur-agricole.bj/api/v1/search-actor/${query == '' ? undefined : query}/${ cat != '' ? cat : 'undefined' }`)
            .then(res => {

                requestsRes.searches = res.data.result

                loader.value = false

            })

        }

        onMounted(() => {
            performSearch(router.query.q,router.query.cat)
        })

        return {query,makeSearch,requestsRes,performSearch,loader}

    },
    methods : {



    }
}

</script>
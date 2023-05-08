<template>

    <form action="" @submit.prevent="makeSearch" method="post" class="">

        <header class="lg:text-4xl font-bold tracking-tight text-white sm:text-md text-lg">RECHERCHER UN ACTEUR AGRICOLE</header>

        <div class="rounded-md shadow-sm my-4 lg:flex block relative">
                <input
                    type="search"
                    name="query"
                    id="query-field"
                    v-model="query"
                    class="block sm:w-full w-full lg:5/12 md:w-7/12 border-0 md:rounded-none py-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 px-5 outline-none"
                    placeholder="Votre recherche"
                />
                

                <div class="relative block sm:w-full w-full lg:5/12 md:w-7/12 my-3 lg:m-0">
                    <input
                        type="search" 
                        autoComplete="off"
                        id="cat_input"
                        v-model="queryField"
                        @click="toggleCatBox"
                        class="block w-full lg:my-0 h-full border-0 md:rounded-none py-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6 px-5 outline-none"
                        placeholder="Choisissez une categorie"
                    />  

                    <!-- {
                        filtre.length > 0 && 
                        <FiltreContext.Provider value={filtreMemo}>
                            <CategoryPanel data={filtre} context={FiltreContext}/>
                        </FiltreContext.Provider>
                    }  -->

                    
                    <section v-if="queryField != '' && filteredCategories.length > 0 || CatBox === true" class="absolute z-40 top-full right-0 w-full bg-white shadow-lg p-3 h-32 overflow-auto">

                        <article @click="setCategory" v-for="category in filteredCategories" :key="category.id" :id="category.id" class="hover:bg-gray-200 p-2 mb-2 cursor-pointer">
                            {{ category.name }}
                        </article>    

                    </section>

                </div>

                <input type="hidden" id="cat_id" name="cat_id" v-model="category"/>               

                <button type="submit" class="bg-blue-600 text-white block p-4 w-5/12 lg:w-2/12 md:w-3/12 md:rounded-none">

                    <font-awesome-icon icon="fa-solid fa-search" />

                    <span>Rechercher</span>

                </button>
        </div>


    </form>

    <Loader v-if="loader"/>

</template>

<script>

    import axios from 'axios'

    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    import { toast } from 'vue3-toastify'
    import 'vue3-toastify/dist/index.css'
    import Loader from '@/components/Loader.vue'

    export default {

        components : {
            Loader
        },

        data () {
            return {
                categories : [],
                queryField: "",
                loader : false,
                CatBox : false
            }
        }

        ,

        setup () {

            const query = ref('')

            const category = ref('')

            const router = useRouter()

            const formv = (e) => {

                return new Promise((resolve,reject) => {

                    if(category.value == '' && query.value == '') resolve({res:false,text:'Recherche vide'})
                    else resolve({res:true,text:''})

                })

            }

            const makeSearch = async e => {

                e.preventDefault()
                
                await formv(e)
                .then(res => {
                    
                    if(res.res)
                    {

                        router.push({
                            name : 'search',
                            query : {q : query.value.split('+'),cat : category.value}
                        })

                        // e.target.submit()

                    }else toast.info('Tous les champs sont vides !',{position:toast.POSITION.TOP_RIGHT})

                })

            }

            return {query, category, makeSearch, router}

        }
        ,

        mounted () {

            this.getCategories()

            document.body.addEventListener('click',(e) => {

                if(!e.target.matches('#cat_input')) this.CatBox == true ? this.CatBox = false : this.CatBox = false;

            })

        },

        methods : {

            getCategories () {

                this.loader = true

                axios.get('https://gestion.acteur-agricole.bj/api/v1/get-categories')
                .then(res => {

                    console.log(res.data.categories)

                    this.categories = res.data.categories

                    this.loader = false

                })

            },

            setCategory (e) {

                this.category = e.target.getAttribute('id')

                this.queryField = e.target.innerText

                // this.queryField != '' && this.filteredCategories.length == 1 ?  

            },

            toggleCatBox () {
                this.CatBox == false ? this.CatBox = true : this.CatBox = false;
            }

        },

        computed : {

            filteredCategories () {
                return this.categories.filter(category => category.name.toLowerCase().includes(this.queryField.toLowerCase()))
            }

        }

    }

</script>
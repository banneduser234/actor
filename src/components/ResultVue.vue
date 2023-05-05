<template>

    <div v-for="line in searchRes"></div>

                <section v-if="searchRes.length == 0" className='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

                        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    Aucun resultat pour votre recherche
                                </p>
                                </div>
                            </div>
                        </div>

                </section>

                <section v-else className='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

                    <article className=''>

                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold leading-6 text-gray-900">Resultats de recherche</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                Un total de {{ searchRes.length }} acteur{{  searchRes.length == 1 ? '' : 's' }}
                            </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead>
                                            <tr className="divide-x divide-gray-200">
                                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                                    Nom
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Nationalite
                                                </th>
                                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                                    Numero de telephone
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            <tr v-for="res in chuncked_array[tab_index]" :key="res.id" className="divide-x divide-gray-200">
                                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                            {{  res.last_name }} {{ res.first_name }}
                                                </td>
                                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">{{ res.nationality }}</td>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{{ res.phone }}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div class="my-5 flex justify-between items-center">

                                        <div class="">
                                            <div v-if="tab_index > 0" @click="call_previous" class="bg-green-300 inline-block w-8 h-8 flex items-center justify-center rounded-full text-xl text-green-900 cursor-pointer">
                                                <font-awesome-icon :icon="['fas', 'fa-angle-left']" />
                                            </div>
                                        </div>

                                        <div class="">
                                            <div v-if="tab_index != (chuncked_array.length - 1)" @click="call_next" class="bg-green-300 inline-block w-8 h-8 flex items-center justify-center rounded-full text-xl text-green-900 cursor-pointer">
                                                <font-awesome-icon :icon="['fas', 'fa-angle-right']" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>

                    </article>

                </section>

</template>

<script>

import { ref, getCurrentInstance, watchEffect } from 'vue';

import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'



    export default {

        props : {
            searchRes : {
                type : Array,
                required : true
            }
        },

        data () {
            return {
                chuncked_array : [],
                tab_index : 0
            }
        },

        mounted () {
            console.log(this.get_chunked)
        },

        methods : {
            call_next () {
                if((this.tab_index + 1) > this.chuncked_array.length)
                {
                    return;
                }
                this.tab_index += 1
            },
            call_previous () {
                if(this.tab_index == 0) return;
                this.tab_index -= 1
            }
        },

        computed : {

            get_chunked () {
                return this.chunck_tab()
            }

        },

        components : {
            ExclamationTriangleIcon
        },

        mounted () {
            let timer = setInterval(() => {

                if(this.searchRes.length == 0)
                {
                    return;
                }
                else{
                    const chunckall = () => {
                        return Array.from({ length: Math.ceil(this.searchRes.length / 10) }, (_, index) =>
                            this.searchRes.slice(index * 10, index * 10 + 10)
                        )
                    }
                    this.chuncked_array = chunckall()
                    // console.log(this.chuncked_array[0].length)
                    clearInterval(timer)
                }

            },200)
        }

        // setup (props) {

        //     const results40 = ref([])

        //     const tab_index = ref(0)

        //     const wholeTab = ref(null)

        //     watchEffect(() => {
        //         if (props.searchRes.length > 0) {
        //             wholeTab.value = props.searchRes
        //             console.log(wholeTab)
        //         }
        //     })

        //     const resDispatch = () => {
        //         return Array.from({ length: Math.ceil(wholeTab.length / 20) }, (_, index) =>
        //             wholeTab.slice(index * 20, index * 20 + 20)
        //         )
        //     }

        //     // const instance = getCurrentInstance();
        //     // instance.results40 = results40;
        //     // instance.resDispatch = resDispatch

        //     return {wholeTab,results40,tab_index,resDispatch}

        // },

    }

</script>
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
                            <h1 className="text-base font-semibold leading-6 text-gray-900">"{{ query == '' ? category : query }}"</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                {{ searchRes.length }} resultat{{  searchRes.length == 1 ? '' : 's' }}
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
                                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-lg font-extrabold text-gray-900 sm:pl-0">
                                                    Nom / Dénomination
                                                </th>
                                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-lg font-extrabold text-gray-900 sm:pr-0">
                                                    Activité
                                                </th>
                                                <th scope="col" className="px-4 py-3.5 text-left text-lg font-extrabold text-gray-900">
                                                    Commune
                                                </th>
                                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-lg font-extrabold text-gray-900 sm:pr-0">
                                                    Affilié a
                                                </th>
                                                <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-lg font-extrabold text-gray-900 sm:pr-0">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            <tr v-for="res in chuncked_array[tab_index]" :key="res.id" className="divide-x divide-gray-200">
                                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm  text-gray-900 sm:pl-0">
                                                    <!-- font-medium -->
                                            {{  res.last_name }} {{ res.first_name }}
                                                </td>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{{ res.activity_primary != null ? res.activity_primary.name : 'Pas indique' }}</td>
                                                <td className="whitespace-nowrap p-4 text-sm text-gray-500">{{ res.commune != null ? res.commune.name : 'Pas indique' }}</td>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{{ res.user != null ? res.user.organisation_name : 'Pas indique' }}</td>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">

                                                    <a @click.prevent="openBox(`box${res.id}`)" href="" class="rounded bg-green-700 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 block w-full text-center">Voir les offres</a>

                                                    <!-- The button that triggers the dialog -->

                                                    <!-- <div class="dialog-box">
                                                        <div class="dialog-content">
                                                        <button class="close-button">Close</button>
                                                        <p>{{ rowData }}</p>
                                                        </div>
                                                    </div> -->

                                                    <div @click="triggerClose($event,`box${res.id}`)" :id="`box${res.id}`" class="bg-slate-800 bg-opacity-70 fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center cursor-pointer hidden">

                                                        <div class="w-5/12 bg-white min-h-[100px] rounded cursor-default p-5">

                                                            <div v-if="res.offers.length == 0" class="rounded-md bg-blue-50 p-4 mt-2">
                                                            
                                                                <div class="flex">

                                                                    <div class="flex-shrink-0">
                                                                        <InformationCircleIcon class="h-5 w-5 text-blue-400" aria-hidden="true" />
                                                                    </div>
                                                                    <div class="ml-3 flex-1 md:flex md:justify-between">
                                                                        <p class="text-sm text-blue-700">Aucune offre disponible pour cet acteur</p>
                                                                    </div>

                                                                </div>
                                                            
                                                            </div>
                                                            
                                                        </div>

                                                    </div>


                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
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
                            <div class="">Résultats non pertinents ? <a href="/contact" class="text-blue-700 underline">Contactez nous</a> </div>
                        </div>

                    </article>

                </section>

</template>

<script>

import { ref, getCurrentInstance, watchEffect } from 'vue';

import { ExclamationTriangleIcon } from '@heroicons/vue/20/solid'

import { InformationCircleIcon } from '@heroicons/vue/20/solid'



    export default {

        props : {
            searchRes : {
                type : Array,
                required : true
            },
            query : {
                type : String,
                required : true
            },
            category : {
                type : String,
                required : true
            }
        },

        data () {
            return {
                chuncked_array : [],
                tab_index : 0
            }
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
            },
            closeBox (id) {
                document.getElementById(id).classList.add('hidden')
            },
            openBox (id) {
                document.getElementById(id).classList.remove('hidden')
            },
            triggerClose (e,id) {

                const element = document.getElementById(id)

                if (e.target.matches(`#${id}`))
                {
                    element.classList.add('hidden')
                }

            }
        },

        computed : {

            get_chunked () {
                return this.chunck_tab()
            }

        },

        components : {
            ExclamationTriangleIcon, InformationCircleIcon
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
                    console.log(this.chuncked_array)
                    clearInterval(timer)
                }

            },200)
        },

    }

</script>
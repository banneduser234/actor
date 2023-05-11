<template>

    <div v-for="line in offers"></div>

                <section className='mx-auto max-w-7xl px-6 lg:px-0 py-6 lg:py-8'>

                    <article className=''>

                    <div className="px-4 sm:px-6 lg:px-8">
        
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-gray-100 rounded-lg">
                                    
                                    <!-- offers here -->

                                    <div v-for="line in chuncked_array[tab_index]" :class="`grid grid-cols-4 items-center py-5 ${chuncked_array[tab_index].length != chuncked_array[tab_index].indexOf(line) + 1 ? 'border-2 border-x-0 border-t-0 border-gray-300' : ''}`">
                                        
                                        <div class="">

                                            <div class="text-center">
                                                <img :src="`http://gestion.acteur-agricole.bj/uploads/filieres/${line.filiere.icon}`" alt="" class="w-10 inline-block mr-5"> 
                                                <!-- <span>{{ line.filiere.name }}</span> -->
                                            </div>

                                        </div>
                                        <div class="text-start">

                                            <div class="">
                                                <font-awesome-icon :icon="['fas', 'caret-right']"  class="text-lg mr-4 text-green-500"/> {{ line.value_chain.name }} ({{ line.quality_r.name }})
                                            </div>

                                            <div class="">
                                                <font-awesome-icon :icon="['fas', 'caret-right']" class="text-lg mr-4 text-orange-500"/> {{ line.quantity }}
                                            </div>

                                        </div>
                                        
                                        <div class="text-center">
                                            <i class="">
                                                <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-lg mr-4 text-blue-600"/> Publié le 
                                                {{ toDate(line.created_at) }}
                                            </i>
                                        </div>

                                        <div class="text-center">

                                            <button class="rounded bg-green-700 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 block w-full text-center">Je suis intéressé</button>

                                        </div>
                                        
                                    </div>

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
            offers : {
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

            },
            toDate(created_at)
            {
                const pub_date = new Date(created_at)
                const litteral = pub_date.toLocaleString('fr-FR',{
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })
                return litteral
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

                if(this.offers.length == 0)
                {
                    return;
                }
                else{
                    const chunckall = () => {
                        return Array.from({ length: Math.ceil(this.offers.length / 10) }, (_, index) =>
                            this.offers.slice(index * 10, index * 10 + 10)
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
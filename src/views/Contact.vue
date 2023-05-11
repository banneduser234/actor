<template>

            <div class="relative bg-white my-14">
                <!-- {loader && <Loader/>} -->
                <Loader v-if="isLoading"/>
                <div class="absolute inset-0">
                    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
                </div>
                <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                    <div class="bg-green-700 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div class="mx-auto max-w-lg">
                        <h2 class="text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl">Contactez nous</h2>
                        <p class="mt-3 text-lg leading-6 text-gray-50">
                            Notre équipe se tient à votre disposition pour vous recevoir aux jours et heures ouvrables et répondre à vos préoccupations. 
                        </p>
                        <dl class="mt-8 text-base text-gray-50">
                        <div class="mt-6">
                            <dt class="sr-only">Phone number</dt>
                            <dd class="flex">
                            <PhoneIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <span class="ml-3">+229 91 70 65 65</span>
                            </dd>
                        </div>
                        <div class="mt-3">
                            <dt class="sr-only">Email</dt>
                            <dd class="flex">
                            <EnvelopeIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            <span class="ml-3">support@acteur-agricole.bj</span>
                            </dd>
                        </div>
                        </dl>
                        <ToastContainer/>
                    </div>
                    </div>
                    <div class="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
                    <div class="mx-auto max-w-lg lg:max-w-none">
                        <form @submit.prevent="handleForm" method="POST" class="grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="full-name" class="sr-only">
                            Nom complet
                            </label>
                            <input
                            type="text"
                            name="name"
                            id="full-name"
                            autoComplete="name"
                            class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Nom complet" required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" class="sr-only">
                            Email
                            </label>
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Email" required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" class="sr-only">
                               Numero de telephone 
                            </label>
                            <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Numero de telephone" required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" class="sr-only">
                            Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            rows={4}
                            class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Message"
                            defaultValue='' required
                            ></textarea>
                        </div>
                        <div>
                            <button
                            type="submit"
                            class="inline-flex justify-center rounded-md border border-transparent bg-green-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                            >
                            Submit
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

</template>

<script>
import { defineComponent, ref, computed, watch, onMounted } from 'vue'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import Loader from "@/components/Loader.vue"
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useRoute } from 'vue-router';

export default {
    components : {
        EnvelopeIcon, PhoneIcon,Loader
    },
    data () {
        return {
            

        }
    },
    methods : {

        

    },
    setup () {
        
        const isLoading = ref(false)

        const route = useRoute();

        const pageTitle = computed(() => {
        return route.meta.title || 'Default Page Title';
        });

        onMounted(() => {
        document.title = pageTitle.value;
        });

        watch(pageTitle, (newTitle) => {
        document.title = newTitle;
        });

        const reset_form = e => {

            e.target['name'].value = ''
            e.target['email'].value = ''
            e.target['phone'].value = ''
            e.target['message'].value = ''

        }

        const handleForm = e => {

            e.preventDefault()

            var form = new FormData(e.target)

            isLoading.value = true

            axios.post('https://gestion.acteur-agricole.bj/api/v1/send-mail',form)
            .then(res => {

                if (res.data.res.code == 200) {
                    isLoading.value = false
                    reset_form(e)
                    toast.success(`${res.data.res.text} !`, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }

            })

        }

        return {isLoading,handleForm}

    }
}

</script>
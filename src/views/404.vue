<template>
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <img
                    :src="bg404"
                    alt=""
                    className="absolute inset-0 -z-40 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-40 h-full w-full object-cover bg-gradient-to-t from-green-700/95 to-green-300/25"></div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">404</h2>
                    <p className="mt-6 text-2xl font-bold leading-8 text-gray-300">
                        Nous sommes désolé, cette page n’est pas accessible ou n’existe pas ...
                    </p>
                    <div className="mt-10">

                        <Link className="rounded bg-blue-700 px-2 py-3 text-md font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href='/'>  
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                            <span>Retour à la page d’acceuil</span>
                        </Link>

                    </div>
                </div>
            </div>
</template>

<script>

    import bg404 from '@/images/404bg.png'

    export default {

        data () {
            return {
                bg404 : bg404
            }
        }

    }

</script>
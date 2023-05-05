<template>

        <div className="relative bg-green-800">
            <div className="absolute inset-0">
                <img
                className="h-full w-full object-cover"
                :src="searchherobg"
                alt=""
                />
                <div className="absolute inset-0 bg-green-800 mix-blend-multiply" aria-hidden="true"></div>
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">RECHERCHES</h1>
                <p className="mt-6 max-w-3xl text-xl text-indigo-100">
                
                </p>
            </div>
        </div>

</template>

<script>

import searchherobg from  "@/images/acteurbg.png" 

export default {
    data () {
        return {
            searchherobg : searchherobg
        }
    }
}

</script>
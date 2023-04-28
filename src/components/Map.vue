
<template>

    <l-map style="height: 300px;width: 100%;" :zoom="zoom" :center="center" :use-global-leaflet="false">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="member in members" :key="member.id" :lat-lng="[member.longitude,member.latitude]">
        
            <l-popup></l-popup>
        
        </l-marker>
    </l-map>

</template>

<script>

import axios from 'axios';

    export default {
        data(){
            return {
                url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                markerLatLng:[6.3600, 2.4149],
                zoom:9,
                center:[6.3600, 2.4149],
                members : []
            }
        },
        mounted () {
            this.callMembers()
        },
        methods:{
            callMembers () {

                axios.get('http://127.0.0.1:8000/api/v1/get-members')
                .then(res => {

                    console.log(res.data.members)

                    this.members = res.data.members

                })

            }
        }
    }

</script>
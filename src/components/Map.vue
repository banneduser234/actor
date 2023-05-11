
<template>

    <l-map style="height: 300px;width: 100%;" :zoom="zoom" :center="center" :use-global-leaflet="false" class="m-0 z-0">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-for="member in members" :key="member.id" :lat-lng="[member.longitude,member.latitude]">
        
            <l-popup>
                <div className='my-2'> <b>Nom /  Denomination </b><br/>{{  `${member.first_name} ${member.last_name}` }}</div>
                                <div className='my-2'>
                                    <b>Activite</b><br/> {{ member.real_activity == undefined ? 'Aucune donnees' : member.real_activity }}
                                </div>
                                <div>
                                    <b>Affilie a </b><br/>{{  member.affiliate_to == undefined ? 'Aucune donnees' : member.affiliate_to }}}
                                </div>
            </l-popup>
        
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

                axios.get('https://gestion.acteur-agricole.bj/api/v1/get-members')
                .then(res => {

                    console.log(res.data.members)

                    this.members = res.data.members

                })

            }
        }
    }

</script>
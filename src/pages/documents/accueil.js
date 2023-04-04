import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeHero from '@/components/HomeHero'
import Script from 'next/script'
import { useEffect } from 'react'
import { useApi } from '@/hooks/useResources'

export default function Accueil()
{

    const map_class = `w-10/12 mx-auto my-10 h-96`

    const [response,call] = useApi('get-members/latests')

    return (
        <>


            {/* <div>
                {response}
            </div> */}
        
            <HomeHero/>

            <>
                
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-62.04673002474011%2C16.95487694424327%2C-61.60521696321666%2C17.196751341562923&amp;layer=mapnik" 
            className={map_class}></iframe>
            <br/><small><a href="https://www.openstreetmap.org/#map=12/17.0759/-61.8260">View Larger Map</a></small>
            
            </>
        
        </>
    )

}
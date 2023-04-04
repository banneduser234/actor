import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { useState } from 'react'
import React from 'react'

export default function Layout({document})
{

    const [content, setContent] = useState(<></>)

    return (
        <>
        
            <Nav></Nav>

                {document}

            <Footer></Footer>
        
        </>
    )

}
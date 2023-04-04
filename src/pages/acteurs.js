import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/Layouts/layout'
import Acteur from './documents/acteurs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>

      <Layout document={<Acteur/>}></Layout>
      
    </>
  )
}

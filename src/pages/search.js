import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/Layouts/layout'
import Searchpage from './documents/search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>

      <Layout document={<Searchpage/>}></Layout>
      
    </>
  )
}

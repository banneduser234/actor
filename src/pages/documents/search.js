import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchHero from '@/components/SearchHero'
import { useRouter } from 'next/router'
import { useApi } from '@/hooks/useResources'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { NextPageContext } from "next";

const QueryContext = createContext({
    query:''
})

export function SearchResults({result})
{

    // const { query } = useContext(context)

    // const [result,call] = useApi(`search-actor/${query.q}`,{data:{result:[]}})

    // useEffect(() => {

    //     call(`search-actor/${query.q}`)

    // },[])

    return (

        <>

        {/* {query.q} */}
        
            {
                result.data.result.length == 0 ? 
            
                <section className='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

                        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    Aucun resultat pour votre recherche
                                </p>
                                </div>
                            </div>
                        </div>

                </section> : 

                <section className='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

                    <article className=''>

                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                            <h1 className="text-base font-semibold leading-6 text-gray-900">Resultats de recherche</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                Un total de {result.data.result.length} acteur{result.data.result.length == 1 ? '' : 's'}
                            </p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr className="divide-x divide-gray-200">
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Nom
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Prenom
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Nationalite
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                        Numero de telephone
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {result.data.result.map(res => (
                                    <tr key={res.id} className="divide-x divide-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                        {res.last_name}
                                        </td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{res.first_name}</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">{res.nationality}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{res.phone}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </div>

                    </article>

                </section>
                
            }


        
        </>

    )

}

export default function Searchpage()
{

    const [state,setState] = useState(0)

    const router = useRouter()

    const query  = router.query

    const [result,call] = useApi(`search-actor/${query.q}`,{data:{result:[]}})

    const {
        isReady,
        query: {
          q,
        }
      } = router;

    const querymem = useMemo(() => ({query:query}),[])

    useEffect(() => {
        if (!isReady) {
          console.log('Router not ready')
          return;
        }

        call(`search-actor/${query.q}`)
        
      }, [isReady]);

    return (
        <>
        
            <SearchHero/>

            {isReady && <QueryContext.Provider value={querymem}>
                <SearchResults result={result}/>
            </QueryContext.Provider>}  

            <section className='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

                <article className=''>
                    
                    <div className=''>

                        <form>

                        <div>
                            <label htmlFor="search" className="block text-lg font-bold leading-6 text-gray-900">
                                Recherchez un acteur
                            </label>
                            <div className="relative mt-2 flex items-center">
                                <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder='Recherchez un acteur ici'
                                className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </kbd>
                                </div>
                            </div>
                        </div>

                        </form>

                    </div>

                </article>

            </section>
        
        </>
    )

}

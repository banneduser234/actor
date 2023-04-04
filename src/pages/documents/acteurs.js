import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { useEffect } from 'react'
import ActorsHero from '@/components/ActorsHero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

export default function Acteur()
{

    return (
        <>
        
            <ActorsHero/>

            <section className='flex mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>

                <article className='w-3/12 p-4'>

                    <form>

                        <header className='flex'>
                            <div>Filtres</div> <div> <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> </div>
                        </header>

                        <fieldset>
                            <legend className="sr-only">Notifications</legend>
                            <div className="space-y-5">
                                <div className="relative flex items-start">
                                <div className="flex h-6 items-center">
                                    <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                    <label htmlFor="comments" className="font-medium text-gray-900">
                                    New comments
                                    </label>{' '}
                                    <span id="comments-description" className="text-gray-500">
                                    <span className="sr-only">New comments </span>so you always know what's happening.
                                    </span>
                                </div>
                                </div>
                                <div className="relative flex items-start">
                                <div className="flex h-6 items-center">
                                    <input
                                    id="candidates"
                                    aria-describedby="candidates-description"
                                    name="candidates"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                    <label htmlFor="candidates" className="font-medium text-gray-900">
                                    New candidates
                                    </label>{' '}
                                    <span id="candidates-description" className="text-gray-500">
                                    <span className="sr-only">New candidates </span>who apply for any open postings.
                                    </span>
                                </div>
                                </div>
                                <div className="relative flex items-start">
                                <div className="flex h-6 items-center">
                                    <input
                                    id="offers"
                                    aria-describedby="offers-description"
                                    name="offers"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                </div>
                                <div className="ml-3 text-sm leading-6">
                                    <label htmlFor="offers" className="font-medium text-gray-900">
                                    Offers
                                    </label>{' '}
                                    <span id="offers-description" className="text-gray-500">
                                    <span className="sr-only">Offers </span>when they are accepted or rejected by candidates.
                                    </span>
                                </div>
                                </div>
                            </div>
                        </fieldset>

                    </form>

                </article>

                <article className='w-9/12 p-8 lg:8'>
                    
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
                                className="block w-full rounded-md border-0 py-4 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
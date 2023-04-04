import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useApi } from "@/hooks/useResources"
import { Suspense, useEffect, useRef } from "react"
import { useRouter } from "next/router"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function SearchActorForm() {

    const [categories,setCategories] = useApi('get-categories',{data:{categories:[]}})

    const router = useRouter()

    const point = useRef()

    const formv = (e) => {

        return new Promise((resolve,reject) => {

            if(e.target['query'].value == '') resolve({res:false,text:'Recherche vide'})
            else resolve({res:true,text:''})

        })

    }

    const handleSearch = async (e) => {

        e.preventDefault()

        await formv(e)
        .then(res => {
            
            if(res.res)
            {

                router.push({
                    pathname : 'search',
                    query : {q : e.target['query'].value.split('-')}
                })

                // e.target.submit()

            }else alert('')

        })

    }

    useEffect(() => {setCategories('get-categories')},[])
    
    return (
        <form action="" onSubmit={handleSearch} method="post" className="">

            <header className="text-4xl font-bold tracking-tight text-white sm:text-xl">RECHERCHER UN ACTEUR AGRICOLE</header>

            <div className="rounded-md shadow-sm py-4 lg:py-4 lg:flex block">
                    <input
                        type="search"
                        name="query"
                        id="email"
                        className="block w-full border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                    />
                    <select
                        id="location"
                        name="category"
                        className="block w-full border-0 lg:my-0 my-4 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                        defaultValue="Canada"
                    >

                        <Suspense fallback={<Loading />}>

                            {categories.data.categories.map(category => <option key={category.id}>{category.name}</option>)}
                        
                        </Suspense>
                        
                        


                    </select>

                    <button type="submit" className="bg-blue-700 text-white block p-4">

                        <FontAwesomeIcon icon={faSearch}/>

                        <span>Rechercher</span>

                    </button>

                {/* <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                    <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
                    Job Title
                    </label>
                    <input
                    type="text"
                    name="job-title"
                    id="job-title"
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Head of Tomfoolery"
                    />
                </div> */}
            </div>


        </form>
    )
  }
  
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
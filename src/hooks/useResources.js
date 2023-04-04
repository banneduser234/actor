import axios from "axios"
import { useEffect, useState } from "react"
// import dotenv from 'dotenv';
// dotenv.config();

export const useApi = (apiRoute,format) => {

    const [state,setState] = useState(format)

    const call = (apiRoute) => {

        let res = axios.get(`${process.env.NEXT_PUBLIC_API_ROOT}${apiRoute}`)
        .then((res) => {

            console.log(res)

            setState(res)
    
            return res

        }).catch(function (error) {
            // handle error
            console.log(error);
          })
       

    }


    return [state,call]

}   
import { useEffect, useState } from "react"

export const useSearch = (value, delay = 400) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=> {
        const handler = setTimeout(()=>{
            setDebounceValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    },[value, delay])

    return debounceValue
}
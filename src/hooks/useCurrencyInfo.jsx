import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // let api = 'https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=e0ae8b0f63c8ef003df8'
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo;
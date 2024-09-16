import { useState } from 'react'
import {InputBox} from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(Math.round(amount * currencyInfo[to]))
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-[#233142] font-mono"
       
    >
        <div className="w-full bg-red">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-[#455d7a]">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            className='bg-[#e3e3e3] text-xl'
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 text-2xl -translate-y-1/2 border-2 border-white rounded-md bg-[#f95959] text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={Math.round(convertedAmount)}
                            currencyOptions={options}
                            onCurrencyChange={(currency) =>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            className='bg-[#e3e3e3] text-xl'
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#f95959] text-white px-4 py-3 rounded-lg text-2xl">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
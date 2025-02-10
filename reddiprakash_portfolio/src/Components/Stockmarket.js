import React from 'react'
import { useEffect, useState } from 'react'

export default function Stockmarket() {

    const[state, setState]=useState('')


    const useEffect=(e)=>{

    const response =fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=AF61SORKC6L4VVD4`)
    }

  return (
    <div>

        <>
        
        </>
      
    </div>
  )
}



import React, { useEffect, useState } from 'react';

export default function CoinGecko() {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
            .then(res => res.json())
            .then(json => {
                setState(json);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching CoinGecko:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className=''>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                state.length ? (
                    <div>
                        <div className='row d-flex align-items-center justify-content-center my-4'> 
                        {state.map(coin => (
                            
                            <div className=' col-12 card m-2 bg-warning p-3 d-flex justify-content-center align-items-center text-center'  key={coin.id} style={{width:'200px', height:'250px'}}>
                                <h2>{coin.name}</h2>
                                <img src={coin.image} alt={coin.name} style={{width:'50px', height:'50px'}}/>
                                <p>Current Price: ${coin.current_price}</p>
                            </div>
                        )) }
                        </div>
                    </div>
                ) : (
                    <h2>Error loading CoinGecko data</h2>
                )
            )}
        </div>
    );
}

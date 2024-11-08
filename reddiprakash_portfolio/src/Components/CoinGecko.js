// import React from 'react'
// import { useEffect, useState } from 'react'

// export default function CoinGecko() {
//     const [state, setState] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
//             .then(res => res.json())
//             .then(json => {
//                 setState(json);
//                 setLoading(false)
//             })
//             .catch(error => {
//                 console.error("error fetching CoinGecko:", error);
//                 setLoading(false);
//             });

//     }, []);

//     // if (loading) {
//     //     return <h2>Loading...</h2>;
//     // }

//     // if (!state) {
//     //     return <h2>Error loading CoinGecko data</h2>
//     // }
//     return (
//         <>
//             {loading ? (<h3>Loading...acfceasc</h3>


//             ) : (
//                 state.length ? (
//                 <>

//                     <div>
//                         {state.name}
//                     </div>


//                 </>
                
//          ): (<h2>jhbfvqefvfavh</h2>))}

//         </>
//     )
// }




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
        <>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                state.length ? (
                    <div>
                        <div className='row d-flex align-items-center'> 
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
        </>
    );
}

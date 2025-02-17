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

import './CoinGecko.css';

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
                        <div className='row d-flex align-items-center mx-auto justify-content-center py-5'> 
                            <div className='row d-flex justify-content-center mb-4'>
                                <input 
                                type='text'
                                className='form-control text-end col-4' style={{width:300}}
                                placeholder='search the coins...'

                                />
                                <button 
                                type='buttton'
                                className='col-4 btn btn-outline-success my-2 mx-4'
                                style={{width:100}}
                                >
                                    search coins
                                </button>
                                
                            </div>
                        {state.map(coin => (
                            
                            <div className=' col-12 card m-2 bg-info p-3 d-flex justify-content-center align-items-center text-center'  key={coin.id} style={{width:'200px', height:'250px'}}>
                                <h2>{coin.name}</h2>
                                
                                <img src={coin.image} alt={coin.name} style={{width:'50px', height:'50px'}}/>
                                <p className='text-light'>Current Price: ${coin.current_price}</p>
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

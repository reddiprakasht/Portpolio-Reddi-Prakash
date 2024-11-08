// import { useState, useEffect } from "react";

// export default function WeatherApp() {
//     const [state, setState] = useState(null); // Initialize as null
//     const [loading, setLoading] = useState(true); // Loading state
//     const [city, setCity] = useState('');

//     const cityChange = (e) => {
//         setCity(e.target.value);
//     };

//     useEffect(() => {
//         if (!city) return;

//         const fetchWeather = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4267305efe1b170c86abbf770694d16`);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`); // Check for response status
//                 }

//                 const json = await response.json();
//                 setState(json);
//             } catch (error) {
//                 console.error('Error fetching weather data:', error);
//                 setState(null);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         const handler = setTimeout(() => {
//             fetchWeather();
//         }, 500);
//         return () => clearTimeout(handler);
//     }, [city]);



//     if (loading) {
//         return <h2>Loading...</h2>; // Show loading message
//     }

//     // Ensure state and state.main exist before accessing properties
//     if (!state || !state.main) {
//         return <h2>Error loading weather data</h2>;
//     }

//     return (
//         <>
//             <div className="row text-center d-flex align-items-center ">
//                 <div className="d-flex">
//                     <h1 className="card-title p-3 text-start">The World of Weather</h1>
//                     <input
//                         type="text"
//                         className="form-control m-3"
//                         value={city}
//                         onChange={cityChange}
//                         placeholder="Search the weather by city name"
//                     />
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-warning text-light p-3">Temp.<br /> {state.main.temp} K</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-info text-light p-3">Min Temp.<br /> {state.main.temp_min} K</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-danger text-light p-3">Max Temp.<br /> {state.main.temp_max} K</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-danger text-light p-3">Humidity.<br /> {state.main.humidity}%</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-danger text-light p-3">Sea Level.<br /> {state.main.sea_level} hPa</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-danger text-light p-3">Wind Speed<br /> {state.wind.speed} m/s</h2>
//                 </div>
//                 <div className="col-12 col-md-3">
//                     <h2 className="card bg-info text-light p-3">Description<br /> {state.weather[0].description}</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-danger text-light p-3">Sunrise<br /> {new Date(state.sys.sunrise * 1000).toLocaleTimeString()}</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-danger text-light p-3">Sunset<br /> {new Date(state.sys.sunset * 1000).toLocaleTimeString()}</h2>
//                 </div>
//                 <div className="col-12 col-md-3 ">
//                     <h2 className="card bg-danger text-light p-3">Timezone<br /> {state.timezone / 3600} hours</h2>
//                 </div>
//                 <div className="col-12 col-md-3">
//                     <h2 className="card bg-info text-light p-3">Longitude<br /> {state.coord.lon}</h2>
//                 </div>
//                 <div className="col-12 col-md-3">
//                     <h2 className="card bg-info text-light p-3">Latitude<br /> {state.coord.lat}</h2>
//                 </div>
//             </div>
//         </>
//     );
// }




import { useState, useEffect } from "react";

export default function WeatherApp() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const cityChange = (e) => {
        setCity(e.target.value);
    };

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            setErrorMessage(''); // Reset error message
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e4267305efe1b170c86abbf770694d16`);

                if (!response.ok) {
                    throw new Error(`City not found: ${city}`); // More specific error message
                }

                const json = await response.json();
                setState(json);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setErrorMessage(error.message); // Set error message for display
                setState(null);
            } finally {
                setLoading(false);
            }
        };

        const handler = setTimeout(() => {
            fetchWeather();
        }, 500);
        return () => clearTimeout(handler);
    }, [city]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (errorMessage) {
        return <h2>Error: {errorMessage}</h2>; // Display error message
    }

    if (!state || !state.main) {
        return <h2>Error loading weather data</h2>;
    }

    return (
        <>
            <div className="row text-center d-flex align-items-center ">
                <div className="d-flex">
                    <h1 className="card-title p-3 text-start">The World of Weather</h1>
                    <input
                        type="text"
                        className="form-control m-3"
                        value={city}
                        onChange={cityChange}
                        placeholder="Search the weather by city name"
                    />
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-warning text-light p-3">Temp.<br /> {state.main.temp} K</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-info text-light p-3">Min Temp.<br /> {state.main.temp_min} K</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-danger text-light p-3">Max Temp.<br /> {state.main.temp_max} K</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-danger text-light p-3">Humidity.<br /> {state.main.humidity}%</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-danger text-light p-3">Sea Level.<br /> {state.main.sea_level} hPa</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-danger text-light p-3">Wind Speed<br /> {state.wind.speed} m/s</h2>
                </div>
                <div className="col-12 col-md-3">
                    <h2 className="card bg-info text-light p-3">Description<br /> {state.weather[0].description}</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-danger text-light p-3">Sunrise<br /> {new Date(state.sys.sunrise * 1000).toLocaleTimeString()}</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-danger text-light p-3">Sunset<br /> {new Date(state.sys.sunset * 1000).toLocaleTimeString()}</h2>
                </div>
                <div className="col-12 col-md-3 ">
                    <h2 className="card bg-danger text-light p-3">Timezone<br /> {state.timezone / 3600} hours</h2>
                </div>
                <div className="col-12 col-md-3">
                    <h2 className="card bg-info text-light p-3">Longitude<br /> {state.coord.lon}</h2>
                </div>
                <div className="col-12 col-md-3">
                    <h2 className="card bg-info text-light p-3">Latitude<br /> {state.coord.lat}</h2>
                </div>
            </div>
        </>
    );
}

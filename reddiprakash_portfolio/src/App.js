
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CoinGecko from './Components/CoinGecko';
import Home from './Components/Home';
import StockMarket from './Components/Stockmarket';
import WeatherAppi from './Components/WeatherAppi';
function App() {
  return (
    <div className='container-fluid text-center'>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" href="#">link</Link>
                </li>
                <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            APi's
          </Link>
          <ul className="dropdown-menu">
            <li><Link to='/coin' className="dropdown-item">CoinGecko</Link></li>
            <li><Link to='/weather' className="dropdown-item">Weather</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="stock">Something else here</Link></li>
          </ul>
        </li>
                {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
              </ul>
              {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>

        <div className=''>
          <div className='row'>

            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/weather' element={<WeatherAppi/>}></Route>
              <Route path='/coin' element={<CoinGecko/>}></Route>
              <Route path='/stock' element={<StockMarket/>}></Route>
            </Routes>

          </div>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;

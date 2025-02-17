
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CoinGecko from './Components/CoinGecko';
import SampleForm from './Components/Form';
import HomePage from './Components/Homepage';
import Services from './Components/Services';
import StockMarket from './Components/Stockmarket';
import Weather from './Components/Weather';
 function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link> */}
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link" href="#">link</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>
                <li>
                  <Link to="/Services" className="nav-link">Services</Link>
                </li>
                <li>
                  <Link to="/Contact" className="nav-link">Contact Us</Link>
                </li>
                <li>
                  <Link to="/form" className="nav-link">Form</Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    APi's
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to='/coin' className="dropdown-item">CoinGecko</Link></li>
                    <li><Link to='/weather' className="dropdown-item">Weather</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="stock">Something else here</Link></li>
                  </ul>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li> */}
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>



              <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/weather' element={<Weather/>}></Route>
                <Route path='/coin' element={<CoinGecko />}></Route>
                <Route path='/stock' element={<StockMarket />}></Route>
                <Route path='/form' element={<SampleForm />}></Route>
                <Route path='/Services' element={<Services />}></Route>
              </Routes>
            </div>
          </div>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;

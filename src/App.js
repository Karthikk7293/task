import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingScreen from './pages/LandingScreen';
import SingleProductScreen from './pages/SingleProductScreen'
import ErrorScreen from './pages/ErrorScreen'
import CartScreen from './pages/CartScreen'
import Header from './components/header/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main py-5'>
        <Routes>
          <Route path='/' element={<LandingScreen />} />
          <Route path='/single-product/:productId' element={<SingleProductScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='*' element={<ErrorScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

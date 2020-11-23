import { Route, Routes } from 'react-router-dom';
import './App.css';
//Import Components
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';
import ProductIndex from './components/ProductIndex';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="product" element={<Product />}>
          <Route path="/" element={<ProductIndex />}></Route>
          <Route path=":productId" element={<ProductDetail />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes> 
    </div>
  );
}

export default App;

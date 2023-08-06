import Ctaogories from './Pages/Ctaogories';
import CustService from './Pages/CustService';
import NewsLetter from './Pages/NewsLetter';
import Signin from './Pages/Signin';
import Favourites from './Pages/Favourites';
import ShoppingBag from './Pages/ShoppingBag';
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from './Components/Layout';
 
function App() {
  
  return (
  <Layout>                     
    <Routes>
        <Route path="/Products" element={<Ctaogories />} />
        <Route path="/CustomerService" element={<CustService/>} />
        <Route path="/NewsLetter" element={<NewsLetter/>} />
        <Route path="/SignIn" element={<Signin/>} />
        <Route path="/Fav" element={<Favourites/>} />
        <Route path="/Cart" element={<ShoppingBag/>} />
        
    </Routes>
  
  </Layout>
  )
}

export default App;

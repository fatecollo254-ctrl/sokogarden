import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Mpesapayment from './components/Mpesapayment';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App = () =>{
  return(
    <BrowserRouter>
    {/* navigation goes here */}
    <nav className='text-center'>
     <Link to="/" className='btn btn-success m-1'>Get products</Link>
     <Link to="/signup" className='btn btn-success m-1'>Signup</Link>
     <Link to="/signin" className='btn btn-success m-1'>Signin</Link>
     <Link to="/addproducts" className='btn btn-success m-1'>Addproducts</Link>
     
     
     

   </nav>
   {/* Routes goes here */}
    <Routes>
        <Route path="/" element={<Getproducts />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addproducts" element={<Addproducts />} />
        <Route path="/Mpesapayment" element={<Mpesapayment />} />


    </Routes>
    </BrowserRouter>
  )
}
export default App

























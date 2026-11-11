import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import Carousel from './Carousel'

const Getproducts = () => {
  // define 3 states for getting products
  const[loading, setLoading] = useState("")
  const[products, setProducts] = useState([])
  const[error, setError] = useState("")
  let navigate = useNavigate()
  
  // function to get products 
  const fetchallproducts = async () =>{
    setLoading("Fetching products.....")
    try {
      const response = await axios.get("https://collinsmodcom.alwaysdata.net/getproducts")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
      
    }
  }
  // call the function 
  useEffect(()=>{
    fetchallproducts()
  }, [])
  console.log(products)
const imagepath = "https://collinsmodcom.alwaysdata.net/static/images/"
  return (
    <div className='container-fluid bg-dark'>
      {/* carousel goes here  */}
      <Carousel/>
<section className='row'>
<h1 className='text-success text-center'>Available products</h1>
{products.map(singleproduct=>(
  <div className='col-md-3 mb-2'>
   <div className="card shadow h-100 ">
    <img src={imagepath +singleproduct.product_photo} alt="" height={240} />
    <div className="card-body">
      <h4>{singleproduct.product_name}</h4>
      <p>{singleproduct.product_description}</p>
      <span className='badge bg-primary'>{singleproduct.product_category}</span><br />
      <b className='text-danger'>ksh {singleproduct.product_cost}</b>
      <button className='btn btn-success w-100' onClick={() => navigate("/Mpesapayment",{state:{singleproduct}})}>Purchase now</button>
    </div>
   </div>

  
  </div>
))}
</section>
    </div>
  )
}

export default Getproducts
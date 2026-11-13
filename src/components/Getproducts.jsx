import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import Carousel from './Carousel'

const Getproducts = () => {
  // define 3 states for getting products
  const[loading, setLoading] = useState("")
  const[products, setProducts] = useState([])
  const[error, setError] = useState("")
  const [search, setSearch] = useState ("")
  // which category button is currently selected
 const [selectedCategory, setSelectedCategory] = useState("All")
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
  // unique list of categories, e.g. ["Shoes", "Phones", "Shirts"]
const  categories = [...new Set(products.map((item) => item.product_category))]
  const filteredProducts = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) &&
  (selectedCategory === "All" || item.product_category === selectedCategory) )


const imagepath = "https://collinsmodcom.alwaysdata.net/static/images/"
  return (
    <div className='container-fluid bg-dark'>
      {/* carousel goes here  */}
      <Carousel/>
<section className='row'>
<h1 className='text-success text-center'>Available products</h1>
{/* Search box */}
 <div className="row justify-content-center mb-3">
 <div className="col-md-6">
  {/* Category buttons */}
 <div className="row justify-content-center mb-4">
 <div className="col-md-6 text-center">
 <button
 className={selectedCategory === "All" ? "btn btn-info m-1" : "btn btn-outline-info m-1"}
 onClick={() => setSelectedCategory("All")}
 
 >
 All
 </button>
 {categories.map((cat) => (
 <button
 key={cat}
className={selectedCategory === "All" ? "btn btn-info m-1" : "btn btn-outline-info m-1"}
 
 onClick={() => setSelectedCategory(cat)}
 >
 {cat}
 </button>
 ))}
 </div>
 </div>

 <input
 type="text"
 className="form-control"
 placeholder="Search products..."
 value={search}
 onChange={(e) => setSearch(e.target.value)}
 />
  </div>
 </div>
 

{filteredProducts.map(singleproduct=>(
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
{filteredProducts.length === 0 && ( 
<p className='text-center text-danger'>No products found</p>  
)}
</section>
    </div>
  )
}

export default Getproducts
import axios from 'axios'
import React,{useState} from 'react'




const Addproducts = () => {
  // declare your states here
  const [productname, setProductname] = useState("");
  const [productdescription, setProductdescription] = useState(""); 
  const [productcategory, setProductcategory] = useState("");
  const [productcost, setProductcost] = useState(""); 
  const [productphoto, setProductphoto] = useState(""); 



   // declare 3 states for posting data
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [Error, setError] = useState("")

   // function to addproduct 
  const addproductfunction = async (e) =>{
   e.preventDefault()
   setLoading("Please wait....")

   //  create digital envelope
  const envelope = new FormData()
    envelope.append("product_name", productname)
    envelope.append("product_description", productdescription)
    envelope.append("product_category", productcategory)
    envelope.append("product_cost", productcost)
    envelope.append("product_photo", productphoto)

    

    try {
    const response = await axios.post("https://collinsmodcom.alwaysdata.net/addproduct" , envelope)
    setSuccess(response.data.message)
    setLoading("")
    } catch (error) {
    setError(error.message)
    setLoading("")
  }

  }
   
    


  return (
    <div className="justify-content-center row">
      <div className="col-md-6 p-4 card shadow">
        <h1 className="text-dark text-center">Upload products👤</h1>
       
       
       <h1 className="text=-info"> {loading} </h1>
       <h1 className="text-success">{success} </h1>
       <h1 className="text-danger">{Error} </h1>
        <form action="" onSubmit={addproductfunction}>
        {/* product name goes here */}
        <input type="text" required className='form-control' placeholder="🏷️enter product name" onChange={(e) => setProductname(e.target.value)} /><br />
        
        {/* describe product goes here */}
        <textarea name="" id="" required className='form-control' placeholder="📦Describe your product" onChange={(e) => setProductdescription(e.target.value)}></textarea><br />
        
        {/* product category goes here */}
        <input type="text" required className='form-control' placeholder="🛒enter product category" onChange={(e) => setProductcategory(e.target.value)} /><br />
        
        {/* enter product cost goes here */}
        <input type="text" required className='form-control' placeholder="💰enter product cost" onChange={(e) => setProductcost(e.target.value)} /><br />
        
        <h5 className="text-secondary">Browse/Upload Product Image</h5>
        <input type="file" placeholder="📁Choose file No file chosen🚫" onChange={(e) => setProductphoto(e.target.files[0])} /><br />
         <button type="submit" className="btn btn-success w-100">Upload Product👤👤</button>

        </form>
      </div>
    </div>
  );

}





export default Addproducts;


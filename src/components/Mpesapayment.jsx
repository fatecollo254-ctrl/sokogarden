
import axios from 'axios'
import React, {useState} from 'react'
import {useLocation} from "react-router-dom"

const Mpesapayment = () => {
    const {singleproduct} = useLocation().state || {}
const imagepath = "https://collinsmodcom.alwaysdata.net/static/images/"

// declare 3 states for posting data 
const [loading, setLoading] = useState("")
const [success, setSuccess] = useState("")
const [error, setError] = useState("")

const [phone, setPhone] = useState("")


// function for mpesa payment 
const handlesubmit = async (e) =>{
e.preventDefault()
setLoading("Please wait....")
// create digital empty envelope 
const envelope = new FormData()
envelope.append("phone", phone)
envelope.append("amount", singleproduct.product_cost)
try {
  const response = await axios.post("https://collinsmodcom.alwaysdata.net/mpesa_payment", envelope)
  setSuccess(response.data.message)
  setLoading("")
} catch (error) {
  setError(error.message)
  setLoading("")
}
} 

  return (
    <section className='justify-content-center row'>
       <div className='col-md-6 p-4 card shadow'>
        <img src={imagepath +singleproduct.product_photo} height={300} width={500}/>
        <h5>{singleproduct.product_name}</h5>
        <p>{singleproduct.product_description}</p><br />
    <b className='text-warning'> ksh {singleproduct.product_cost}</b>
    <br /> 

    <button className='btn btn-success text-light w-100'>{singleproduct.product_category}</button><br />
      {/* bind the states here  */}
     <h1 className="text-info"> {loading} </h1>
       <h1 className="text-success">{success} </h1>
       <h1 className="text-danger">{error} </h1>
    <form action="" onSubmit={handlesubmit}>
        <input type="number" className='form-control' placeholder='Enter phone 254XXXXXXXXX' onChange={(e)=>setPhone(e.target.value)}/>
        <br />

        <button type='submit' className='btn btn-primary text-dark w-100'>Make payment</button>
    </form>
    

       </div>
    </section>
  )
}

export default Mpesapayment

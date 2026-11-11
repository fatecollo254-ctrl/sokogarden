import axios from 'axios'
import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

const Signin = () => {
  const[email, setEmail] = useState("")
   const[password, setPassword] = useState("")
   
   let navigate = useNavigate()
  //  declare 3 states for posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // function to signin 
  const signinfunction = async (e) =>{
   e.preventDefault()
   setLoading("Please wait....")

  //  create digital envelope
  const envelope = new FormData()
    envelope.append("email", email)
    envelope.append("password", password)
    try {
      const response = await axios.post("https://collinsmodcom.alwaysdata.net/signin" , envelope)
      setSuccess(response.data.message)
      setLoading("")
        // if login suuccessful redirect user to homepage(get products)
      if (response.data.user){
   // means login success 
      navigate("/")
      }
     
    } catch (error) {
    
      setError(error.message)
      setLoading("")
    }

  }


  
  return (

    <div className="justify-content-center row">
    <div className="col-md-6 p-4 card shadow ">
        <h1 className="text-secondary text-center">Signin 👤</h1>
        {/* bind the variables here */}
        <h1 className='text-warning'> {loading}</h1>
        <h1 className='text-success'> {success}</h1>
        <h1 className='text-danger'> {error}</h1>
        
        
        <form action="" onSubmit={signinfunction}>
        {/* email goes here */}
         <input type="email" required className='form-control' placeholder="📩enter email" onChange={(e) => setEmail(e.target.value)}/><br />
        {/* password goes here */}
        <input type="password" required className='form-control' placeholder="🔑enter password"  onChange={(e) => setPassword(e.target.value)}/><br />
        
         
         <button className="btn btn-primary w-100">Signin👤👤</button>
        </form>
        

        </div>

    </div>
  )
}

export default Signin
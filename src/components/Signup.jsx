import axios from "axios"
import{useState} from "react"
const Signup = () =>{
  // declare your states here
  const[username , setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[phone, setPhone] = useState("")
  // declare 3 states for posting data
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [Error, setError] = useState("")

  // Function to post data
  const handlesubmit =async (e)=>{
   e.preventDefault()
   setLoading("Please wait.....")
  //  create empty digital envelop
  const formdata = new FormData()
  formdata.append("username", username)
  formdata.append("email", email)
  formdata.append("phone", phone)
  formdata.append("password", password)
  formdata.append("role", "user")
  try {
    const response = await axios.post("https://collinsmodcom.alwaysdata.net/signup" , formdata)
    setSuccess(response.data.message)
    setLoading("")
    
  } catch (error) {
    setError("Something went wrong")
    setLoading("")
  }

  }
  
  return(
    <div className="justify-content-center row">
      <div className="col-md-6 p-4 card shadow">
        <h1 className="text-secondary text-center">Signup 👤</h1>
        {/* bind the variables here */}
       <h1 className="text=-info"> {loading} </h1>
       <h1 className="text-success">{success} </h1>
       <h1 className="text-danger">{Error} </h1>

        <form action="" onSubmit={handlesubmit}>

        {/* username goes here */}
        <input type="text" required className="form-control" placeholder="👤enter username"  onChange={(e) => setUsername(e.target.value)}/><br />
         {/* email goes here */}
         <input type="text" required className="form-control" placeholder="📤enter email" onChange={(e) => setEmail(e.target.value)}/><br />
         {/* password goes here */}
         <input type="password" required className="form-control" placeholder="🔑enter password"  onChange={(e) => setPassword(e.target.value)}/><br />
         {/* phone goes here */}
         <input type="text" required className="form-control" placeholder="📱enter phone" onChange={(e) => setPhone(e.target.value)}/><br />
         <button type="submit" className="btn btn-primary w-100">Signup👤👤</button>
        </form>
         <h1></h1>
      </div>
    </div>
  )
}
export default Signup
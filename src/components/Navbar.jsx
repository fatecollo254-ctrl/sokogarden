import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-success mb-1 sticky-top">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">
    <img src="/images/image.png" alt="" width={90} />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link text- active" aria-current="page" href="/">Home</Link>
        <Link class="nav-link" href="/addproducts">Add products</Link>
        <Link class="nav-link" href="/signin">Signin</Link>
        <Link  class="nav-link" href="/signup">Signup</Link>

        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
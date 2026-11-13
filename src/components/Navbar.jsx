import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-success mb-1 sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img src="/images/image.png" alt="" width={90} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text- active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/addproducts">Add products</a>
        <a class="nav-link" href="/signin">Signin</a>
        <a class="nav-link" href="/signup">Signup</a>
        <a class="nav-link" href="/Videos" className='nav-link' >Videos</a>


        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
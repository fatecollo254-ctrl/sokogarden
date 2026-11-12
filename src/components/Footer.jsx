import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5'>
    <section className="row bg-success p-4">
        <div className="col-md-4">
            <h2 className='text-white'>About us</h2>
            <p>We are passionate about bringing you premium streetwear that blends style, comfort and confidence. Our collection is inspired by modern fashion and individuality, helping you express yourself through every fit. Wear your style. Own your identity.</p>
        </div>
        <div className="col-md-4">
            <h2 className='text-white'>Contact us</h2>
            <input type="email" className="form-control" placeholder='Enter Email Address' /><br />
            <textarea name="" id="" className="form-control" placeholder='Leave a comment'></textarea> <br />
            <button className='btn btn-dark w-100'>Send comment</button>
        </div>
        <div className="col-md-4">
            <h2 className='text-white'>Stay Connected</h2>
            <a href="https://facebook.com">
                <img src="/images/fb.png" height={100} width={100} alt="" />
            </a>
            <a href='https://instagram.com'>
                <img src="/images/instagram.jpeg" width={100} alt="" />
             </a>
            <a href='https://x.com'>
              
                <img src="/images/x.png" width={100} alt="" />
             </a>
            



    
        </div>
        

    </section>
    <footer className='bg-white pg-3 text-center'>
        <b className='text-dark'>Developed by Collo @2026</b>
    </footer>
    </div>
  )
}

export default Footer
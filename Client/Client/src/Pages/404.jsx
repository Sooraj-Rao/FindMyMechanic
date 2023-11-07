import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='  text-center my-52'> 
      <h1 className=' text-4xl my-10 font-Poppins2'>The Page you are looking for is Not Found</h1>
      <Link to={'/'}>
      <button className=' p-3'>Go to Home</button>
      </Link>
    </div>
  )
}

export default NotFound
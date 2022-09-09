import React from 'react'
import { Link } from 'react-router-dom'

export const unitNavigation = ({name}) => {
  return (
    <div className="row justify-content-between my-5">
    <div className="col-8">
      <h4 className='d-inline'>
      الوحدة {name}/ 
      </h4>
      <Link to="#" className='nav-link d-inline text-primary small me-2'>كل الدروس</Link>
    </div>
  </div>
  )
}


export default unitNavigation
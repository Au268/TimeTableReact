import React from 'react'
import { Link } from 'react-router-dom';
const Notregistered = () => {
  return (
     <p className="text-center text-sm text-gray-600 mt-4">
          Not registered yet?
          <Link to="/login/newcr" className="text-[var(--primary-600)] hover:underline font-medium">  Sign up</Link>
        </p>
  )
}

export default Notregistered;
import React from 'react'
import { Link } from 'react-router-dom'
const Registered = () => {
  return (
    <p class="text-center text-sm text-gray-600 mt-4">
        Already registered?
        <Link to="/login/cr" class="text-[var(--primary-600)] hover:underline font-medium">Sign in</Link>
    </p>
  )
}

export default Registered
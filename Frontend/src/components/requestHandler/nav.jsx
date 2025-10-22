import React from 'react'

const Nav = () => {
  return (
    <nav className="bg-[var(--primary-600)] text-white px-4 py-3 flex justify-between items-center shadow-md relative">
      <span className="font-semibold text-lg">Admin – SE Timetable</span>

      <button id="menuBtn" className="sm:hidden focus:outline-none p-2">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>

      <div className="hidden sm:flex gap-4">
        <a href="/dashboard">
          <button className="border border-[var(--primary-600)] bg-[var(--primary-50)] text-[var(--primary-600)] px-4 py-2 rounded-md font-medium
          hover:bg-[var(--primary-200)] hover:text-[var(--primary-700)] hover:border-[var(--primary-700)]
          transition-colors duration-200">
            Go Back to Dashboard
          </button>
        </a>
      </div>

      <div id="drawer" className="absolute top-full right-0 w-48 bg-white text-[var(--primary-600)] shadow-md rounded-md mt-1 p-2 hidden flex-col gap-2 z-50">
        <a href="/dashboard">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-[var(--primary-50)]">
            Go Back to Dashboard
          </button>
        </a>
      </div>
    </nav>

  )
}

export default Nav;
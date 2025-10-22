import React from 'react'

const Header = () => {
  return (
    <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md px-4 py-3 mb-6"
      >
        <div className="flex items-center gap-10">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Pending Requests
          </h2>
          <span
            className="bg-[var(--primary-600)] text-white text-xs sm:text-sm px-2 py-1 rounded-full"
          >
            {/* <%= typeof(pendingRequests)!=="undefined"?pendingRequests.length:0 %>  */}
            Pending
          </span>

          <span
            className="bg-[var(--danger-600)] text-white text-xs sm:text-sm px-2 py-1 rounded-full"
          >
            {/* <%= typeof(pendingRequests)!=="undefined"?pendingRequests.length:0 %>  */}
            Pending
          </span>
        </div>

         <div className="relative flex items-center gap-1 sm:gap-2 flex-shrink-0"></div>
        <div className="relative w-full sm:w-64">
        <input
        id="searchInput"
          type="text"
          placeholder="Search by name or roll no..."
          className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] transition"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>
      </div>


      </div>
  )
}

export default Header
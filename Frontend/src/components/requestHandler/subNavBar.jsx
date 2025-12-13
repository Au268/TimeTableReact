import React from 'react'

const SubNavBar = () => {
    return (
        <div
            id="dropdownMenu"
            className="flex justify-end text-right bg-white border-b border-gray-200 shadow-sm z-[9999] py-2 px-4 gap-6"
        >
            <a href="#" className="text-sm text-gray-700 hover:text-[var(--primary-600)]">View Approved Requests</a>
            <a href="#" className="text-sm text-gray-700 hover:text-[var(--primary-600)]">View Rejected Requests</a>
        </div>
    )
}

export default SubNavBar
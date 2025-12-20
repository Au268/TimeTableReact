import React from 'react'

const RejectedRequests = () => {
    return (

        <div className="max-w-6xl mx-auto mt-6 px-4">
            <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md px-4 py-3 mb-6"
            >
                <div className="flex items-center gap-10">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                        Rejected Requests
                    </h2>
                    <span
                        className="bg-[var(--primary-600)] text-white text-xs sm:text-sm px-2 py-1 rounded-full"
                    >
                        {/* <%= typeof(pendingRequests)!=="undefined"?pendingRequests.length:0 %>  */}
                        Rejected
                    </span>

                    <span
                        className="bg-[var(--danger-600)] text-white text-xs sm:text-sm px-2 py-1 rounded-full"
                    >
                        {/* <%= typeof(pendingRequests)!=="undefined"?pendingRequests.length:0 %>  */}
                        Rejected
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

            <section
                className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
            >

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="bg-[var(--primary-600)] text-white">
                            <tr>
                                <th className="px-6 py-3 font-medium whitespace-nowrap">Name</th>
                                <th className="px-6 py-3 font-medium whitespace-nowrap">Email</th>
                                <th className="px-6 py-3 font-medium whitespace-nowrap">
                                    Roll Number
                                </th>
                                <th className="px-6 py-3 font-medium whitespace-nowrap">Semester</th>
                                <th className="px-6 py-3 font-medium whitespace-nowrap">Type</th>
                                <th
                                    className="px-6 py-3 font-medium text-center whitespace-nowrap"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <% if(typeof(pendingRequests)!=="undefined" && pendingRequests.length>0){  %>
                  <% pendingRequests.forEach((req)=>{ %> */}
                            <tr className="border-b hover:bg-[var(--primary-50)] transition">
                                <td className="px-6 py-4">
                                    {/* <%= req.name %> */}
                                </td>
                                <td className="px-6 py-4">
                                    {/* <%= req.email %> */}
                                </td>
                                <td className="px-6 py-4">
                                    {/* <%= (req.rollno).toUpperCase() %> */}
                                </td>
                                <td className="px-6 py-4">
                                    {/* <%= req.semester %> */}
                                </td>
                                <td className="px-6 py-4">
                                    {/* <%= req.type=="R"?"Regular":req.type=="SS1"?"Self Support-I":req.type == "SS2"?"Self Support-II":"" %> */}
                                </td>
                                <td className="px-6 py-4 text-center space-x-2 flex flex-row justify-center">

                                    <form action="/requestHandler/approve" method="post" onsubmit="return showApproveConfirmation()">
                                        <input type="hidden" value="<%= req._id%>" name="id" />
                                        <button
                                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition text-sm" type="submit"
                                        >
                                            Approve
                                        </button>
                                    </form>

                                    <form action="/requestHandler/delete" method="post" onsubmit="return showDeleteConfirmation()">
                                        <input type="hidden"
                                            //   value="<%= req._id%>"
                                            name="id" />
                                        <button
                                            className="bg-gradient-to-r from-[var(--danger-500)] to-[var(--danger-600)] hover:from-[var(--danger-600)] hover:to-[var(--danger-500)] text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition text-sm"
                                        >
                                            Reject
                                        </button>
                                    </form>



                                </td>
                            </tr>

                            {/* <% }) %> */}

                            {/* <% }else{ %> */}
                            <tr>
                                <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                                    No pending approval requests at the moment!
                                </td>
                            </tr>
                            {/* <% } %> */}





                        </tbody>
                    </table>
                </div>


                <div className="card-view grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    {/* <% if(typeof(pendingRequests)!=="undefined" && pendingRequests.length>0){  %> */}
                    {/* <% pendingRequests.forEach((req)=>{ %> */}

                    <div
                        className="border border-gray-200 rounded-xl shadow-sm p-4 bg-white hover:shadow-md hover:scale-[1.01] transition-all"
                    >
                        <div className="text-sm sm:text-base">
                            <p><span className="font-semibold">Name:</span>
                                {/* <%= req.name %> */}
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>
                                {/* <%= req.email %> */}
                            </p>
                            <p><span className="font-semibold">Roll No:</span>
                                {/* <%= req.rollno %> */}
                            </p>
                            <p><span className="font-semibold">Semester:</span>
                                {/* <%= req.semester %> */}
                            </p>
                            <p><span className="font-semibold">Type:</span>
                                {/* <%= req.type=="R"?"Regular":req.type=="SS1"?"Self Support-I":req.type == "SS2"?"Self Support-II":"" %> */}
                            </p>
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                            <form action="/requestHandler/approve" method="post" onsubmit="return showApproveConfirmation()">
                                <input type="hidden" value="<%= req._id%>" name="id" />
                                <button
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition text-xs sm:text-sm"
                                >
                                    Approve
                                </button>
                            </form>
                            <form action="/requestHandler/delete" method="post" onsubmit="return showDeleteConfirmation()" />
                            <input type="hidden"
                                // value="<%= req._id%>" 
                                name="id" />
                            <button
                                className="bg-gradient-to-r from-[var(--danger-500)] to-[var(--danger-600)] hover:from-[var(--danger-600)] hover:to-[var(--danger-500)] text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition text-xs sm:text-sm"
                            >
                                Reject
                            </button>
                            {/* </form> */}
                        </div>
                    </div>
                    {/* <% }) %> */}

                    {/* <% }else{ %> */}
                    <div className="flex items-center justify-center min-h-[70vh] px-4 md1010:hidden">
                        <div
                            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-center max-w-xs w-full transform transition duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 mx-auto text-gray-400 mb-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="text-gray-700 font-semibold text-base mb-1">
                                No Pending Requests
                            </h3>
                            <p className="text-gray-500 text-sm">
                                You're all caught up! There are no pending approval requests right now.
                            </p>
                        </div>
                    </div>
                    {/* <% } %> */}


                </div>

            </section>

        </div>
    )

}

export default RejectedRequests;
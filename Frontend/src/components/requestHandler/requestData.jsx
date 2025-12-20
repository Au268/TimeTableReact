import React,{useState,useEffect} from 'react'
import {toast, ToastContainer } from 'react-toastify'
import approveRequest from '../../api/approveRequest';
import declineRequest from '../../api/declineRequest';
const RequestData = ({data}) => {
    const [requests, setRequests] = useState([]);
    useEffect(()=>{
        const unapproved = filteredData.filter(item => item.approved === false)
        setRequests(data)    
    },[data])


    async function approveReq(id){
        const userConfirmed = window.confirm("Are you sure you want to accept this request?");
        if(!userConfirmed){
        return
        }
    try {
        const result = await approveRequest(id);
        toast.success("Request accepted successfully!");
        
    } catch (err) {
        console.error("Approve failed:", err);
        toast.error("Failed to accept the request.")
    }
}

async function declineReq(id){
     const userConfirmed = window.confirm("Are you sure you want to decline this request?");
     if(!userConfirmed){
        return
     }
    try {
        const result = await declineRequest(id);
        toast.success("Request declined successfully!");
        
    } catch (err) {
        console.error("Declined failed:", err);
        toast.error("Failed to decline the request.")
    }
}

const [search, setSearch] = useState("");
    const filteredData = requests.filter((cr) =>
        cr.name.toLowerCase().includes(search.toLowerCase()) ||
        cr.rollno?.toString().toLowerCase().includes(search.toLowerCase())
    );
    return (
        
        <div className="max-w-6xl mx-auto mt-6 px-4">
             <ToastContainer 
                       position="top-center"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover={false}
                      toastStyle={{ width: '400px' }}
                  />
            <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md px-4 py-3 mb-6"
            >
                <div className="flex items-center gap-10">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                        Pending Requests
                    </h2>
                    {requests.length>0?
                        <span className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-full flex flex-row gap-x-1">
                            <span>{requests.length}</span>
                        Pending
                    </span>
                    :
                    <span className="bg-[var(--primary-600)] text-white text-xs sm:text-sm px-2 py-1 rounded-full flex flex-row gap-x-1">
                        <span>0</span>
                        Pending
                    </span>
                    }
                    
                </div>

                <div className="relative flex items-center gap-1 sm:gap-2 flex-shrink-0"></div>
                <div className="relative w-full sm:w-64">
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Search by name or roll no..."
                        className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] transition"
                        onChange={(e) => setSearch(e.target.value)}
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
                            {filteredData.length > 0 ? (
                                filteredData.map((cr) => (
                                    <tr key={cr._id} className="border-b hover:bg-[var(--primary-50)] transition">
                                    <td className="px-6 py-4">{cr.name}</td>
                                    <td className="px-6 py-4">{cr.email}</td>
                                    <td className="px-6 py-4">{(cr.rollno || '').toUpperCase()}</td>
                                    <td className="px-6 py-4">{cr.semester}</td>
                                    <td className="px-6 py-4">
                                        {cr.type === "R"
                                        ? 'Regular'
                                        : cr.type === "SS1"
                                        ? "Self Support-I"
                                        : cr.type === "SS2"
                                        ? "Self Support-II"
                                        : "None"}
                                    </td>
                                    <td className="px-6 py-4 text-center flex justify-center space-x-2">
                                        {!cr.approved && (
                                        <>
                                            <button
                                            onClick={() => approveReq(cr._id)}
                                            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition text-sm"
                                            >
                                            Approve
                                            </button>
                                            <button
                                            onClick={()=>declineReq(cr._id)}
                                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition text-sm"
                                            >
                                            Reject
                                            </button>
                                        </>
                                        )}
                                        {cr.approved && (
                                            <>
                                            <button
                                            onClick={()=>declineReq(cr._id)}
                                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm transition text-sm"
                                            >
                                            Reject
                                            </button>
                                            </>
                                        )}
                                    </td>
                                    </tr>
                                ))
                                ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-4">
                                    No unapproved records found
                                    </td>
                                </tr>
                                )}
                            
                            





                        </tbody>
                    </table>
                </div>


                

            </section>

        </div>
    )
}

export default RequestData;
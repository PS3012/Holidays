import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci"
import { IoIosHelpCircleOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { PiUserCircleDashedFill } from "react-icons/pi"
import { VscSettings } from "react-icons/vsc"

function AdminHeader() {
     const navigate = useNavigate()
     const [show, setShow] = useState(false)
     const handleLogOut = () => {
          localStorage.removeItem("crystalAdmin")
          navigate("/admin/login")
     }
     return (
          <>

               <header className="flex justify-between items-center mb-4">
                    <div className="rounded-full flex gap-2 items-center max-w-xl flex-auto bg-white py-3 px-4">
                         <CiSearch size={20} />
                         <input type="text" placeholder="Search in Dashboard" className="flex-auto p-0" />
                         <VscSettings size={20} />
                    </div>
                    <div className="flex gap-2 items-center">
                         <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-slate-300">
                              <IoIosHelpCircleOutline size={25} />
                         </div>
                         <div className="w-8 h-8 grid place-items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-slate-300">
                              <IoSettingsOutline size={20} />
                         </div>
                         <div className="w-8 h-8 relative inline-block text-left">
                              <button className="rounded-full overflow-hidden" onClick={() => setShow(prev => !prev)}>
                                   <PiUserCircleDashedFill size={32} />
                              </button>
                              {show &&
                                   <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                             <div className="block px-4 py-2 text-sm font-semibold text-gray-700 border-b">My Account</div>
                                             <a href="/" target="_blank" className="block px-4 py-2 text-sm font-semibold text-gray-700 border-b">Go to Website</a>
                                             <div onClick={handleLogOut} className="block px-4 py-2 text-sm font-semibold cursor-pointer text-red-700">Log Out</div>
                                        </div>
                                   </div>
                              }
                         </div>
                    </div>
               </header>

          </>
     )
}

export default AdminHeader

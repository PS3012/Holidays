import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FaBars, FaHeadset } from "react-icons/fa"
import { BiSolidPhoneCall, BiSolidUserCircle } from "react-icons/bi"
import { MdOutlineClose } from "react-icons/md"
import { headerMenu } from "../StaticData"
import { logoutUser } from "../slices/userSlice"
import HeaderDropdown from "./HeaderDropdown"
import { IoMdLogOut } from "react-icons/io"

function Header() {
     const dispatch = useDispatch()
     const { user } = useSelector(state => state.user)
     const { data: contactDetails } = useSelector(state => state.contactDetails)
     const { origin } = location
     const [isActiveMobileSlide, setIsActiveMobileSlide] = useState(false)
     return (
          <>

               <header className={`bg-white shadow-lg z-10 relative`}>
                    <div className="px-4 sm:px-6 md:px-8 py-3 inner-grid flex items-center justify-between gap-2 border-b">
                         <Link to="/" className="block logo">
                              <img src={`${origin}/images/logo.svg`} alt="Logo" />
                         </Link>
                         <div className={`mid-links block top-0 right-0 bottom-0 fixed lg:static bg-white lg:bg-transparent p-3 lg:p-0 ${isActiveMobileSlide ? "active" : ""}`}>
                              <div className="flex lg:hidden justify-between items-center gap-3 mb-3 border-b pb-3 border-slate-300">
                                   <Link to="/" className="block logo">
                                        <img src={`${origin}/images/logo.svg`} alt="Logo" />
                                   </Link>
                                   <div className="text-2xl" onClick={() => setIsActiveMobileSlide(false)}><MdOutlineClose /></div>
                              </div>
                              <div className="grid lg:flex lg:items-center lg:justify-center gap-3">
                                   {headerMenu?.map((menu, key) => menu.status === "active" &&
                                        <Link key={key}
                                             to={menu.identifier ? `/${menu.identifier}` : "/"}
                                             onClick={() => setIsActiveMobileSlide(false)}
                                             className={`relative font-semibold uppercase text-sm link-item`}
                                        >{menu.title}</Link>
                                   )}
                                   {user.accessToken &&
                                        <HeaderDropdown title={user.displayName ?? "User"}>
                                             <Link to="#" className="flex gap-1 items-center hover:text-theme">
                                                  <BiSolidUserCircle size={20} /> <span>My Account</span>
                                             </Link>
                                             <div onClick={() => dispatch(logoutUser())} className="flex gap-1 items-center cursor-pointer hover:text-theme">
                                                  <IoMdLogOut size={20} /> <span>Logout</span>
                                             </div>
                                        </HeaderDropdown>
                                   }
                              </div>
                         </div>
                         <div className="right-links">
                              <div className={`flex justify-end items-center gap-2 md:gap-3 lg:gap-5`}>
                                   {contactDetails.supportNumber &&
                                        <a href={`tel:${contactDetails.supportNumber.split(" ").join("")}`} className="flex items-center gap-2">
                                             <div className={`rounded-full icon grid place-items-center bg-blue-400 text-white`}><FaHeadset /></div>
                                             <span className="font-medium text-sm hidden lg:block">Customer Support</span>
                                        </a>
                                   }
                                   {contactDetails.bookingQueryNumber &&
                                        <a href={`tel:${contactDetails.bookingQueryNumber.split(" ").join("")}`} className="flex items-center gap-2">
                                             <div className="rounded-full bg-theme text-white icon grid place-items-center"><BiSolidPhoneCall /></div>
                                             <div className="hidden lg:block">
                                                  <div className="text-xs">Book Online or Call Us</div>
                                                  <div className="text-lg font-bold">{contactDetails.bookingQueryNumber}</div>
                                             </div>
                                        </a>
                                   }
                                   <div className={`rounded-full icon place-items-center grid lg:hidden bg-black text-white`} onClick={() => setIsActiveMobileSlide(true)}><FaBars /></div>
                              </div>
                         </div>
                    </div>
               </header>

          </>
     )
}

export default Header

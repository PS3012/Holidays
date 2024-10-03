import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBars, FaHeadset } from "react-icons/fa"
import { BiSolidPhoneCall, BiSolidUserCircle } from "react-icons/bi"
import { appName, originURL } from "../recoil"
import { MdOutlineClose } from "react-icons/md"
import { headerMenu } from "../StaticData"

function Header() {
     const location = useLocation()
     const navigate = useNavigate()
     const [origin] = useRecoilState(originURL)
     const [prefixAppName] = useRecoilState(appName)
     const [isActiveMobileSlide, setIsActiveMobileSlide] = useState(false)
     const [scroll, setScroll] = useState(false)
     useEffect(() => {
          if (location.pathname === `${prefixAppName}/`) {
               navigate(prefixAppName)
          }
          setScroll(location.pathname !== `${prefixAppName}`)
          const handleScroll = () => {
               setScroll(location.pathname === `${prefixAppName}` ? window.scrollY > 50 : true)
          }
          window.addEventListener("scroll", handleScroll)
          return () => {
               window.removeEventListener("scroll", handleScroll)
          }
     }, [location, navigate, prefixAppName])
     return (
          <>

               <header className={`${location.pathname === `${prefixAppName}` ? "fixed top-0 left-0 right-0 z-50" : ""} ${scroll ? "bg-white shadow-lg" : ""}`}>
                    <div className="px-4 sm:px-6 md:px-8 py-3 inner-grid flex items-center justify-between gap-2 border-b">
                         <Link to={`${prefixAppName}`} className="block logo">
                              <img src={`${origin}/images/logo.svg`} alt="Logo" className={scroll ? "" : "white-filter"} />
                         </Link>
                         <div className={`mid-links block top-0 right-0 bottom-0 fixed lg:static bg-white lg:bg-transparent p-3 lg:p-0 ${isActiveMobileSlide ? "active" : ""}`}>
                              <div className="flex lg:hidden justify-between items-center gap-3 mb-3 border-b pb-3 border-slate-300">
                                   <Link to={`${prefixAppName}`} className="block logo">
                                        <img src={`${origin}/images/logo.svg`} alt="Logo" />
                                   </Link>
                                   <div className="text-2xl" onClick={() => setIsActiveMobileSlide(false)}><MdOutlineClose /></div>
                              </div>
                              <div className="grid lg:flex lg:items-center lg:justify-center gap-3">
                                   {headerMenu?.map((menu, key) => menu.status === "active" &&
                                        <Link key={key}
                                             to={menu.identifier ? `${prefixAppName}/${menu.identifier}` : prefixAppName}
                                             onClick={() => setIsActiveMobileSlide(false)}
                                             className={`relative font-semibold uppercase text-sm link-item ${scroll ? "" : "lg:text-white"}`}
                                        >{menu.title}</Link>
                                   )}
                                   <Link to={`${prefixAppName}/login`} onClick={() => setIsActiveMobileSlide(false)}
                                        className={`relative font-semibold uppercase text-sm link-item flex items-center gap-1 ${scroll ? "" : "lg:text-white"}`}
                                   ><BiSolidUserCircle className="text-lg" /> <span>Login / Register</span></Link>
                              </div>
                         </div>
                         <div className="right-links">
                              <div className={`flex justify-end items-center gap-2 md:gap-3 lg:gap-5 ${scroll ? "" : "text-white"}`}>
                                   <Link to={`${prefixAppName}/`} className="flex items-center gap-2">
                                        <div className={`rounded-full icon grid place-items-center ${scroll ? "bg-blue-400 text-white" : "bg-white text-black"}`}><FaHeadset /></div>
                                        <span className="font-medium text-sm hidden lg:block">Customer Support</span>
                                   </Link>
                                   <Link to={`${prefixAppName}/`} className="flex items-center gap-2">
                                        <div className="rounded-full bg-theme text-white icon grid place-items-center"><BiSolidPhoneCall /></div>
                                        <div className="hidden lg:block">
                                             <div className="text-xs">Book Online or Call Us</div>
                                             <div className="text-lg font-bold">0207 612 0500</div>
                                        </div>
                                   </Link>
                                   <div className={`rounded-full icon place-items-center grid lg:hidden bg-black text-white`} onClick={() => setIsActiveMobileSlide(true)}><FaBars /></div>
                              </div>
                         </div>
                    </div>
               </header>

          </>
     )
}

export default Header

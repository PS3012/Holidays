import { Link } from "react-router-dom"
import { BiSolidPlaneAlt } from "react-icons/bi"
import { GiCheckMark } from "react-icons/gi"
import { IoCarSportOutline, IoLogoWhatsapp } from "react-icons/io5"
import { LiaHotelSolid } from "react-icons/lia"
import { PiMapPinSimpleAreaFill } from "react-icons/pi"
import { useRecoilState } from "recoil"
import { appName, originURL } from "../recoil"

function PackageCardType3(_props) {
     const [origin] = useRecoilState(originURL)
     const [prefixAppName] = useRecoilState(appName)
     return (
          <>

               <div className="package-card-type-2 rounded relative overflow-hidden shadow-lg">
                    <div className="image">
                         <img src={`${origin}${_props.image}`} alt="Package" className="w-full object-cover" />
                    </div>
                    <div className="details p-3 font-medium">
                         <div className="text-lime-700 text-sm uppercase mb-1">{_props.destination} - 7N/8D</div>
                         <div className="main-title text-xl font-bold mb-2">Twin Island Oasis - Krabi & Phuket Escapade</div>
                         <div className="text-sm text-slate-500 mb-2">Phuket (3N) - Krabi (4N)</div>
                         <div className="flex flex-wrap gap-2 mb-3">
                              <div className="border-2 border-black px-2 py-1 rounded text-xs flex items-center gap-1">
                                   <span className="text-base"><BiSolidPlaneAlt /></span>
                                   <span>Round Trip Flights</span>
                              </div>
                              <div className="border-2 border-black px-2 py-1 rounded text-xs flex items-center gap-1">
                                   <span className="text-base"><LiaHotelSolid /></span>
                                   <span>Five Star Hotels</span>
                              </div>
                              <div className="border-2 border-black px-2 py-1 rounded text-xs flex items-center gap-1">
                                   <span className="text-base"><IoCarSportOutline /></span>
                                   <span>Transfers</span>
                              </div>
                              <div className="border-2 border-black px-2 py-1 rounded text-xs flex items-center gap-1">
                                   <span className="text-base"><PiMapPinSimpleAreaFill /></span>
                                   <span>Excursion</span>
                              </div>
                         </div>
                         <div className="grid grid-cols-5 gap-2 items-end">
                              <div className="col-span-3">
                                   <div className="mb-neg-1">
                                        <div className="inline-block bg-black px-3 py-1 rounded text-xs text-white">Package Includes</div>
                                   </div>
                                   <div className="bg-slate-200 px-2 pb-2 pt-4 rounded max-h-20 overflow-y-auto vertical-scrollbar-theme">
                                        <div className="flex gap-2 items-center text-xs mb-1">
                                             <span><GiCheckMark /></span>
                                             <span>Island Tour</span>
                                        </div>
                                        <div className="flex gap-2 items-center text-xs mb-1">
                                             <span><GiCheckMark /></span>
                                             <span>Krabi City Tour</span>
                                        </div>
                                        <div className="flex gap-2 items-center text-xs">
                                             <span><GiCheckMark /></span>
                                             <span>Combo Package</span>
                                        </div>
                                        <div className="flex gap-2 items-center text-xs mb-1">
                                             <span><GiCheckMark /></span>
                                             <span>Island Tour</span>
                                        </div>
                                        <div className="flex gap-2 items-center text-xs mb-1">
                                             <span><GiCheckMark /></span>
                                             <span>Krabi City Tour</span>
                                        </div>
                                        <div className="flex gap-2 items-center text-xs">
                                             <span><GiCheckMark /></span>
                                             <span>Combo Package</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="text-right col-span-2">
                                   <div className="font-bold mb-1">INR 10,000</div>
                                   <div className="text-xs text-slate-500 mb-1">Avg. Price / Person</div>
                                   <div className="text-xs font-semibold mb-2">Total INR 20,000</div>
                                   <div className="flex items-center justify-end gap-2">
                                        <Link to={`${prefixAppName}`}>
                                             <IoLogoWhatsapp className="w-7 h-7 block leading-7 text-center rounded-full text-white bg-green-600" />
                                        </Link>
                                        <Link to={`${prefixAppName}/holidays-details`} className={`bg-theme hover:bg-black inline-block text-sm text-white rounded py-1 px-3`}>View Deal</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default PackageCardType3

import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { FcCalendar } from "react-icons/fc"
import { useRecoilState } from "recoil"
import { appName, originURL } from "../recoil"

function PackageCardType2(_props) {
     const [origin] = useRecoilState(originURL)
     const [prefixAppName] = useRecoilState(appName)
     return (
          <>

               <div className="package-card-type-2 rounded relative overflow-hidden shadow-lg">
                    <div className="image">
                         <img src={`${origin}${_props.image}`} alt="Package" className="w-full object-cover" />
                    </div>
                    <div className="details p-3 font-medium">
                         <div className="border-b border-slate-300 pb-3 mb-3">
                              <div className="main-title text-xl font-bold mb-2">Taj Exotica Resort and Spa, {_props.destination}</div>
                              <div className="flex items-center text-xs gap-1 mb-2">
                                   <FaStar className="text-amber-400" />
                                   <FaStar className="text-amber-400" />
                                   <FaStar className="text-amber-400" />
                                   <FaStar className="text-amber-400" />
                                   <FaStar />
                              </div>
                              <div>South Male Atoll</div>
                         </div>
                         <div>
                              <div className="flex items-center gap-2 mb-1">
                                   <FcCalendar className="text-xl" />
                                   <span className="text-sm text-slate-500">May 25 - May 28</span>
                              </div>
                              <div className="text-2xl font-bold mb-1">INR 10,000</div>
                              <div className="flex justify-between items-end">
                                   <div>
                                        <div className="text-sm text-slate-500">Avg. Price / Person</div>
                                        <div className="text-sm font-semibold">Total INR 20,000</div>
                                   </div>
                                   <Link to={`${prefixAppName}/holidays-details`} className="bg-theme hover:bg-black text-sm text-white px-3 py-1 rounded shadow">View Deal</Link>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default PackageCardType2

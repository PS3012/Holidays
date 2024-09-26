import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from "react-router-dom"
import { TbMapSearch } from "react-icons/tb"
import { defaultCountries } from '../StaticData'
import HolidayInputBox from './HolidayInputBox'
import toast from 'react-hot-toast'
import { useRecoilState } from 'recoil'
import { appName } from '../recoil'

function HolidaySearchForm(_props) {
     const navigate = useNavigate()
     const [prefixAppName] = useRecoilState(appName)
     const [loading, setLoading] = useState(false)
     const [destination, setDestination] = useState(_props.selectedDestination || "")
     const formVariants = {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } }
     }
     const linkVariants = {
          hidden: { opacity: 0, y: '-50px' },
          visible: (index) => ({
               opacity: 1,
               y: 0,
               transition: {
                    type: 'spring',
                    stiffness: 500,
                    delay: 0.5 + index * 0.6,
               },
          }),
     };
     const handleShowHolidays = (e) => {
          e.preventDefault()
          if (destination && destination.trim() !== "") {
               setLoading(true)
               setTimeout(() => {
                    setLoading(false)
                    navigate(`${prefixAppName}/tour-destination/${destination.split(" ").join("-").toLowerCase()}`)
               }, 2000);
          } else {
               toast.error("Enter the destination first.")
          }
     }
     return (
          <>

               <motion.div
                    variants={formVariants}
                    initial="hidden" animate="visible"
                    className={`max-w-4xl max-auto w-full rounded border bg-white/[.20] ${_props.formType === "sm" ? "p-2" : "p-4"}`}
               >
                    <form action="" className={`holiday-form grid gap-2 ${_props.showSuggestions ? "mb-3" : ""}`}>
                         <HolidayInputBox formType={_props.formType} setDestination={setDestination} selectedDestination={_props.selectedDestination} />
                         <button
                              className={`bg-theme hover:bg-black text-white rounded flex justify-center items-center gap-2 disabled:opacity-20 ${_props.formType === "sm" ? "p-1" : "px-2 py-3"}`}
                              onClick={handleShowHolidays} disabled={loading}
                         >
                              <span>Show Holidays</span><TbMapSearch className="text-lg" />
                         </button>
                    </form>
                    {_props.showSuggestions &&
                         <div className="flex flex-wrap gap-3">
                              {defaultCountries.map((country, index) => (
                                   <motion.div
                                        key={index}
                                        variants={linkVariants}
                                        custom={index + 1}
                                   >
                                        <Link to={`${prefixAppName}/tour-destination/${country.split(" ").join("-").toLowerCase()}`} className="border text-sm text-white px-2 py-1 rounded hover:bg-theme hover:border-theme">{country}</Link>
                                   </motion.div>
                              ))}
                         </div>
                    }
               </motion.div>

          </>
     )
}

export default HolidaySearchForm

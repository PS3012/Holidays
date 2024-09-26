import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSlider } from "react-icons/bi";
import { TbMapSearch } from "react-icons/tb"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { internationalPackages } from "../StaticData";
import HolidaySearchForm from "../components/HolidaySearchForm";
import PackageCardType3 from "../components/PackageCardType3";
import { capitalizeWords } from "../components/otherFunctions";
import { useParams } from "react-router-dom";
import PackageCardType3Skeleton from "../components/PackageCardType3Skeleton";

function HolidayResults() {
     const { destination } = useParams()
     const animatedComponents = makeAnimated();
     const [showForm, setShowForm] = useState(false)
     const [showFilter, setShowFilter] = useState(false)
     const [holidayList, setHolidayList] = useState([])
     useEffect(() => {
          setTimeout(() => {
               setHolidayList(internationalPackages)
          }, 3000)
     }, [])
     const handleSearchForm = (val) => {
          setShowForm(val)
          setShowFilter(false)
     }
     const handleShowFilter = (val) => {
          setShowFilter(val)
          setShowForm(false)
     }
     const nightOptions = [{ value: '3', label: '3 Nights' }, { value: '4', label: '4 Nights' }, { value: '5', label: '5 Nights' }]
     const selectVariants = {
          hidden: { opacity: 0, y: '-50px' },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    type: 'spring',
                    stiffness: 500,
                    delay: 0.5,
               },
          },
     };
     return (
          <>

               <div id="holiday-results-page" className="max-w-7xl mx-auto px-4 py-6">
                    <AnimatePresence>
                         {showForm &&
                              <div className={`flex justify-center mb-5`}>
                                   <HolidaySearchForm formType="sm" showSuggestions={false} selectedDestination={capitalizeWords(destination)} />
                              </div>
                         }
                    </AnimatePresence>
                    <div className="sm:flex sm:justify-between sm:items-center mb-5 gap-3">
                         <div className="mb-3 sm:mb-0">
                              <div className="font-semibold text-2xl">{capitalizeWords(destination)}</div>
                              <div className="font-medium text-slate-600">{internationalPackages.length} Packages Found</div>
                         </div>
                         <div className="flex gap-2">
                              {showForm ?
                                   <div
                                        className="bg-theme hover:bg-black text-white rounded flex justify-center items-center gap-2 px-4 py-2 cursor-pointer transition-all"
                                        onClick={() => setShowForm(false)}
                                   >
                                        <span>Cancel</span><TbMapSearch className="text-lg" />
                                   </div>
                                   :
                                   <>
                                        <div
                                             className="bg-theme hover:bg-black text-white rounded flex justify-center items-center gap-2 px-4 py-2 cursor-pointer transition-all"
                                             onClick={() => handleSearchForm(true)}
                                        >
                                             <span>Modify Search</span><TbMapSearch className="text-lg" />
                                        </div>
                                        <div
                                             className="hover:bg-theme hover:text-white border-2 border-theme rounded flex justify-center items-center gap-2 px-4 py-2 cursor-pointer transition-all"
                                             onClick={() => handleShowFilter(!showFilter)}
                                        >
                                             {showFilter ? "Close" :
                                                  <><span>Filters</span><BiSlider className="text-lg" /></>
                                             }
                                        </div>
                                   </>
                              }
                         </div>
                    </div>
                    <AnimatePresence>
                         {showFilter &&
                              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                                   <motion.div variants={selectVariants} initial="hidden" animate="visible" exit="hidden">
                                        <Select isMulti options={nightOptions} components={animatedComponents} placeholder="Number of Nights" />
                                   </motion.div>
                                   <motion.div variants={selectVariants} initial="hidden" animate="visible" exit="hidden">
                                        <Select isMulti options={nightOptions} components={animatedComponents} placeholder="Category" />
                                   </motion.div>
                                   <motion.div variants={selectVariants} initial="hidden" animate="visible" exit="hidden">
                                        <Select isMulti options={nightOptions} components={animatedComponents} placeholder="Destination" />
                                   </motion.div>
                                   <motion.div variants={selectVariants} initial="hidden" animate="visible" exit="hidden">
                                        <Select isMulti options={nightOptions} components={animatedComponents} placeholder="Price" />
                                   </motion.div>
                              </div>
                         }
                    </AnimatePresence>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {holidayList && holidayList.length > 0 ?
                              holidayList.map((pack, index) =>
                                   <div key={index}>
                                        <PackageCardType3 image={pack.image} destination={pack.destination} />
                                   </div>
                              )
                              :
                              Array.from({ length: 3 }).map((_, index) =>
                                   <div key={index}>
                                        <PackageCardType3Skeleton />
                                   </div>
                              )
                         }
                    </div>
               </div>

          </>
     )
}

export default HolidayResults

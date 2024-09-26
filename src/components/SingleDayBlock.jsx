import { motion, AnimatePresence } from "framer-motion"
import { GiHotMeal } from "react-icons/gi"
import { GoTelescope } from "react-icons/go"
import { IoChevronDown, IoChevronUp } from "react-icons/io5"
import { useRecoilState } from "recoil"
import { appName } from "../recoil"
import { useState } from "react"
import SightSeeingModal from "./SightSeeingModal"

function SingleDayBlock(_props) {
     const [prefixAppName] = useRecoilState(appName)
     const [sightModal, setSightModal] = useState({})
     const words = _props.overview.split(' ');
     const pillVariants = {
          hidden: { opacity: 0, y: '-50px' },
          visible: (index) => ({
               opacity: 1,
               y: 0,
               transition: {
                    type: 'spring',
                    stiffness: 500,
                    delay: 0.5 + index * 0.1,
               },
          }),
     };
     return (
          <>

               <div
                    key={_props.index}
                    className={`day-block border border-slate-300 rounded-lg transition-shadow shadow hover:shadow-lg`}
               >
                    <div className="day-head flex justify-between items-center gap-2 cursor-pointer font-semibold text-lg border-b border-slate-300 p-2 md:p-3" onClick={_props.handleDayClick}>
                         <div className="flex items-center gap-2 md:gap-4">
                              <div className="bg-blue-500 text-white py-1 rounded whitespace-nowrap text-sm md:text-base px-3 md:px-4">Day {_props.index + 1}</div>
                              <div className="text-sm md:text-base">{_props.title}</div>
                         </div>
                         <div>{_props.activeDay === _props.index ? <IoChevronUp /> : <IoChevronDown />}</div>
                    </div>
                    <AnimatePresence>
                         {_props.activeDay === _props.index &&
                              <div className="p-3 overflow-hidden">
                                   <div className="grid top-grid items-start gap-3 mb-4">
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
                                             <img src={`${prefixAppName}${_props.image}`} alt={`Day ${_props.index + 1}`} className="w-full aspect-square object-cover rounded shadow-lg" />
                                        </motion.div>
                                        <div className="flex flex-wrap items-center">
                                             {words.map((word, wordIndex) => (
                                                  <div key={wordIndex} className="flex">
                                                       {word.split('').map((char, charIndex) => (
                                                            <motion.span
                                                                 key={charIndex}
                                                                 initial={{ opacity: 0 }}
                                                                 animate={{ opacity: 1 }}
                                                                 transition={{ delay: (wordIndex + charIndex * 0.05) * 0.05 }}
                                                            >
                                                                 {char}
                                                            </motion.span>
                                                       ))}
                                                       <motion.span
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: (wordIndex + 1) * 0.05 }}
                                                       >
                                                            &nbsp;
                                                       </motion.span>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                                   {_props.sightseeing && _props.sightseeing.length > 0 &&
                                        <div className="mb-4">
                                             <div className="text-xl font-semibold mb-2">Sightseeing Included</div>
                                             <div className="flex flex-wrap gap-2">
                                                  {_props.sightseeing.map((item, idx) =>
                                                       <motion.div key={idx} variants={pillVariants} initial="hidden" animate="visible" custom={idx}>
                                                            <div
                                                                 onClick={() => setSightModal({ data: item, isOpen: true })}
                                                                 className="cursor-pointer px-3 py-1 rounded text-sm transition-colors flex items-center gap-2 bg-slate-100 hover:bg-theme hover:text-white"
                                                            >
                                                                 <GoTelescope /> <span>{item.title}</span>
                                                            </div>
                                                       </motion.div>
                                                  )}
                                             </div>
                                        </div>
                                   }
                                   {_props.inclusions && _props.inclusions.length > 0 &&
                                        <div>
                                             <div className="text-xl font-semibold mb-2">Inclusions</div>
                                             <div className="flex flex-wrap gap-2">
                                                  {_props.inclusions.map((item, idx) =>
                                                       <motion.div key={idx}
                                                            variants={pillVariants} initial="hidden" animate="visible" custom={idx + 1}
                                                            className="px-3 py-1 rounded text-sm transition-colors flex items-center gap-2 bg-slate-100"
                                                       >
                                                            <GiHotMeal /><span>{item}</span>
                                                       </motion.div>
                                                  )}
                                             </div>
                                        </div>
                                   }
                              </div>
                         }
                    </AnimatePresence>
               </div>

               {sightModal.isOpen && <SightSeeingModal data={sightModal.data} onCloseModal={() => setSightModal({ isOpen: false })} />}

          </>
     )
}

export default SingleDayBlock

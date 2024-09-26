import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { GoChevronDown } from "react-icons/go"
import { useRecoilState } from "recoil"
import { appName } from "../recoil"

function HeaderDropdown(_props) {
     const [prefixAppName] = useRecoilState(appName)
     const [dropdown, setDropdown] = useState(false)
     const dropdownRef = useRef(null);

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (!dropdownRef.current || !dropdownRef.current.contains(event.target)) {
                    setDropdown(false);
               }
          };

          document.addEventListener("mousedown", handleClickOutside);
          return () => {
               document.removeEventListener("mousedown", handleClickOutside);
          };
     }, []);
     const dropDownVariants = {
          hidden: { opacity: 0, y: '-50px' },
          visible: {
               opacity: 1,
               y: 10,
               transition: {
                    type: 'spring',
                    stiffness: 500,
                    delay: 0.5,
               },
          },
     }
     return (
          <>

               <div className="dropdown relative">
                    <div
                         onClick={() => setDropdown(prev => !prev)}
                         className={`flex justify-between items-center gap-2 font-semibold uppercase text-sm cursor-pointer ${_props.scroll ? "" : "lg:text-white"}`}
                    >
                         <span className="relative link-item">Dropdown</span> <GoChevronDown className="text-base" />
                    </div>
                    <AnimatePresence>
                         {dropdown &&
                              <motion.div
                                   variants={dropDownVariants} initial="hidden" animate="visible" exit="hidden" ref={dropdownRef}
                                   className={`lg:absolute bg-white grid gap-1 px-3 py-2 drop-list border-t-4 border-theme font-medium text-sm w-full shadow mb-2 lg:mb-0`}
                              >
                                   <Link to={`${prefixAppName}/`} className="hover:text-theme">Link Item 1</Link>
                                   <Link to={`${prefixAppName}/`} className="hover:text-theme">Link Item 1</Link>
                                   <Link to={`${prefixAppName}/`} className="hover:text-theme">Link Item 1</Link>
                                   <Link to={`${prefixAppName}/`} className="hover:text-theme">Link Item 1</Link>
                              </motion.div>
                         }
                    </AnimatePresence>
               </div>

          </>
     )
}

export default HeaderDropdown

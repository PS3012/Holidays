import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GoChevronDown } from "react-icons/go"

function HeaderDropdown(_props) {
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
                         className={`flex justify-between items-center gap-2 font-semibold uppercase text-sm cursor-pointer`}
                    >
                         <span className="relative link-item">{_props.title}</span> <GoChevronDown className="text-base" />
                    </div>
                    <AnimatePresence>
                         {dropdown &&
                              <motion.div
                                   variants={dropDownVariants} initial="hidden" animate="visible" exit="hidden" ref={dropdownRef}
                                   className={`lg:absolute bg-white grid gap-2 px-3 py-2 drop-list border-t-4 border-theme font-medium text-sm w-full shadow mb-2 lg:mb-0`}
                              >
                                   {_props.children}
                              </motion.div>
                         }
                    </AnimatePresence>
               </div>

          </>
     )
}

export default HeaderDropdown

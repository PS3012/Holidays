import { useEffect, useRef, useState } from 'react'
import packagesJson from './JSON-Files/package_destinations.json'

function HolidayInputBox(_props) {
     const [query, setQuery] = useState(_props.selectedDestination || "")
     const [holidayList, setHolidayList] = useState([])
     const [activeItem, setActiveItem] = useState(0)
     const inputRef = useRef(null);
     useEffect(() => {
          const handleClickOutside = (event) => {
               if (!location.pathname.startsWith("/admin")) {
                    if (inputRef.current && !inputRef.current.contains(event.target)) {
                         setHolidayList([]);
                         setQuery("");
                    }
               }
          };
          document.addEventListener('mousedown', handleClickOutside);
          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
          };
     }, []);
     const handleQueryChange = (searchQuery) => {
          setActiveItem(0)
          setQuery(searchQuery)
          if (searchQuery.trim().length > 2) {
               const startsWithQuery = packagesJson.filter(item => item.label.toLowerCase().startsWith(searchQuery.toLowerCase()));
               const containsQuery = packagesJson.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()) && !startsWithQuery.includes(item));
               const filteredItems = [...startsWithQuery, ...containsQuery];
               setHolidayList(filteredItems)
          } else {
               setHolidayList([])
          }
     }
     const handleItemClick = (value) => {
          setQuery(value)
          _props.setDestination(value)
          setHolidayList([])
     }
     const handleKeyDown = (event) => {
          if (event.key === "Enter") {
               event.preventDefault()
               if (holidayList.length > 0) {
                    handleItemClick(holidayList[activeItem].value)
               }
          } else if (event.key === 'ArrowUp') {
               setActiveItem(prev => prev === 0 ? holidayList.length - 1 : prev - 1)
          } else if (event.key === 'ArrowDown') {
               setActiveItem(prev => prev === holidayList.length - 1 ? 0 : prev + 1)
          }
     }
     const handleInputFocus = () => {
          setQuery("")
     }
     return (
          <>

               <div className='relative' ref={inputRef}>
                    <input
                         type="text" value={query}
                         onFocusCapture={handleInputFocus}
                         onChange={(e) => handleQueryChange(e.target.value)}
                         onKeyDown={handleKeyDown}
                         className={`w-full rounded focus:outline-0 ${_props.inputClass ? _props.inputClass : ""} ${_props.formType === "sm" ? "px-3 py-1" : "px-5 py-3"}`}
                         placeholder="Where do you want to go?"
                    />
                    {holidayList && holidayList.length > 0 &&
                         <div className="absolute top-full left-0 w-full bg-white shadow-lg max-h-60 overflow-y-auto vertical-scrollbar-theme border-t z-20">
                              {holidayList.map((item, index) =>
                                   <div
                                        key={index}
                                        onMouseEnter={() => setActiveItem(index)}
                                        onClick={() => handleItemClick(item.value)}
                                        className={`px-3 py-1 cursor-pointer ${index === holidayList.length - 1 ? "" : "border-b border-slate-100"} ${activeItem == index ? "bg-red-200" : "hover:bg-slate-100"}`}
                                   >{item.label}</div>
                              )}
                         </div>
                    }
               </div>

          </>
     )
}

export default HolidayInputBox

import { IoHomeOutline } from "react-icons/io5"
import { MdChevronRight } from "react-icons/md"
import { Link } from "react-router-dom"

function BreadCrumb(_props) {
     return (
          <>

               <div className="bg-slate-100">
                    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center overflow-x-auto whitespace-nowrap font-medium text-gray-500">
                         <Link to="/" className="text-gray-600 hover:text-theme"><IoHomeOutline /></Link>
                         <span className="mx-5"><MdChevronRight /></span>
                         <div className="text-theme">{_props.pageName}</div>
                    </div>
               </div>

          </>
     )
}

export default BreadCrumb

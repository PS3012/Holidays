import { FaCanadianMapleLeaf, FaSuitcaseRolling } from "react-icons/fa"
import { GrSettingsOption } from "react-icons/gr"
import { IoNewspaperOutline } from "react-icons/io5"
import { MdOutlineContactPage } from "react-icons/md"
import { RiTreasureMapLine } from "react-icons/ri"
import { SiOpenstreetmap } from "react-icons/si"
import { VscDashboard } from "react-icons/vsc"
import { Link } from "react-router-dom"

function AdminSidebar() {
     const { origin } = location
     return (
          <>

               <div className="bg-slate-100 px-4 py-5 h-screen">
                    <div className="mb-6">
                         <img src={`${origin}/images/logo.svg`} alt="Crystal Travels" width="160" />
                    </div>
                    <div className="links mb-6">
                         <div className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <VscDashboard size={20} /> Dashboard
                         </div>
                         <Link to="/admin/manageHomeTours" className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <SiOpenstreetmap size={20} /> Manage Home Tours
                         </Link>
                         <Link to="/admin/themes" className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <RiTreasureMapLine size={20} /> Manage Themes
                         </Link>
                         <Link to="/admin/manageDefaultDestinations" className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <FaCanadianMapleLeaf size={20} /> Default Destinations
                         </Link>
                         <Link to="/admin/managePackages" className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <FaSuitcaseRolling size={20} /> Manage Packages
                         </Link>
                         <Link to="/admin/manageNewsletters" className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <IoNewspaperOutline size={20} /> Manage Newsletters
                         </Link>
                         <Link to="/admin/contactDetails" className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <MdOutlineContactPage size={20} /> Contact Details
                         </Link>
                         <Link to="/admin/settings" className="flex gap-2 items-center rounded-3xl py-2 px-4 font-medium cursor-pointer transition-colors duration-200 hover:bg-slate-200">
                              <GrSettingsOption size={20} /> Settings
                         </Link>
                    </div>
               </div>

          </>
     )
}

export default AdminSidebar

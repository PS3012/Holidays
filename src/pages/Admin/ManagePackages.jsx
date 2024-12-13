import { useState } from "react"
import { CiEdit, CiTrash } from "react-icons/ci"
import { Link } from "react-router-dom"

function ManagePackages() {
     const [packages, setPackages] = useState([])
     return (
          <div>
               <div className="flex justify-between gap-3 items-center mb-4 pb-4 border-b-2 border-black">
                    <div className="text-3xl text-theme font-bold">Packages</div>
                    <Link to="/admin/addPackage" className={`text-white rounded px-4 py-1 bg-theme hover:bg-black disabled:opacity-20`}>
                         Add Package
                    </Link>
               </div>
               {(packages && packages.length > 0) ?
                    <table className="w-full text-left table-auto min-w-max border-x border-t text-sm">
                         <thead>
                              <tr>
                                   <th className="px-3 py-2 bg-sky-100 border-b border-r">Sr. No.</th>
                                   <th className="px-3 py-2 bg-sky-100 border-b border-r">Title</th>
                                   <th className="px-3 py-2 bg-sky-100 border-b border-r">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              {packages.map((item, idx) =>
                                   <tr key={item.id}>
                                        <td className="px-3 py-2 border-b border-r">{idx + 1}</td>
                                        <td className="px-3 py-2 border-b border-r">{item.destination}</td>
                                        <td className="px-3 py-2 border-b">
                                             <div className="flex items-center gap-2">
                                                  <div className="cursor-pointer"><CiEdit size={15} className="text-green-500" /></div>
                                                  <div className="cursor-pointer">
                                                       <CiTrash size={15} className="text-red-500" />
                                                  </div>
                                             </div>
                                        </td>
                                   </tr>
                              )}
                         </tbody>
                    </table> :
                    <div className="text-xl font-semibold">No Destinations added yet!.</div>
               }
          </div>
     )
}

export default ManagePackages

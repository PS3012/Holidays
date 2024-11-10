import { Link } from "react-router-dom";
import { deleteDoc, doc } from 'firebase/firestore';
import toast from "react-hot-toast";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../config/firebase";
import { deleteSingleDestination } from "../../slices/defaultDestinationsSlice";

function ManageDefaultDestinations() {
     const dispatch = useDispatch()
     const { destinations } = useSelector(state => state.defaultDestinations)
     const deleteDestination = async (destinationId) => {
          try {
               const destinationRef = doc(db, 'defaultDestinations', destinationId);
               await deleteDoc(destinationRef);
               dispatch(deleteSingleDestination(destinationId))
               toast.success('Destination deleted successfully');
          } catch (err) {
               toast.error('Error deleting Destination: ');
               console.error(err)
          }
     };
     return (
          <>

               <div>
                    <div className="flex justify-between gap-3 items-center mb-4 pb-4 border-b-2 border-black">
                         <div className="text-3xl text-theme font-bold">Default Destinations</div>
                         {destinations && destinations.length < 5 &&
                              <Link to="/admin/addDefaultDestination" className={`text-white rounded px-4 py-1 bg-theme hover:bg-black disabled:opacity-20`}>
                                   Add Default Destination
                              </Link>
                         }
                    </div>
                    {(destinations && destinations.length > 0) ?
                         <table className="w-full text-left table-auto min-w-max border-x border-t text-sm">
                              <thead>
                                   <tr>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Sr. No.</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Title</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Actions</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {destinations.map((item, idx) =>
                                        <tr key={item.id}>
                                             <td className="px-3 py-2 border-b border-r">{idx + 1}</td>
                                             <td className="px-3 py-2 border-b border-r">{item.destination}</td>
                                             <td className="px-3 py-2 border-b">
                                                  <div className="flex items-center gap-2">
                                                       <div className="cursor-pointer"><CiEdit size={15} className="text-green-500" /></div>
                                                       <div className="cursor-pointer" onClick={() => deleteDestination(item.id)}>
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

          </>
     )
}

export default ManageDefaultDestinations

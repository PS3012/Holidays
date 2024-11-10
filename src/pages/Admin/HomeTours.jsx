import { Link } from "react-router-dom";
import { deleteDoc, doc } from 'firebase/firestore';
import toast from "react-hot-toast";
import { CiEdit, CiTrash } from "react-icons/ci";
import { db } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleHomeTour } from "../../slices/homeToursSlice";
import { formatPrice } from "../../components/OtherFunctions";

function HomeTours() {
     const dispatch = useDispatch()
     const { homeTours } = useSelector(state => state.homeTours)
     const currencyData = useSelector(state => state.currencyData)
     const deleteHomeTour = async (tourId) => {
          try {
               const tourRef = doc(db, 'homeTours', tourId);
               await deleteDoc(tourRef);
               dispatch(deleteSingleHomeTour(tourId))
               toast.success('Tour deleted successfully');
          } catch (err) {
               toast.error('Error deleting tour: ');
               console.error(err)
          }
     };
     return (
          <>

               <div>
                    <div className="flex justify-between gap-3 items-center mb-4 pb-4 border-b-2 border-black">
                         <div className="text-3xl text-theme font-bold">Manage Home Tours</div>
                         <Link to="/admin/addHomeTour" className={`text-white rounded px-4 py-1 bg-theme hover:bg-black disabled:opacity-20`}>
                              Add Home Tour
                         </Link>
                    </div>
                    {(homeTours && homeTours.length > 0) ?
                         <table className="w-full text-left table-auto min-w-max border-x border-t text-sm">
                              <thead>
                                   <tr>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Sr. No.</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Destination</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Category</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Starting Price</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Actions</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {homeTours.map((item, idx) =>
                                        <tr key={item.id}>
                                             <td className="px-3 py-2 border-b border-r">{idx + 1}</td>
                                             <td className="px-3 py-2 border-b border-r">{item.destination}</td>
                                             <td className="px-3 py-2 border-b border-r">{item.category}</td>
                                             <td className="px-3 py-2 border-b border-r">{formatPrice(currencyData, item.startingPrice)}</td>
                                             <td className="px-3 py-2 border-b">
                                                  <div className="flex items-center gap-2">
                                                       <div className="cursor-pointer"><CiEdit size={15} className="text-green-500" /></div>
                                                       <div className="cursor-pointer" onClick={() => deleteHomeTour(item.id)}>
                                                            <CiTrash size={15} className="text-red-500" />
                                                       </div>
                                                  </div>
                                             </td>
                                        </tr>
                                   )}
                              </tbody>
                         </table> :
                         <div className="text-xl font-semibold">No Tours added yet!.</div>
                    }
               </div>

          </>
     )
}

export default HomeTours

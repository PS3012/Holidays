import { Link } from "react-router-dom"
import { deleteDoc, doc } from 'firebase/firestore';
import { CiEdit, CiTrash } from "react-icons/ci";
import { db } from "../../config/firebase";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleTheme } from "../../slices/themeSlice";

function Themes() {
     const dispatch = useDispatch()
     const { themes } = useSelector(state => state.themes)
     const deleteTheme = async (themeId) => {
          try {
               const themeRef = doc(db, 'themes', themeId);
               await deleteDoc(themeRef);
               dispatch(deleteSingleTheme(themeId))
               toast.success('Theme deleted successfully');
          } catch (err) {
               toast.error('Error deleting theme: ');
               console.error(err)
          }
     };
     return (
          <>

               <div>
                    <div className="flex justify-between gap-3 items-center mb-4 pb-4 border-b-2 border-black">
                         <div className="text-3xl text-theme font-bold">Themes</div>
                         <Link to="/admin/addTheme" className={`text-white rounded px-4 py-1 bg-theme hover:bg-black disabled:opacity-20`}>
                              Add Theme
                         </Link>
                    </div>
                    {(themes && themes.length > 0) ?
                         <table className="w-full text-left table-auto min-w-max border-x border-t text-sm">
                              <thead>
                                   <tr>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Sr. No.</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Title</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Destinations</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b">Actions</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {themes.map((theme, idx) =>
                                        <tr key={theme.id}>
                                             <td className="px-3 py-2 border-b border-r">{idx + 1}</td>
                                             <td className="px-3 py-2 border-b border-r">{theme.title}</td>
                                             <td className="px-3 py-2 border-b border-r">{theme.destinations}</td>
                                             <td className="px-3 py-2 border-b">
                                                  <div className="flex items-center gap-2">
                                                       <div className="cursor-pointer"><CiEdit size={15} className="text-green-500" /></div>
                                                       <div className="cursor-pointer" onClick={() => deleteTheme(theme.id)}>
                                                            <CiTrash size={15} className="text-red-500" />
                                                       </div>
                                                  </div>
                                             </td>
                                        </tr>
                                   )}
                              </tbody>
                         </table> :
                         <div className="text-xl font-semibold">No Themes Found. Add some themes.</div>
                    }
               </div>

          </>
     )
}

export default Themes

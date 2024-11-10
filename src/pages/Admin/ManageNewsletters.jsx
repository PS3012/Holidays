import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../config/firebase";

function ManageNewsletters() {
     const [newsletters, setNewsletters] = useState([])
     useEffect(() => {
          const fetchNewsLetters = async () => {
               try {
                    const querySnapshot = await getDocs(collection(db, "newsletters"));
                    const responseData = querySnapshot.docs.map(doc => ({
                         id: doc.id,
                         ...doc.data(),
                    }));
                    setNewsletters(responseData)
               } catch (err) {
                    console.log(err)
               }
          }
          fetchNewsLetters()
     }, [])
     return (
          <>

               <div>
                    <div className="text-3xl text-theme font-bold mb-4 pb-4 border-b-2 border-black">Manage Newsletters</div>
                    {(newsletters && newsletters.length > 0) ?
                         <table className="w-full text-left table-auto min-w-max border-x border-t text-sm">
                              <thead>
                                   <tr>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">Sr. No.</th>
                                        <th className="px-3 py-2 bg-sky-100 border-b border-r">E-Mail</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {newsletters.map((item, idx) =>
                                        <tr key={item.id}>
                                             <td className="px-3 py-2 border-b border-r">{idx + 1}</td>
                                             <td className="px-3 py-2 border-b border-r">{item.email}</td>
                                        </tr>
                                   )}
                              </tbody>
                         </table> :
                         <div className="text-xl font-semibold">No Newsletters Subscription Found.</div>
                    }
               </div>

          </>
     )
}

export default ManageNewsletters

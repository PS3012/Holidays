import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../config/firebase";
import HolidayInputBox from "../../components/HolidayInputBox";
import { useDispatch } from "react-redux";
import { addSingleDestination } from "../../slices/defaultDestinationsSlice";

function AddDefaultDestination() {
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const [data, setData] = useState("")
     const [loading, setLoading] = useState(false)
     const handleAddDestination = async () => {
          if (!data || data.trim() === "") {
               toast.error("Select Destination!")
          } else {
               try {
                    setLoading(true)
                    const docRef = await addDoc(collection(db, 'defaultDestinations'), { destination: data });
                    dispatch(addSingleDestination({ destination: data, id: docRef.id }))
                    setLoading(false)
                    setData("")
                    toast.success("Destination added successfully!")
                    navigate("/admin/manageDefaultDestinations")
               } catch (err) {
                    toast.error("Error adding Destination!")
                    console.error(err);
               }
          }
     }
     return (
          <>

               <div>
                    <div className="text-3xl text-theme font-bold mb-4 pb-4 border-b-2 border-black">Add Default Destination</div>
                    <HolidayInputBox inputClass="border" setDestination={val => setData(val)} />
                    <button
                         onClick={handleAddDestination}
                         disabled={loading ? "disabled" : ""}
                         className={`text-white rounded px-2 py-1 w-full text-lg bg-theme mt-4 hover:bg-black disabled:opacity-20`}
                    >
                         {loading ? "Loading..." : "Add Destination"}
                    </button>
               </div>

          </>
     )
}

export default AddDefaultDestination

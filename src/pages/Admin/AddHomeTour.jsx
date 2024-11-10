import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../config/firebase";
import HolidayInputBox from "../../components/HolidayInputBox";
import SelectField from "../../components/DataFields/SelectField";
import FieldLabel from "../../components/DataFields/FieldLabel";
import InputField from "../../components/DataFields/InputField";
import { useDispatch } from "react-redux";
import { addSingleHomeTour } from "../../slices/homeToursSlice";

function AddHomeTour() {
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const [data, setData] = useState({})
     const [loading, setLoading] = useState(false)
     const updateTourDetails = (key, val) => {
          setData(prev => ({ ...prev, [key]: val }))
     }
     const handleAddHomeTour = async () => {
          if (!data.destination || data.destination.trim() === "") {
               toast.error("Select Destination!")
          } else if (!data.category || data.category.trim() === "") {
               toast.error("Select Category of Tour!")
          } else if (!data.startingPrice || data.startingPrice.trim() === "") {
               toast.error("Enter Starting Price of Tour!")
          } else {
               try {
                    setLoading(true)
                    const docRef = await addDoc(collection(db, 'homeTours'), data);
                    dispatch(addSingleHomeTour({ ...data, id: docRef.id }))
                    setLoading(false)
                    setData({})
                    toast.success("Tour added successfully!")
                    navigate("/admin/manageHomeTours")
               } catch (err) {
                    toast.error("Error adding Tour!")
                    console.error(err);
               }
          }
     }
     return (
          <>

               <div>
                    <div className="text-3xl text-theme font-bold mb-4 pb-4 border-b-2 border-black">Add Home Tour</div>
                    <FieldLabel label="Destination" required={true} />
                    <HolidayInputBox
                         formType="sm" inputClass="border"
                         selectedDestination={data.destination ?? ""}
                         setDestination={val => updateTourDetails("destination", val)}
                    />
                    <SelectField
                         value={data.category ?? ""}
                         updateValue={(val) => updateTourDetails("category", val)}
                         containerClass="mt-4 mb-4"
                         label="Tour Category"
                         required={true}
                         fieldType="sm"
                    >
                         <option value="">-- Select --</option>
                         <option value="Domestic">Domestic</option>
                         <option value="International">International</option>
                    </SelectField>
                    <InputField
                         value={data.startingPrice ?? ""}
                         updateValue={(val) => updateTourDetails("startingPrice", val)}
                         type="number"
                         label="Starting Price"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter Starting Price"
                    />
                    <button
                         onClick={handleAddHomeTour}
                         disabled={loading ? "disabled" : ""}
                         className={`text-white rounded px-2 py-1 w-full text-lg bg-theme mt-4 hover:bg-black disabled:opacity-20`}
                    >
                         {loading ? "Loading..." : "Add Tour"}
                    </button>
               </div>

          </>
     )
}

export default AddHomeTour

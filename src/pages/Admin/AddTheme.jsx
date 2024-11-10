import { useState } from "react"
import toast from "react-hot-toast"
import { collection, addDoc } from 'firebase/firestore';
import InputField from "../../components/DataFields/InputField"
import { db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSingleTheme } from "../../slices/themeSlice";

function AddTheme() {
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const initialData = { title: "", destinations: "" }
     const [data, setData] = useState(initialData)
     const [formErrors, setFormErrors] = useState({})
     const [loading, setLoading] = useState(false)
     const updateThemeDetails = (key, val) => {
          setFormErrors({})
          setData(prev => ({ ...prev, [key]: val }))
     }
     const handleAddTheme = async () => {
          if (!data.title || data.title.trim() === "") {
               toast.error("Enter Title of Theme.")
               setFormErrors({ title: true })
          } else if (!data.destinations || data.destinations.trim() === "") {
               toast.error("Enter No. of Destinations.")
               setFormErrors({ destinations: true })
          } else {
               try {
                    setLoading(true)
                    const docRef = await addDoc(collection(db, 'themes'), data);
                    dispatch(addSingleTheme({ ...data, id: docRef.id }))
                    setLoading(false)
                    setData(initialData)
                    toast.success("Theme added successfully!")
                    navigate("/admin/themes")
               } catch (err) {
                    toast.error("Error adding title!")
                    console.error('Error adding document: ', err);
               }
          }
     }
     return (
          <>

               <div>
                    <div className="text-3xl text-theme font-bold mb-4 pb-4 border-b-2 border-black">Add Theme</div>
                    <InputField
                         value={data.title ?? ""}
                         updateValue={(val) => updateThemeDetails("title", val)}
                         type="text"
                         label="Title"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter Title"
                         error={formErrors.title}
                         errorMessage="Please enter Title"
                    />
                    <InputField
                         value={data.destinations ?? ""}
                         updateValue={(val) => updateThemeDetails("destinations", val)}
                         type="number"
                         label="No. of Destinations"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter No. of Destinations"
                         error={formErrors.destinations}
                         errorMessage="Please enter No. of Destinations"
                    />
                    <button
                         onClick={handleAddTheme}
                         disabled={loading ? "disabled" : ""}
                         className={`text-white rounded px-2 py-1 w-full text-lg bg-theme hover:bg-black disabled:opacity-20`}
                    >
                         {loading ? "Loading..." : "Add Theme"}
                    </button>
               </div>

          </>
     )
}

export default AddTheme

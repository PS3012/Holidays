import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/DataFields/InputField"
import InputMobile from "../../components/DataFields/InputMobile"
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../../config/firebase"
import { useDispatch, useSelector } from "react-redux";
import { updateContactData } from "../../slices/contactDataSlice";

function EditContactDetails() {
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const { data: contactDetails } = useSelector(state => state.contactDetails)
     const [data, setData] = useState(contactDetails)
     const [formErrors, setFormErrors] = useState({})
     const [loading, setLoading] = useState(false)
     const updateContactDetails = (key, val) => {
          setFormErrors({})
          setData(prev => ({ ...prev, [key]: val }))
     }
     const handleUpdateDetails = async () => {
          try {
               setLoading(true)
               const docRef = doc(db, 'contactDetails', contactDetails.id);
               await updateDoc(docRef, data);
               dispatch(updateContactData({ ...data }))
               setLoading(false)
               toast.success('Contact Details updated successfully');
               navigate("/admin/contactDetails")
          } catch (err) {
               console.error('Error updating document:', err);
          }
     }
     return (
          <>

               <div>
                    <div className="text-3xl text-theme font-bold mb-4 pb-4 border-b-2 border-black">Update Contact Details</div>
                    <InputField
                         value={data.address ?? ""}
                         updateValue={(val) => updateContactDetails("address", val)}
                         type="text"
                         label="Address"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter Address"
                         error={formErrors.address}
                         errorMessage="Please enter Address"
                    />
                    <InputField
                         value={data.mapUrl ?? ""}
                         updateValue={(val) => updateContactDetails("mapUrl", val)}
                         type="url"
                         label="Google Maps URL"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter Google Maps URL"
                         error={formErrors.mapUrl}
                         errorMessage="Please enter Google Maps URL"
                    />
                    <InputMobile
                         value={data.mobileNumber}
                         updateValue={(val) => updateContactDetails("mobileNumber", val)}
                         label="Mobile Number"
                         containerClass="mb-4"
                         required={true}
                         fieldType="sm"
                         placeholder="Enter Mobile Number"
                         error={formErrors.mobileNumber}
                         errorMessage="Please enter valid Mobile Number"
                    />
                    <InputMobile
                         value={data.bookingQueryNumber}
                         updateValue={(val) => updateContactDetails("bookingQueryNumber", val)}
                         label="Booking Query Number"
                         containerClass="mb-4"
                         required={true}
                         fieldType="sm"
                         placeholder="Enter Booking Query Number"
                         error={formErrors.bookingQueryNumber}
                         errorMessage="Please enter valid Booking Query Number"
                    />
                    <InputMobile
                         value={data.supportNumber}
                         updateValue={(val) => updateContactDetails("supportNumber", val)}
                         label="Support Number"
                         containerClass="mb-4"
                         required={true}
                         fieldType="sm"
                         placeholder="Enter Support Number"
                         error={formErrors.supportNumber}
                         errorMessage="Please enter valid Support Number"
                    />
                    <InputField
                         value={data.emailAddress}
                         updateValue={(val) => updateContactDetails("emailAddress", val)}
                         type="email"
                         label="E-Mail Address"
                         containerClass="mb-4"
                         required={true}
                         fieldType="sm"
                         placeholder="Enter E-Mail Address"
                         error={formErrors.emailAddress}
                         errorMessage="Please enter E-Mail Address"
                    />
                    <InputField
                         value={data.facebookUrl ?? ""}
                         updateValue={(val) => updateContactDetails("facebookUrl", val)}
                         type="url"
                         label="Facebook URL"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter Facebook URL"
                         error={formErrors.facebookUrl}
                         errorMessage="Please enter Facebook URL"
                    />
                    <InputField
                         value={data.twitterUrl ?? ""}
                         updateValue={(val) => updateContactDetails("twitterUrl", val)}
                         type="url"
                         label="Twitter URL"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter Twitter URL"
                         error={formErrors.twitterUrl}
                         errorMessage="Please enter Twitter URL"
                    />
                    <InputField
                         value={data.instagramUrl ?? ""}
                         updateValue={(val) => updateContactDetails("instagramUrl", val)}
                         type="url"
                         label="Instagram URL"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter Instagram URL"
                         error={formErrors.instagramUrl}
                         errorMessage="Please enter Instagram URL"
                    />
                    <InputField
                         value={data.youTubeUrl ?? ""}
                         updateValue={(val) => updateContactDetails("youTubeUrl", val)}
                         type="url"
                         label="YouTube URL"
                         required={true}
                         containerClass="mb-4"
                         fieldType="sm"
                         placeholder="Enter YouTube URL"
                         error={formErrors.youTubeUrl}
                         errorMessage="Please enter YouTube URL"
                    />
                    <button
                         onClick={handleUpdateDetails}
                         disabled={loading ? "disabled" : ""}
                         className={`text-white rounded px-2 py-1 w-full text-lg bg-theme hover:bg-black disabled:opacity-20`}
                    >
                         {loading ? "Loading..." : "Update Details"}
                    </button>
               </div>

          </>
     )
}

export default EditContactDetails

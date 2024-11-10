import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function ManageContactDetails() {
     const { data: contactDetails } = useSelector(state => state.contactDetails)
     return (
          <>

               <div>
                    <div className="flex justify-between gap-3 items-center mb-4 pb-4 border-b-2 border-black">
                         <div className="text-3xl text-theme font-bold">Contact Details</div>
                         <Link to="/admin/editContactDetails" className={`text-white rounded px-4 py-1 bg-theme hover:bg-black disabled:opacity-20`}>
                              Edit Contact Details
                         </Link>
                    </div>
                    <div className="grid gap-2">
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Address</div>
                              <div className="col-span-3 font-light">{contactDetails.address ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Google Map URL</div>
                              <div className="col-span-3 font-light">{contactDetails.mapUrl ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Mobile Number</div>
                              <div className="col-span-3 font-light">{contactDetails.mobileNumber ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Booking Query Number</div>
                              <div className="col-span-3 font-light">{contactDetails.bookingQueryNumber ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Support Number</div>
                              <div className="col-span-3 font-light">{contactDetails.supportNumber ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">E-Mail Address</div>
                              <div className="col-span-3 font-light">{contactDetails.emailAddress ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Facebook URL</div>
                              <div className="col-span-3 font-light">{contactDetails.facebookUrl ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Twitter URL</div>
                              <div className="col-span-3 font-light">{contactDetails.twitterUrl ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">Instagram URL</div>
                              <div className="col-span-3 font-light">{contactDetails.instagramUrl ?? "--"}</div>
                         </div>
                         <div className="grid grid-cols-4 text-lg">
                              <div className="font-bold">YouTube URL</div>
                              <div className="col-span-3 font-light">{contactDetails.youTubeUrl ?? "--"}</div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default ManageContactDetails

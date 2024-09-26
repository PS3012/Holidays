import { useState } from "react"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { MdDoubleArrow } from "react-icons/md"
import { BiSolidPlaneAlt } from "react-icons/bi"
import { LiaHotelSolid } from "react-icons/lia"
import { IoCarSportOutline } from "react-icons/io5"
import { PiMapPinSimpleAreaFill } from "react-icons/pi"
import { IoMdCloudyNight } from "react-icons/io"
import { HiOutlineCalendarDays } from "react-icons/hi2"
import BreadCrumb from "../components/BreadCrumb"
import { holidayDetails } from "../StaticData"
import { appName, bookNowUser } from "../recoil"
import InputCheckBox from "../components/DataFields/InputCheckBox"
import Timer from "../components/Timer"
import InputMobile from "../components/DataFields/InputMobile"
import InputField from "../components/DataFields/InputField"
import SelectField from "../components/DataFields/SelectField"
import InputDate from "../components/DataFields/InputDate"

function BookNow() {
     const [prefixAppName] = useRecoilState(appName)
     const [user, setUser] = useRecoilState(bookNowUser)
     const [formErrors, setFormErrors] = useState({})
     const [onTimeEnd, setOnTimeEnd] = useState(false)
     const [bookingData, setBookingData] = useState({ payment: "Deposit" })
     const [passenger1, setPassenger1] = useState({})
     const [passenger2, setPassenger2] = useState({})
     const today = new Date();
     today.setDate(today.getDate());
     const updateUserDetails = (key, value) => {
          setFormErrors({})
          setUser(prevState => ({
               ...prevState,
               [key]: value
          }));
     };
     const updateBookingDetails = (key, value) => {
          setFormErrors({})
          setBookingData(prevState => ({
               ...prevState,
               [key]: value
          }));
     };
     const updatePassenger1Details = (key, value) => {
          setFormErrors({})
          setPassenger1(prevState => ({
               ...prevState,
               [key]: value
          }));
     };
     const updatePassenger2Details = (key, value) => {
          setFormErrors({})
          setPassenger2(prevState => ({
               ...prevState,
               [key]: value
          }));
     };

     const handleMakePayment = () => {
          console.log(bookingData)
     }
     return (
          <>

               <BreadCrumb pageName={holidayDetails.title} />

               <div id="book-now-page" className="max-w-7xl mx-auto px-4 py-6 grid gap-4">
                    <div className="left-block">
                         <div className="mb-4">
                              <div className="text-3xl font-bold mb-2">Review Package</div>
                              <div className="review-box p-4 border rounded shadow">
                                   <div className="top-grid grid gap-4 items-center pb-4 border-b border-zinc-300">
                                        <div className="image">
                                             <img src={`${prefixAppName}/images/package/dubai.jpg`} alt="Package" className="w-full object-cover rounded shadow-lg aspect-video" />
                                        </div>
                                        <div className="details">
                                             <div className="text-2xl font-bold mb-1">{holidayDetails.title}</div>
                                             <div className="font-medium flex gap-2 items-center text-sky-600 pb-2 mb-2 border-b">
                                                  <span>Phuket (3N)</span> <MdDoubleArrow />
                                                  <span>Krabi (2N)</span> <MdDoubleArrow />
                                                  <span>Phi Phi Island (2N)</span>
                                             </div>
                                             <div className="flex flex-wrap gap-4 text-sm font-semibold">
                                                  <div className="flex items-center gap-1">
                                                       <span className="text-base"><BiSolidPlaneAlt /></span>
                                                       <span>Round Trip Flights</span>
                                                  </div>
                                                  <div className="flex items-center gap-1">
                                                       <span className="text-base"><LiaHotelSolid /></span>
                                                       <span>Five Star Hotels</span>
                                                  </div>
                                                  <div className="flex items-center gap-1">
                                                       <span className="text-base"><IoCarSportOutline /></span>
                                                       <span>Transfers</span>
                                                  </div>
                                                  <div className="flex items-center gap-1">
                                                       <span className="text-base"><PiMapPinSimpleAreaFill /></span>
                                                       <span>Excursion</span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="pt-3 flex items-center flex-wrap gap-5 text-sm font-semibold">
                                        <div className="flex gap-1 items-center">
                                             <HiOutlineCalendarDays className="text-base" />
                                             <span>12 October, 2024</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                             <IoMdCloudyNight className="text-base" />
                                             <span>7 Nights & 8 Days</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="mb-4">
                              <div className="text-xl font-semibold mb-2">Enter your Details</div>
                              <div className="p-4 shadow border rounded">
                                   <div className="grid grid-cols-2 gap-4 pb-4 mb-4 border-b border-zinc-300">
                                        <InputMobile
                                             value={user.mobileNumber}
                                             updateValue={(val) => updateUserDetails("mobileNumber", val)}
                                             label="Mobile Number"
                                             fieldType="sm"
                                             placeholder="Enter Mobile Number"
                                             error={formErrors.mobileNumber}
                                             errorMessage="Please enter valid Mobile Number"
                                        />
                                        <InputField
                                             value={user.emailAddress}
                                             updateValue={(val) => updateUserDetails("emailAddress", val)}
                                             type="email"
                                             label="E-Mail Address"
                                             fieldType="sm"
                                             placeholder="Enter E-Mail Address"
                                             error={formErrors.emailAddress}
                                             errorMessage="Please enter E-Mail Address"
                                        />
                                   </div>
                                   <InputCheckBox checkFor="agreeConsentNotice" value={bookingData.agreeConsentNotice} updateValue={(val) => updateBookingDetails("agreeConsentNotice", val)}>
                                        I agree to receive marketing emails, offers and promotions from Crystal Travels.&nbsp;
                                        <Link to={`${prefixAppName}`} className="text-sm text-sky-500 border-b-2 font-semibold hover:border-sky-500">(Consent Notice)</Link>
                                   </InputCheckBox>
                              </div>
                         </div>
                         <div className="mb-4">
                              <div className="text-xl font-semibold mb-2">Passenger Details</div>
                              <div className="p-4 shadow border rounded">
                                   <div className="border-b grid gap-4 pb-4 mb-4">
                                        <div className="flex items-center gap-2 font-semibold text-sm">
                                             <div className="bg-black text-white px-3 py-1 text-xs rounded">Passenger 1</div> <span>Adult</span>
                                        </div>
                                        <div className="grid grid-cols-5 gap-4">
                                             <SelectField
                                                  value={passenger1.salutation}
                                                  updateValue={(val) => updatePassenger1Details("salutation", val)}
                                                  label="Salutation"
                                                  fieldType="sm"
                                                  error={formErrors.salutation}
                                                  errorMessage="Please Enter Salutation"
                                             >
                                                  <option value="">-- Select --</option>
                                                  <option value="Mr">Mr.</option>
                                                  <option value="Mrs">Mrs.</option>
                                                  <option value="Miss">Miss.</option>
                                             </SelectField>
                                             <InputField
                                                  value={passenger1.firstName}
                                                  updateValue={(val) => updatePassenger1Details("firstName", val)}
                                                  type="text"
                                                  label="First Name"
                                                  containerClass="col-span-2"
                                                  fieldType="sm"
                                                  placeholder="Enter First Name"
                                                  error={formErrors.firstName}
                                                  errorMessage="Please enter First Name"
                                             />
                                             <InputField
                                                  value={passenger1.lastName}
                                                  updateValue={(val) => updatePassenger1Details("lastName", val)}
                                                  type="text"
                                                  label="Last Name"
                                                  containerClass="col-span-2"
                                                  fieldType="sm"
                                                  placeholder="Enter Last Name"
                                                  error={formErrors.lastName}
                                                  errorMessage="Please enter Last Name"
                                             />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                             <InputDate
                                                  value={passenger1.dateOfBirth}
                                                  updateValue={(val) => updatePassenger1Details("dateOfBirth", val)}
                                                  label="Date of Birth"
                                                  fieldType="sm"
                                                  maxDate={today}
                                                  placeholder="Enter Date of Birth"
                                                  error={formErrors.dateOfBirth}
                                                  errorMessage="Please enter Date of Birth."
                                             />
                                             <InputField
                                                  value={passenger1.passportNumber}
                                                  updateValue={(val) => updatePassenger1Details("passportNumber", val)}
                                                  type="text"
                                                  label="Passport Number"
                                                  fieldType="sm"
                                                  placeholder="Enter Passport Number"
                                                  error={formErrors.passportNumber}
                                                  errorMessage="Please enter Passport Number"
                                             />
                                             <InputField
                                                  value={passenger1.nationality}
                                                  updateValue={(val) => updatePassenger1Details("nationality", val)}
                                                  type="text"
                                                  label="Nationality"
                                                  fieldType="sm"
                                                  placeholder="Enter Nationality"
                                                  error={formErrors.nationality}
                                                  errorMessage="Please enter Nationality"
                                             />
                                             <InputDate
                                                  value={passenger1.passportExpiry}
                                                  updateValue={(val) => updatePassenger1Details("passportExpiry", val)}
                                                  label="Passport Expiry Date"
                                                  fieldType="sm"
                                                  minDate={today}
                                                  placeholder="Enter Passport Expiry Date"
                                                  error={formErrors.passportExpiry}
                                                  errorMessage="Please enter Passport Expiry Date."
                                             />
                                        </div>
                                   </div>
                                   <div className="grid gap-4">
                                        <div className="flex items-center gap-2 font-semibold text-sm">
                                             <div className="bg-black text-white px-3 py-1 text-xs rounded">Passenger 2</div> <span>Adult</span>
                                        </div>
                                        <div className="grid grid-cols-5 gap-4">
                                             <SelectField
                                                  value={passenger2.salutation}
                                                  updateValue={(val) => updatePassenger2Details("salutation", val)}
                                                  label="Salutation"
                                                  fieldType="sm"
                                                  error={formErrors.salutation}
                                                  errorMessage="Please Enter Salutation"
                                             >
                                                  <option value="">-- Select --</option>
                                                  <option value="Mr">Mr.</option>
                                                  <option value="Mrs">Mrs.</option>
                                                  <option value="Miss">Miss.</option>
                                             </SelectField>
                                             <InputField
                                                  value={passenger2.firstName}
                                                  updateValue={(val) => updatePassenger2Details("firstName", val)}
                                                  type="text"
                                                  label="First Name"
                                                  containerClass="col-span-2"
                                                  fieldType="sm"
                                                  placeholder="Enter First Name"
                                                  error={formErrors.firstName}
                                                  errorMessage="Please enter First Name"
                                             />
                                             <InputField
                                                  value={passenger2.lastName}
                                                  updateValue={(val) => updatePassenger2Details("lastName", val)}
                                                  type="text"
                                                  label="Last Name"
                                                  containerClass="col-span-2"
                                                  fieldType="sm"
                                                  placeholder="Enter Last Name"
                                                  error={formErrors.lastName}
                                                  errorMessage="Please enter Last Name"
                                             />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                             <InputDate
                                                  value={passenger2.dateOfBirth}
                                                  updateValue={(val) => updatePassenger2Details("dateOfBirth", val)}
                                                  label="Date of Birth"
                                                  fieldType="sm"
                                                  maxDate={today}
                                                  placeholder="Enter Date of Birth"
                                                  error={formErrors.dateOfBirth}
                                                  errorMessage="Please enter Date of Birth."
                                             />
                                             <InputField
                                                  value={passenger2.passportNumber}
                                                  updateValue={(val) => updatePassenger2Details("passportNumber", val)}
                                                  type="text"
                                                  label="Passport Number"
                                                  fieldType="sm"
                                                  placeholder="Enter Passport Number"
                                                  error={formErrors.passportNumber}
                                                  errorMessage="Please enter Passport Number"
                                             />
                                             <InputField
                                                  value={passenger2.nationality}
                                                  updateValue={(val) => updatePassenger2Details("nationality", val)}
                                                  type="text"
                                                  label="Nationality"
                                                  fieldType="sm"
                                                  placeholder="Enter Nationality"
                                                  error={formErrors.nationality}
                                                  errorMessage="Please enter Nationality"
                                             />
                                             <InputDate
                                                  value={passenger2.passportExpiry}
                                                  updateValue={(val) => updatePassenger2Details("passportExpiry", val)}
                                                  label="Passport Expiry Date"
                                                  fieldType="sm"
                                                  minDate={today}
                                                  placeholder="Enter Passport Expiry Date"
                                                  error={formErrors.passportExpiry}
                                                  errorMessage="Please enter Passport Expiry Date."
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="mb-4">
                              <div className="text-xl font-semibold mb-2">Billing Details</div>
                              <div className="p-4 shadow border rounded grid gap-4">
                                   <InputField
                                        value={bookingData.addressLine1}
                                        updateValue={(val) => updateBookingDetails("addressLine1", val)}
                                        type="text"
                                        label="Address Line 1"
                                        fieldType="sm"
                                        placeholder="Enter Address Line 1"
                                        error={formErrors.addressLine1}
                                        errorMessage="Please enter Address Line 1"
                                   />
                                   <InputField
                                        value={bookingData.addressLine2}
                                        updateValue={(val) => updateBookingDetails("addressLine2", val)}
                                        type="text"
                                        label="Address Line 2"
                                        fieldType="sm"
                                        placeholder="Enter Address Line 2"
                                        error={formErrors.addressLine2}
                                        errorMessage="Please enter Address Line 2"
                                   />
                                   <div className="grid grid-cols-2 gap-4">
                                        <InputField
                                             value={bookingData.city}
                                             updateValue={(val) => updateBookingDetails("city", val)}
                                             type="text"
                                             label="City"
                                             fieldType="sm"
                                             placeholder="Enter City"
                                             error={formErrors.city}
                                             errorMessage="Please enter City"
                                        />
                                        <InputField
                                             value={bookingData.state}
                                             updateValue={(val) => updateBookingDetails("state", val)}
                                             type="text"
                                             label="State"
                                             fieldType="sm"
                                             placeholder="Enter State"
                                             error={formErrors.state}
                                             errorMessage="Please enter State"
                                        />
                                        <InputField
                                             value={bookingData.country}
                                             updateValue={(val) => updateBookingDetails("country", val)}
                                             type="text"
                                             label="Country"
                                             fieldType="sm"
                                             placeholder="Enter Country"
                                             error={formErrors.country}
                                             errorMessage="Please enter Country"
                                        />
                                        <InputField
                                             value={bookingData.postalCode}
                                             updateValue={(val) => updateBookingDetails("postalCode", val)}
                                             type="text"
                                             label="Postal Code"
                                             fieldType="sm"
                                             placeholder="Enter Postal Code"
                                             error={formErrors.postalCode}
                                             errorMessage="Please enter Postal Code"
                                        />
                                   </div>
                              </div>
                         </div>
                         <div className="mb-4">
                              <InputCheckBox checkFor="agreeBooking" value={bookingData.agreeBooking} updateValue={(val) => updateBookingDetails("agreeBooking", val)}>
                                   By clicking make payment, I agree that I have read the above mentioned Booking Terms & Conditions including&nbsp;
                                   <Link to={`${prefixAppName}`} className="text-sm text-sky-500 border-b-2 font-semibold hover:border-sky-500">Refund and Cancellation Charges</Link>.&nbsp;
                                   I also confirm that I have read & accepted the&nbsp;
                                   <Link to={`${prefixAppName}`} className="text-sm text-sky-500 border-b-2 font-semibold hover:border-sky-500">Terms & Conditions</Link>.&nbsp;
                              </InputCheckBox>
                         </div>
                         <div>
                              <button onClick={handleMakePayment} className={`bg-theme hover:bg-black text-white rounded disabled:opacity-20 px-5 py-2`}>
                                   Make Payment
                              </button>
                         </div>
                    </div>
                    <div className="right-block">
                         <div className="flex justify-end mb-2">
                              <Timer minutes={10} setOnTimeEnd={setOnTimeEnd} />
                         </div>
                         <div className="p-4 shadow border rounded">
                              <div className="grid grid-cols-2 gap-3 mb-4">
                                   <div className={`border p-2 rounded cursor-pointer ${bookingData.payment === "Deposit" ? "bg-sky-500 text-white" : ""}`} onClick={() => updateBookingDetails("payment", "Deposit")}>
                                        <div className="text-sm font-bold">Book With</div>
                                        <div className="text-xs font-semibold">INR 2000 Deposit</div>
                                   </div>
                                   <div className={`border p-2 rounded cursor-pointer ${bookingData.payment === "Full" ? "bg-sky-500 text-white" : ""}`} onClick={() => updateBookingDetails("payment", "Full")}>
                                        <div className="text-sm font-bold">Pay Full Now</div>
                                        <div className="text-xs font-semibold">INR 2,00,000</div>
                                   </div>
                                   <div className={`border p-2 rounded cursor-pointer col-span-2 ${bookingData.payment === "EMI" ? "bg-sky-500 text-white" : ""}`} onClick={() => updateBookingDetails("payment", "EMI")}>
                                        <div className="text-sm font-bold">EMI starts from INR 4,000/Month</div>
                                        <div className="text-xs font-semibold flex">
                                             <div className="text-sky-500 border-b-2 hover:border-sky-500 cursor-pointer transition-colors">View Plans</div>
                                        </div>
                                   </div>
                              </div>
                              <div className="mb-2 pb-2 border-b border-slate-400">
                                   <div className="text-lg font-bold mb-1">Your Price Details</div>
                                   <div className="grid grid-cols-5 gap-2 text-sm">
                                        <div className="col-span-2 font-bold">Package Price</div>
                                        <div className="col-span-3 font-medium text-right">INR 2,00,000</div>
                                   </div>
                                   <div className="grid grid-cols-5 gap-2 text-sm">
                                        <div className="col-span-2 font-bold">ATOL</div>
                                        <div className="col-span-3 font-medium text-right">INR 2,000</div>
                                   </div>
                              </div>
                              <div className="grid grid-cols-5 gap-2 mb-2">
                                   <div className="col-span-2 font-bold">Total Charge</div>
                                   <div className="col-span-3 font-semibold text-right">INR 2,02,000</div>
                              </div>
                              <div className="rounded border p-3 mb-2">
                                   <div className="grid grid-cols-5 gap-2 text-sm">
                                        <div className="col-span-2 font-bold text-sky-500">Pay Now</div>
                                        <div className="col-span-3 font-medium text-right">INR 2,000</div>
                                   </div>
                                   <div className="text-gray-400 font-medium text-xs mb-1">Amount to pay now to reserve.</div>
                                   <div className="grid grid-cols-5 gap-2 text-sm">
                                        <div className="col-span-2 font-bold text-red-500">Balance Due</div>
                                        <div className="col-span-3 font-medium text-right">INR 2,00,000</div>
                                   </div>
                              </div>
                              <div className="text-gray-400 font-medium text-xs">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, repellendus officiis vel et quis architecto laudantium deleniti sed debitis facilis voluptatibus esse veritatis.
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default BookNow

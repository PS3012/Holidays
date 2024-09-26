import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import toast from 'react-hot-toast';
import { appName, bookNowUser } from '../recoil';
import InputField from './DataFields/InputField';
import SelectField from './DataFields/SelectField';
import InputDate from './DataFields/InputDate';
import InputMobile from './DataFields/InputMobile';
import { isPhoneValid } from './otherFunctions';

function SendEnquiryForm() {
     const navigate = useNavigate()
     const [prefixAppName] = useRecoilState(appName)
     const [user, setUser] = useRecoilState(bookNowUser)
     const [formStep, setFormStep] = useState(1)
     const [loading, setLoading] = useState(false)
     const [formErrors, setFormErrors] = useState({})
     const MIN_DATE = new Date();
     MIN_DATE.setDate(MIN_DATE.getDate() + 1);
     const updateUserDetails = (key, value) => {
          setFormErrors({})
          setUser(prevState => ({
               ...prevState,
               [key]: value
          }));
     };

     const validateFormFields = () => {
          let isValid = true
          if (!user.salutation || user.salutation.trim() === "") {
               toast.error("Enter Salutation")
               setFormErrors({ salutation: true })
               isValid = false;
          } else if (!user.firstName || user.firstName.trim() === "") {
               toast.error("Enter First Name")
               setFormErrors({ firstName: true })
               isValid = false;
          } else if (!user.lastName || user.lastName.trim() === "") {
               toast.error("Enter Last Name")
               setFormErrors({ lastName: true })
               isValid = false;
          } else if (!user.emailAddress || user.emailAddress.trim() === "") {
               toast.error("Enter E-Mail Address")
               setFormErrors({ emailAddress: true })
               isValid = false;
          } else if (!isPhoneValid(user.mobileNumber)) {
               toast.error("Enter valid Mobile Number")
               setFormErrors({ mobileNumber: true })
               isValid = false;
          } else if (!user.travellerDate || !user.travellerDate.startDate) {
               toast.error("Enter Traveller Date")
               setFormErrors({ travellerDate: true })
               isValid = false;
          }
          return isValid
     }

     const handleBookNow = (e) => {
          e.preventDefault();
          if (validateFormFields()) {
               navigate(`${prefixAppName}/book-now`)
          }
     }

     const handleSendEnquiry = (e) => {
          e.preventDefault();
          if (validateFormFields()) {
               setLoading(true)
               setTimeout(() => {
                    setFormStep(2)
                    setLoading(false)
               }, 2000);
          }
     }

     const handleFormStep = (step, e) => {
          e.preventDefault()
          setLoading(true)
          setTimeout(() => {
               setFormStep(step)
               setLoading(false)
          }, 2000);
     }
     return (
          <>

               <div>
                    {formStep === 1 ?
                         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
                              <SelectField
                                   value={user.departureCity}
                                   updateValue={(val) => updateUserDetails("departureCity", val)}
                                   label="Departure City"
                                   fieldType="sm"
                                   error={formErrors.departureCity}
                                   errorMessage="Please Enter Departure City"
                              >
                                   <option value="">-- Select --</option>
                                   <option value="1">Ex. Ahemdabad VietJet Air</option>
                                   <option value="2">Land Package</option>
                              </SelectField>
                              <SelectField
                                   value={user.salutation}
                                   updateValue={(val) => updateUserDetails("salutation", val)}
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
                                   value={user.firstName}
                                   updateValue={(val) => updateUserDetails("firstName", val)}
                                   type="text"
                                   label="First Name"
                                   fieldType="sm"
                                   placeholder="Enter First Name"
                                   error={formErrors.firstName}
                                   errorMessage="Please enter First Name"
                              />
                              <InputField
                                   value={user.lastName}
                                   updateValue={(val) => updateUserDetails("lastName", val)}
                                   type="text"
                                   label="Last Name"
                                   fieldType="sm"
                                   placeholder="Enter Last Name"
                                   error={formErrors.lastName}
                                   errorMessage="Please enter Last Name"
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
                              <InputMobile
                                   value={user.mobileNumber}
                                   updateValue={(val) => updateUserDetails("mobileNumber", val)}
                                   label="Mobile Number"
                                   fieldType="sm"
                                   placeholder="Enter Mobile Number"
                                   error={formErrors.mobileNumber}
                                   errorMessage="Please enter valid Mobile Number"
                              />
                              <SelectField
                                   value={user.selectableDate}
                                   updateValue={(val) => updateUserDetails("selectableDate", val)}
                                   label="Traveller Date"
                                   fieldType="sm"
                                   error={formErrors.selectableDate}
                                   errorMessage="Please Enter Traveller Date"
                              >
                                   <option value="">-- Select --</option>
                                   <option value="26-09-2024">26 September 2024</option>
                                   <option value="26-10-2024">26 October 2024</option>
                                   <option value="26-11-2024">26 November 2024</option>
                                   <option value="26-12-2024">26 December 2024</option>
                              </SelectField>
                              <InputDate
                                   value={user.travellerDate}
                                   updateValue={(val) => updateUserDetails("travellerDate", val)}
                                   label="Traveller Date"
                                   minDate={MIN_DATE}
                                   fieldType="sm"
                                   placeholder="Enter Traveller Date"
                                   error={formErrors.travellerDate}
                                   errorMessage="Please enter Traveller Date."
                              />
                              <div className="grid grid-cols-2 gap-3">
                                   <button onClick={handleSendEnquiry} className={`border-2 border-theme hover:border-black bg-white hover:bg-black hover:text-white rounded p-2 disabled:opacity-30`} disabled={loading}>
                                        {loading ? "Loading..." : "Send Enquiry"}
                                   </button>
                                   <button onClick={handleBookNow} className={`bg-theme hover:bg-black text-white rounded p-2 disabled:opacity-30`} disabled={loading}>
                                        {loading ? "Loading..." : "Book Now"}
                                   </button>
                              </div>
                         </div>
                         :
                         <div>
                              <div className="grid grid-cols-2 mb-3 pb-3 text-sm font-bold border-b-2 border-slate-400">
                                   <div>Details/Room Type</div>
                                   <div>No. of Pax</div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Adult (Twin Sharing)</div>
                                   <div><input type="number" name="adultTwin" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Adult (Triple Sharing)</div>
                                   <div><input type="number" name="adultTriple" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Adult (Single Room)</div>
                                   <div><input type="number" name="adultSingle" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Quad (Four Sharing)</div>
                                   <div><input type="number" name="quadFour" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Quad (Five Sharing)</div>
                                   <div><input type="number" name="quadFive" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Hexa (Six Sharing)</div>
                                   <div><input type="number" name="hexaSix" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Child (5-11 Yrs.) No Bed</div>
                                   <div><input type="number" name="child511NoBed" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Child (2-4 Yrs.) No Bed</div>
                                   <div><input type="number" name="child24NoBed" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Child (2-4 Yrs.) With Bed</div>
                                   <div><input type="number" name="child24WithBed" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 pb-3 text-sm font-medium border-b border-slate-200">
                                   <div>Infant</div>
                                   <div><input type="number" name="infant" placeholder="0" className="appearance-none block w-full text-gray-700 border border-gray-200 rounded text-sm py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" /></div>
                              </div>
                              <div className="grid grid-cols-2 items-center mb-3 text-sm font-bold">
                                   <div>Total Pax</div>
                                   <div>0</div>
                              </div>
                              {formStep === 2 ?
                                   <div className="grid grid-cols-2 gap-3">
                                        <button onClick={(e) => handleFormStep(1, e)} className={`border-2 border-theme hover:border-black bg-white hover:bg-black hover:text-white rounded p-2 disabled:opacity-30`} disabled={loading}>
                                             {loading ? "Loading..." : "Back"}
                                        </button>
                                        <button onClick={(e) => handleFormStep(3, e)} className={`border-2 border-theme hover:border-black bg-theme hover:bg-black text-white rounded p-2 disabled:opacity-30`} disabled={loading}>
                                             {loading ? "Loading..." : "Check Rate & Book"}
                                        </button>
                                   </div>
                                   :
                                   <div className='text-lime-600 font-semibold'>Thanks! Your enquiry submitted successfully. We will revert back with suitable suggestions</div>
                              }
                         </div>
                    }
               </div>

          </>
     )
}

export default SendEnquiryForm

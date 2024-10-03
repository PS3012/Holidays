import { useRecoilState } from "recoil"
import { useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import { appName } from "../recoil"
import PasswordField from "../components/DataFields/PasswordField"
import InputField from "../components/DataFields/InputField"
import SelectField from "../components/DataFields/SelectField"
import InputMobile from "../components/DataFields/InputMobile"
import { isPhoneValid } from "../components/OtherFunctions"

function Register() {
     const [prefixAppName] = useRecoilState(appName)
     const [details, setDetails] = useState({ salutation: "", firstName: "", lastName: "", email: "", mobileNumber: "", password: "", confirmPassword: "" })
     const [formErrors, setFormErrors] = useState({})
     const handleUpdateDetails = (key, value) => {
          setFormErrors({})
          setDetails(prev => {
               return { ...prev, [key]: value }
          })
     }
     const handleRegister = () => {
          if (!details.salutation || details.salutation.trim() === "") {
               toast.error("Enter Salutation")
               setFormErrors({ salutation: true })
          } else if (!details.firstName || details.firstName.trim() === "") {
               toast.error("Enter First Name")
               setFormErrors({ firstName: true })
          } else if (!details.lastName || details.lastName.trim() === "") {
               toast.error("Enter Last Name")
               setFormErrors({ lastName: true })
          } else if (!details.email || details.email.trim() === "") {
               toast.error("Enter E-Mail Address")
               setFormErrors({ email: true })
          } else if (!isPhoneValid(details.mobileNumber)) {
               toast.error("Enter valid Mobile Number")
               setFormErrors({ mobileNumber: true })
          } else if (!details.password || details.password.trim() === "") {
               toast.error("Enter Password")
               setFormErrors({ password: true })
          } else if (!details.confirmPassword || details.confirmPassword.trim() === "") {
               toast.error("Enter Confirm Password")
               setFormErrors({ confirmPassword: true })
          } else if (details.password !== details.confirmPassword) {
               toast.error("Password & Confirm Password doesn't matched.")
          } else {
               toast.success("Registered Successfully!")
               console.log(details)
          }
     }
     return (
          <>

               <div id="login-register-page" className="max-w-7xl mx-auto px-4 py-6">
                    <div className="shadow-lg rounded overflow-hidden grid grid-cols-2 items-center border">
                         <div className="image">
                              <img src={`${prefixAppName}/images/banner/mid-banner.jpg`} alt="..." className="w-full aspect-square" />
                         </div>
                         <div className="right-block p-4">
                              <div className="text-center text-5xl text-theme font-bold mb-6">
                                   Create Your Account
                              </div>
                              <div className="grid gap-4">
                                   <div className="grid grid-cols-3 gap-4">
                                        <SelectField
                                             value={details.salutation}
                                             updateValue={(val) => handleUpdateDetails("salutation", val)}
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
                                             value={details.firstName}
                                             updateValue={(val) => handleUpdateDetails("firstName", val)}
                                             type="text"
                                             label="First Name"
                                             placeholder="Enter First Name"
                                             fieldType="sm"
                                             error={formErrors.firstName}
                                             errorMessage="Please enter First Name."
                                        />
                                        <InputField
                                             value={details.lastName}
                                             updateValue={(val) => handleUpdateDetails("lastName", val)}
                                             type="text"
                                             label="Last Name"
                                             placeholder="Enter Last Name"
                                             fieldType="sm"
                                             error={formErrors.lastName}
                                             errorMessage="Please enter Last Name."
                                        />
                                   </div>
                                   <InputField
                                        value={details.email}
                                        updateValue={(val) => handleUpdateDetails("email", val)}
                                        type="email"
                                        label="E-Mail Address"
                                        placeholder="Enter E-Mail Address"
                                        fieldType="sm"
                                        error={formErrors.email}
                                        errorMessage="Please enter E-Mail Address."
                                   />
                                   <InputMobile
                                        value={details.mobileNumber}
                                        updateValue={(val) => handleUpdateDetails("mobileNumber", val)}
                                        label="Mobile Number"
                                        fieldType="sm"
                                        placeholder="Enter Mobile Number"
                                        error={formErrors.mobileNumber}
                                        errorMessage="Please enter valid Mobile Number"
                                   />
                                   <div className="grid grid-cols-2 gap-4">
                                        <PasswordField
                                             value={details.password}
                                             updateValue={(val) => handleUpdateDetails("password", val)}
                                             fieldType="sm"
                                             label="Password"
                                             containerClass="mb-4"
                                             placeholder="Enter Password"
                                             error={formErrors.password}
                                             errorMessage="Please enter Password."
                                        />
                                        <PasswordField
                                             value={details.confirmPassword}
                                             updateValue={(val) => handleUpdateDetails("confirmPassword", val)}
                                             fieldType="sm"
                                             label="Confirm Password"
                                             containerClass="mb-4"
                                             placeholder="Enter Password Again"
                                             error={formErrors.confirmPassword}
                                             errorMessage="Please enter Confirm Password."
                                        />
                                   </div>
                                   <div className="flex justify-center">
                                        <button
                                             onClick={handleRegister}
                                             className={`text-white rounded px-2 py-1 w-32 text-lg bg-theme hover:bg-black disabled:opacity-20`}
                                        >
                                             Register
                                        </button>
                                   </div>
                                   <div className="flex justify-center items-center gap-2">
                                        <div className="w-24 h-0.5 bg-gray-500"></div>
                                        <div className="font-semibold text-gray-500">OR</div>
                                        <div className="w-24 h-0.5 bg-gray-500"></div>
                                   </div>
                                   <div className="text-center">
                                        Already had a account?&nbsp;
                                        <Link to={`${prefixAppName}/login`} className="font-semibold cursor-pointer text-sky-500 hover:text-theme">Login</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Register

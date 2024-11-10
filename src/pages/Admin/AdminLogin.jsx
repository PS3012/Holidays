import toast from "react-hot-toast"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { EMAIL_REGEX, ADMIN_MAIL, ADMIN_PASS } from "../../config/constant"
import InputField from "../../components/DataFields/InputField"
import PasswordField from "../../components/DataFields/PasswordField"
import { generateUUID } from "../../components/OtherFunctions"

function AdminLogin() {
     const initialData = { email: "", password: "" }
     const navigate = useNavigate()
     const [details, setDetails] = useState(initialData)
     const [formErrors, setFormErrors] = useState({})
     const handleUpdateDetails = (key, value) => {
          setFormErrors({})
          setDetails(prev => {
               return { ...prev, [key]: value }
          })
     }
     const handleLogin = async () => {
          if (!details.email || details.email.trim() === "") {
               toast.error("Enter E-Mail Address")
               setFormErrors({ email: true })
          } else if (!EMAIL_REGEX.test(details.email)) {
               toast.error("Enter valid email.")
               setFormErrors({ email: true })
          } else if (!details.password || details.password.trim() === "") {
               toast.error("Enter Password")
               setFormErrors({ password: true })
          } else {
               if (details.email === ADMIN_MAIL && details.password === ADMIN_PASS) {
                    toast.success("Login Successfully!")
                    const storeData = { ...details, accessToken: generateUUID() }
                    localStorage.setItem("crystalAdmin", JSON.stringify(storeData))
                    navigate("/admin/dashboard")
               } else {
                    toast.error("Invalid Credentials!")
               }
          }
     }
     return (
          <>

               <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                              <img src={`${origin}/images/logo.svg`} alt="Crystal Travels" width="160" />
                         </a>
                         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                   <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Admin Login
                                   </h1>
                                   <div className="space-y-4 md:space-y-6">
                                        <InputField
                                             value={details.email}
                                             updateValue={(val) => handleUpdateDetails("email", val)}
                                             type="email"
                                             label="E-Mail Address"
                                             placeholder="name@company.com"
                                             error={formErrors.email}
                                             errorMessage="Please enter valid E-Mail Address."
                                        />
                                        <PasswordField
                                             value={details.password}
                                             updateValue={(val) => handleUpdateDetails("password", val)}
                                             label="Password"
                                             placeholder="••••••••"
                                             error={formErrors.password}
                                             errorMessage="Please enter Password."
                                        />
                                        <button type="submit" onClick={handleLogin}
                                             className="w-full text-white bg-theme hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        >Log in</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

          </>
     )
}

export default AdminLogin

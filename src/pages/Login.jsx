import { useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import { useRecoilState } from "recoil"
import { appName } from "../recoil"
import PasswordField from "../components/DataFields/PasswordField"
import InputField from "../components/DataFields/InputField"

function Login() {
     const [prefixAppName] = useRecoilState(appName)
     const [details, setDetails] = useState({ email: "", password: "" })
     const [formErrors, setFormErrors] = useState({})
     const handleUpdateDetails = (key, value) => {
          setFormErrors({})
          setDetails(prev => {
               return { ...prev, [key]: value }
          })
     }
     const handleLogin = () => {
          if (!details.email || details.email.trim() === "") {
               toast.error("Enter E-Mail Address")
               setFormErrors({ email: true })
          } else if (!details.password || details.password.trim() === "") {
               toast.error("Enter Password")
               setFormErrors({ password: true })
          } else {
               toast.success("Login Successfully!")
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
                              <div className="text-center text-5xl text-theme font-bold mb-2">
                                   Welcome Back
                              </div>
                              <div className="text-center mb-4 text-gray-700 font-medium">Login with E-Mail</div>
                              <div className="max-w-sm mx-auto">
                                   <InputField
                                        value={details.email}
                                        updateValue={(val) => handleUpdateDetails("email", val)}
                                        type="email"
                                        label="E-Mail Address"
                                        containerClass="mb-4"
                                        placeholder="Enter E-Mail Address"
                                        error={formErrors.email}
                                        errorMessage="Please enter E-Mail Address."
                                   />
                                   <PasswordField
                                        value={details.password}
                                        updateValue={(val) => handleUpdateDetails("password", val)}
                                        label="Password"
                                        containerClass="mb-4"
                                        placeholder="Enter Password"
                                        error={formErrors.password}
                                        errorMessage="Please enter Password."
                                   />
                                   <div className="flex mb-4">
                                        <Link to={`${prefixAppName}`} className="font-semibold text-sm text-sky-500 hover:text-theme">Forgot your password?</Link>
                                   </div>
                                   <div className="flex justify-center mb-4">
                                        <button
                                             onClick={handleLogin}
                                             className={`text-white rounded px-2 py-1 w-32 text-lg bg-theme hover:bg-black disabled:opacity-20`}
                                        >
                                             Login
                                        </button>
                                   </div>
                                   <div className="flex justify-center items-center gap-2 mb-3">
                                        <div className="w-24 h-0.5 bg-gray-500"></div>
                                        <div className="font-semibold text-gray-500">OR</div>
                                        <div className="w-24 h-0.5 bg-gray-500"></div>
                                   </div>
                                   <div className="text-center">
                                        Don&lsquo;t have an account?&nbsp;
                                        <Link to={`${prefixAppName}/register`} className="font-semibold cursor-pointer text-sky-500 hover:text-theme">Register Now</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Login

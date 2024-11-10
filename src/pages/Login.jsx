import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { FcGoogle } from "react-icons/fc"
import { auth, googleProvider } from "../config/firebase"
import { loginUser } from "../slices/userSlice"
import PasswordField from "../components/DataFields/PasswordField"
import InputField from "../components/DataFields/InputField"
import { EMAIL_REGEX } from "../config/constant"

function Login() {
     const initialData = { email: "", password: "" }
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const [details, setDetails] = useState(initialData)
     const [formErrors, setFormErrors] = useState({})
     const handleUpdateDetails = (key, value) => {
          setFormErrors({})
          setDetails(prev => {
               return { ...prev, [key]: value }
          })
     }
     useEffect(() => {
          const user = localStorage.getItem("driveUser")
          if (user) {
               const driveUser = JSON.parse(user)
               if (driveUser.accessToken) navigate("/")
          }
     }, [navigate])
     const handlePopUpLogin = async () => {
          try {
               const data = await signInWithPopup(auth, googleProvider)
               dispatch(loginUser({ ...data.user }))
               toast.success(`Login Successfully! Welcome ${data.user.displayName}!`)
               navigate("/")
          } catch (err) {
               console.error(err)
          }
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
               try {
                    const data = await signInWithEmailAndPassword(auth, details.email, details.password);
                    if (data) {
                         dispatch(loginUser({ ...details, ...data.user }))
                         toast.success(`Login Successfully! Welcome!`)
                         setDetails(initialData)
                         navigate("/")
                    }
               } catch (error) {
                    console.error("Error Code:", error.code);
                    console.error("Error Message:", error.message);
                    if (error.code === 'auth/user-not-found') {
                         toast.error("No account found with this email.");
                    } else if (error.code === 'auth/wrong-password') {
                         toast.error("Incorrect password.");
                    } else if (error.code === 'auth/invalid-email') {
                         toast.error("Invalid email format.");
                    } else if (error.code === 'auth/invalid-credential') {
                         toast.error("Invalid credentials. Please try again.");
                    } else {
                         toast.error("An unknown error occurred. Please try again later.");
                    }
               }
          }
     }
     return (
          <>

               <div id="login-register-page" className="max-w-7xl mx-auto px-4 py-6">
                    <div className="shadow-lg rounded overflow-hidden grid grid-cols-2 items-center border">
                         <div className="image">
                              <img src={`/images/banner/mid-banner.jpg`} alt="..." className="w-full aspect-square" />
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
                                        <Link to="#" className="font-semibold text-sm text-sky-500 hover:text-theme">Forgot your password?</Link>
                                   </div>
                                   <div className="mb-4">
                                        Don&lsquo;t have an account?&nbsp;
                                        <Link to={`/register`} className="font-semibold cursor-pointer text-sky-500 hover:text-theme">Register Now</Link>
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
                                   <div className="flex justify-center">
                                        <button
                                             onClick={handlePopUpLogin}
                                             className={`flex gap-2 items-center border-2 rounded px-5 py-1 text-lg bg-white hover:bg-slate-100 disabled:opacity-20`}
                                        >
                                             <FcGoogle /> <span>Login with Google</span>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Login

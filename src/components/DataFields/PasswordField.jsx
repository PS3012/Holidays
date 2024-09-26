import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import FieldLabel from "./FieldLabel"

function PasswordField(_props) {
     const { containerClass, label, placeholder, fieldType, value, updateValue, error, errorMessage } = _props
     const [isTypePassword, setIsTypePassword] = useState(true)
     const handleUpdate = (e) => {
          updateValue(e.target.value)
     }
     return (
          <>

               <div className={`password-field ${containerClass ? containerClass : ""}`}>
                    <FieldLabel label={label} />
                    <div className="relative">
                         <input
                              type={isTypePassword ? "password" : "text"}
                              value={value}
                              onChange={handleUpdate}
                              className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${error ? "border-red-500" : ""} ${fieldType === "sm" ? "text-sm" : ""}`}
                              placeholder={placeholder}
                         />
                         <div className="absolute right-3 icon cursor-pointer" onClick={() => setIsTypePassword(prev => !prev)}>
                              {isTypePassword ? <FaEye /> : <FaEyeSlash />}
                         </div>
                         {error && <div className="text-xs font-semibold text-red-500 mt-1">{errorMessage}</div>}
                    </div>
               </div>

          </>
     )
}

export default PasswordField

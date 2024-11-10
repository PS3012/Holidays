import { PhoneInput } from 'react-international-phone';
import FieldLabel from './FieldLabel'

function InputMobile(_props) {
     const { containerClass, label, placeholder, fieldType, value, updateValue, error, errorMessage, required } = _props
     return (
          <>

               <div className={containerClass ? containerClass : ""}>
                    <FieldLabel label={label} required={required} />
                    <PhoneInput
                         defaultCountry="in"
                         placeholder={placeholder}
                         value={value}
                         onChange={(data) => updateValue(data)}
                         inputClassName={`flex-auto !border-0 !text-gray-700 ${fieldType === "sm" ? "!text-sm" : ""}`}
                         countrySelectorStyleProps={{ buttonClassName: `border-0 border-r` }}
                         className={`border rounded leading-tight ${error ? "border-red-500" : "border-gray-200"}`}
                    />
                    {error && <div className="text-xs font-semibold text-red-500 mt-1">{errorMessage}</div>}
               </div>

          </>
     )
}

export default InputMobile

import Datepicker from "react-tailwindcss-datepicker"
import FieldLabel from "./FieldLabel"

function InputDate(_props) {
     const { containerClass, label, placeholder, fieldType, value, updateValue, error, errorMessage, minDate, maxDate } = _props
     return (
          <>

               <div className={containerClass ? containerClass : ""}>
                    <FieldLabel label={label} />
                    <Datepicker
                         primaryColor="rose"
                         asSingle={true}
                         minDate={minDate}
                         maxDate={maxDate}
                         placeholder={placeholder}
                         displayFormat="DD MMMM YYYY"
                         containerClassName={`border border-gray-200 relative rounded ${error ? "border-red-500" : ""}`}
                         inputClassName={`relative transition-all duration-300 py-2 pl-3 pr-12 w-full border-gray-300 rounded-lg tracking-wide font-light placeholder-gray-400 bg-white focus:outline-none focus:bg-white focus:border-gray-500 ${fieldType === "sm" ? "text-sm" : ""}`}
                         popoverDirection="up"
                         value={value}
                         onChange={updateValue}
                    />
                    {error && <div className="text-xs font-semibold text-red-500 mt-1">{errorMessage}</div>}
               </div>

          </>
     )
}

export default InputDate

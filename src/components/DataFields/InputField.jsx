import FieldLabel from "./FieldLabel"

function InputField(_props) {
     const { containerClass, label, type, placeholder, fieldType, value, updateValue, error, errorMessage } = _props
     const handleUpdate = (e) => {
          updateValue(e.target.value)
     }
     return (
          <>

               <div className={containerClass ? containerClass : ""}>
                    <FieldLabel label={label} />
                    <input
                         type={type}
                         value={value}
                         onChange={handleUpdate}
                         className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${error ? "border-red-500" : ""} ${fieldType === "sm" ? "text-sm" : ""}`}
                         placeholder={placeholder}
                    />
                    {error && <div className="text-xs font-semibold text-red-500 mt-1">{errorMessage}</div>}
               </div>

          </>
     )
}

export default InputField

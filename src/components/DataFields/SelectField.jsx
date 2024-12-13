import FieldLabel from "./FieldLabel"

function SelectField(_props) {
     const { containerClass, label, fieldType, children, value, updateValue, error, errorMessage, required, disabled } = _props
     const handleUpdate = (e) => {
          updateValue(e.target.value)
     }
     return (
          <>

               <div className={containerClass ? containerClass : ""}>
                    <FieldLabel label={label} required={required} />
                    <select
                         value={value}
                         onChange={handleUpdate}
                         disabled={disabled ? "disabled" : ""}
                         className={`appearance-none block w-full text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white ${error ? "border-red-500" : ""} ${fieldType === "sm" ? "text-sm" : ""}`}
                    >
                         {children}
                    </select>
                    {error && <div className="text-xs font-semibold text-red-500 mt-1">{errorMessage}</div>}
               </div>

          </>
     )
}

export default SelectField


function FieldLabel(_props) {
     return (
          <>

               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                    {_props.label} {_props.required && <span className="text-red-600">*</span>}
               </label>

          </>
     )
}

export default FieldLabel

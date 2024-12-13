import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import currencyData from "country-json/src/country-by-currency-code.json"
import SelectField from "../../components/DataFields/SelectField"
import { updateCurrency } from "../../slices/settingsSlice"

function Settings() {
     const dispatch = useDispatch()
     const { currency } = useSelector(state => state.settingsReducer)
     const updateCurrencyValue = (val) => {
          dispatch(updateCurrency(val))
     }
     const [editable, setEditable] = useState(false)
     return (
          <div>

               <div className="flex justify-between gap-3 items-center mb-4 pb-4 border-b-2 border-black">
                    <div className="text-3xl text-theme font-bold">Settings</div>
                    <button onClick={() => setEditable(prev => !prev)} className={`text-white rounded px-4 py-1 bg-theme hover:bg-black disabled:opacity-20`}>
                         {editable ? "Save" : "Edit Settings"}
                    </button>
               </div>
               <div className="grid grid-cols-2 gap-4">
                    <SelectField
                         value={currency}
                         updateValue={(val) => updateCurrencyValue(val)}
                         label="Base Currency"
                         disabled={!editable}
                         fieldType="sm"
                         required={true}
                    >
                         <option value="">-- Select --</option>
                         {currencyData.map((item, idx) =>
                              <option key={idx} value={item.currency_code}>{item.country} - {item.currency_code}</option>
                         )}
                    </SelectField>
               </div>
          </div>
     )
}

export default Settings

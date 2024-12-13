import { Fragment, useState } from "react"
import { useSelector } from "react-redux"
import currencyData from "country-json/src/country-by-currency-code.json"
import InputField from "../../components/DataFields/InputField"
import SelectField from "../../components/DataFields/SelectField"
import TextEditor from "../../components/DataFields/TextEditor"

function AddPackage() {
     const { themes } = useSelector(state => state.themes)
     const [data, setData] = useState({})
     const [formErrors, setFormErrors] = useState({})
     const updatePackageDetails = (key, val) => {
          setFormErrors({})
          setData(prev => ({ ...prev, [key]: val }))
     }
     const handleAddItinerary = () => {
          setData(prev => {
               const currentData = { ...prev }
               const dayData = [...(currentData.itinerary ?? []), { title: "" }]
               return { ...currentData, itinerary: dayData }
          })
     }
     return (
          <div>

               <div className="text-3xl text-theme font-bold mb-4 pb-4 border-b-2 border-black">Add Package</div>
               <div className="grid gap-5">
                    <div className="grid grid-cols-2 gap-5">
                         <InputField
                              value={data.title ?? ""}
                              updateValue={(val) => updatePackageDetails("title", val)}
                              type="text"
                              label="Title"
                              required={true}
                              fieldType="sm"
                              placeholder="Enter Title"
                              error={formErrors.title}
                              errorMessage="Please enter Title"
                         />
                         <InputField
                              value={data.nights ?? ""}
                              updateValue={(val) => updatePackageDetails("nights", val)}
                              type="number"
                              label="Nights"
                              required={true}
                              fieldType="sm"
                              placeholder="Enter Nights"
                              error={formErrors.nights}
                              errorMessage="Please enter Nights"
                         />
                         <SelectField
                              value={data.packageCurrency}
                              updateValue={(val) => updatePackageDetails("packageCurrency", val)}
                              label="Package Currency"
                              fieldType="sm"
                              required={true}
                              error={formErrors.packageCurrency}
                              errorMessage="Please enter Package Currency"
                         >
                              <option value="">-- Select --</option>
                              {currencyData.map((item, idx) =>
                                   <option key={idx} value={item.currency_code}>{item.country} - {item.currency_code}</option>
                              )}
                         </SelectField>
                         <InputField
                              value={data.price ?? ""}
                              updateValue={(val) => updatePackageDetails("price", val)}
                              type="number"
                              label="Package Price"
                              required={true}
                              fieldType="sm"
                              placeholder="Enter Package Price"
                              error={formErrors.price}
                              errorMessage="Please enter Package Price"
                         />
                    </div>
                    <InputField
                         value={data.shortDescription ?? ""}
                         updateValue={(val) => updatePackageDetails("shortDescription", val)}
                         type="text"
                         label="Short Description"
                         required={true}
                         fieldType="sm"
                         placeholder="Enter Short Description"
                         error={formErrors.shortDescription}
                         errorMessage="Please enter Short Description"
                    />
                    <TextEditor
                         label="Description"
                         required={true}
                         updateValue={(val) => updatePackageDetails("description", val)}
                         value={data.description ?? ""}
                    />
                    {themes && themes.length > 0 &&
                         <SelectField
                              value={data.themes}
                              updateValue={(val) => updatePackageDetails("themes", val)}
                              label="Themes"
                              fieldType="sm"
                              required={true}
                              error={formErrors.themes}
                              errorMessage="Please Select Themes"
                         >
                              <option value="">-- Select --</option>
                              {themes.map(item => <option value={item.title} key={item.title}>{item.title}</option>)}
                         </SelectField>
                    }
                    <div className="border-b-2 border-slate-200 pb-2 flex justify-between items-center gap-2">
                         <div className="text-2xl font-bold">Day Itinerary</div>
                         <button className="px-3 py-1 text-white rounded bg-theme hover:bg-black" onClick={handleAddItinerary}>Add Itinerary</button>
                    </div>
                    {data.itinerary && data.itinerary.length > 0 && data.itinerary.map((itineraryItem, idx) =>
                         <Fragment key={idx}>
                              <InputField
                                   value={itineraryItem.title ?? ""}
                                   updateValue={(val) => updatePackageDetails("title", val)}
                                   type="text"
                                   label={`Day ${idx + 1} Title`}
                                   required={true}
                                   fieldType="sm"
                                   placeholder={`Enter Day ${idx + 1} Title`}
                                   // error={formErrors.title}
                                   errorMessage={`Please enter Day ${idx + 1} Title`}
                              />
                              <TextEditor
                                   label={`Day ${idx + 1} Data`}
                                   required={true}
                                   updateValue={(val) => updatePackageDetails("exclusions", val)}
                                   value={data.exclusions ?? ""}
                              />
                         </Fragment>
                    )}
                    <div className="border-b-2 border-slate-200 text-2xl font-bold pb-2">Package Policies</div>
                    <TextEditor
                         label="Inclusions"
                         required={true}
                         updateValue={(val) => updatePackageDetails("inclusions", val)}
                         value={data.inclusions ?? ""}
                    />
                    <TextEditor
                         label="Exclusions"
                         required={true}
                         updateValue={(val) => updatePackageDetails("exclusions", val)}
                         value={data.exclusions ?? ""}
                    />
                    <TextEditor
                         label="Booking Terms"
                         required={true}
                         updateValue={(val) => updatePackageDetails("bookingTerms", val)}
                         value={data.bookingTerms ?? ""}
                    />
                    <TextEditor
                         label="Terms & Conditions"
                         required={true}
                         updateValue={(val) => updatePackageDetails("termsAndConditions", val)}
                         value={data.termsAndConditions ?? ""}
                    />
                    <TextEditor
                         label="Cancellation Policy"
                         required={true}
                         updateValue={(val) => updatePackageDetails("cancellationPolicy", val)}
                         value={data.cancellationPolicy ?? ""}
                    />
               </div>
          </div>
     )
}

export default AddPackage

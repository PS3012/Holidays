import { useRecoilState } from "recoil"
import { originURL } from "../recoil"
import EllipsisText from "./EllipsisText"
import { capitalizeWords } from "./otherFunctions"

function PackageOptionalsCard(_props) {
     const [origin] = useRecoilState(originURL)
     const { data: { id, image, title, description, category, inclusion, duration, sightSeeingType, price, pickUp, drop }, handleSelectedAddOn, isSelected } = _props
     return (
          <>

               <div className="optional-card grid sm:grid-cols-3 md:grid-cols-4 gap-3 p-3 border rounded-lg">
                    <img src={`${origin}${image}`} alt="Optional" className="aspect-square object-cover rounded shadow" />
                    <div className="details col-span-2">
                         <div className="text-lg font-bold mb-1">{capitalizeWords(title)}</div>
                         <div className="text-sm mb-2"><EllipsisText text={description} initialShow={100} /></div>
                         <div className="mb-2">
                              {category && category.length > 0 &&
                                   <div className="text-sm">
                                        <span className="font-semibold text-black">Category: </span>
                                        <span>{category.join(", ")}</span>
                                   </div>
                              }
                              {inclusion && inclusion.length > 0 &&
                                   <div className="text-sm">
                                        <span className="font-semibold text-black">Tour Inclusion: </span>
                                        <span>{inclusion.join(", ")}</span>
                                   </div>
                              }
                              {duration &&
                                   <div className="text-sm">
                                        <span className="font-semibold text-black">Duration: </span>
                                        <span>{duration}</span>
                                   </div>
                              }
                              {pickUp &&
                                   <div className="text-sm">
                                        <span className="font-semibold text-black">Pick up From: </span>
                                        <span>{pickUp.location} at {pickUp.time}</span>
                                   </div>
                              }
                              {drop &&
                                   <div className="text-sm">
                                        <span className="font-semibold text-black">Drop At: </span>
                                        <span>{drop.location}</span>
                                   </div>
                              }
                         </div>
                         {sightSeeingType &&
                              <div className="text-sm flex items-center gap-1">
                                   <span className="font-semibold text-black">Sightseeing Type: </span>
                                   <span className="bg-sky-500 px-3 py-1 text-white rounded">{sightSeeingType}</span>
                              </div>
                         }
                    </div>
                    <div className="md:text-right flex md:flex-col justify-between items-end sm:items-center md:items-end sm:col-span-3 md:col-auto pt-3 md:pt-0 border-t md:border-t-0">
                         <div className="items-center gap-4 block sm:flex md:block">
                              {price.adult &&
                                   <div className="mb-2">
                                        <div className="text-lg font-bold">INR {price.adult}</div>
                                        <div className="text-gray-700 text-sm">Per Adult, Onwards</div>
                                   </div>
                              }
                              {price.child &&
                                   <div className="mb-2">
                                        <div className="text-lg font-bold">INR {price.child}</div>
                                        <div className="text-gray-700 text-sm">Per Child, Onwards</div>
                                   </div>
                              }
                         </div>
                         <div>
                              <button
                                   onClick={() => handleSelectedAddOn(id)}
                                   className={`inline-block text-sm text-white rounded py-1 px-2 w-28 ${isSelected ? "bg-red-600" : "bg-green-600"} hover:bg-black`}
                              >
                                   {isSelected ? "Remove" : "Add"}
                              </button>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default PackageOptionalsCard

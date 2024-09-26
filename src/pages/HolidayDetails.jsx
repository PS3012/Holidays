import { useState } from "react"
import parse from "html-react-parser"
import AliceCarousel from "react-alice-carousel"
import Scroll from 'react-scroll';
import { useRecoilState } from "recoil"
import { MdDoubleArrow, MdOutlineFlight } from "react-icons/md"
import { GiCheckMark, GiHotMeal } from "react-icons/gi"
import { GoTelescope } from "react-icons/go"
import { RiHotelBedFill } from "react-icons/ri"
import { holidayDetails, internationalPackages } from "../StaticData"
import BreadCrumb from "../components/BreadCrumb"
import SingleDayBlock from "../components/SingleDayBlock"
import HolidayImageGallery from "../components/HolidayImageGallery"
import EllipsisText from "../components/EllipsisText"
import SendEnquiryForm from "../components/SendEnquiryForm"
import PackageCardType3 from "../components/PackageCardType3"
import FlightTicket from "../components/FlightTicket"
import { appName } from "../recoil"
import PackageOptionalsCard from "../components/PackageOptionalsCard";

function HolidayDetails() {
     const [prefixAppName] = useRecoilState(appName)
     const detailsTab = ["Overview", "Highlights", "Package Details", "Optionals", "Inclusions/Exclusions", "Terms & Conditions"]
     const [activeDay, setActiveDay] = useState()
     const [policyTabs, setPolicyTabs] = useState(0)
     const [includesTab, setIncludesTab] = useState("Hotels")
     const [category, setCategory] = useState("Budget")
     const [selectedAddOns, setSelectedAddOns] = useState([])
     let ScrollLink = Scroll.Link;
     let ScrollElement = Scroll.Element;
     const handleSelectedAddOn = (addOnId) => {
          if (selectedAddOns.includes(addOnId)) {
               setSelectedAddOns(prev => prev.filter(id => id !== addOnId));
          } else {
               setSelectedAddOns(prev => [...prev, addOnId]);
          }
     };

     return (
          <>

               <BreadCrumb pageName={holidayDetails.title} />

               <div id="holiday-details-page" className="max-w-7xl mx-auto px-4 py-6">
                    <HolidayImageGallery
                         big1="/images/package/dubai.jpg"
                         top1="/images/package/thailand.jpg"
                         center2="/images/package/malaysia.jpg"
                         center3="/images/theme/culture.jpg"
                         bottom1="/images/package/maldives.jpg"
                    />
                    <div className="holiday-details grid gap-4 border-b border-slate-400">
                         <div className="left-block">
                              <div className="tab-items flex overflow-x-auto border-b border-blue-300 sticky top-0 left-0 bg-white z-20">
                                   {detailsTab.map((detail, index) =>
                                        <ScrollLink
                                             key={index} spy={true} smooth={true} duration={500}
                                             to={detail.split(" ").join("-")}
                                             activeClass="border-sky-600 text-sky-600 font-semibold"
                                             className={`px-4 lg:px-5 py-3 lg:py-4 border-b-2 transparent-border cursor-pointer transition-all whitespace-nowrap`}
                                        >{detail}</ScrollLink>
                                   )}
                              </div>
                              <ScrollElement name={detailsTab[0].split(" ").join("-")} className="py-6 border-b border-slate-400">
                                   <div className="title text-3xl font-bold mb-3">{holidayDetails.title}</div>
                                   <div className="font-medium flex gap-2 items-center text-sky-600 mb-2">
                                        <span>Phuket (3N)</span> <MdDoubleArrow />
                                        <span>Krabi (2N)</span> <MdDoubleArrow />
                                        <span>Phi Phi Island (2N)</span>
                                   </div>
                                   <div className="flex gap-2 font-semibold text-sm mb-3">
                                        {holidayDetails.tags.map((tag, index) =>
                                             <div className="bg-green-100 px-3 py-1 rounded" key={index}>{tag}</div>
                                        )}
                                   </div>
                                   <div className="pb-3 mb-3 border-b border-slate-200">
                                        <div className="font-medium text-xl">
                                             <div>Starting From</div>
                                             <div>
                                                  <span className="font-bold text-theme">
                                                       INR {holidayDetails.category.find(item => item.category === category)?.price.toLocaleString()}
                                                  </span>
                                                  <span className="text-base">&nbsp;Per Person</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="package-inclusions mb-3">
                                        <div className="flex justify-between items-start gap-3 mb-2">
                                             <div className="text-2xl font-bold">Package Includes</div>
                                             <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="block text-gray-700 border border-gray-200 rounded text-sm sm:text-base md:text-lg py-1 md:py-2 px-2 sm:px-3 md:px-4 lg:px-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                                  {holidayDetails.category.map((item, index) =>
                                                       <option value={item.category} key={index}>{item.category}</option>
                                                  )}
                                             </select>
                                        </div>
                                        <div className="flex overflow-x-auto gap-2 mb-3 border-b">
                                             <div
                                                  className={`flex gap-2 items-center px-4 py-1 text-sm transition-colors cursor-pointer border-b whitespace-nowrap ${includesTab === "Hotels" ? "border-theme text-theme font-semibold" : "border-transparent"}`}
                                                  onClick={() => setIncludesTab("Hotels")}
                                             >
                                                  <RiHotelBedFill /> <span>Hotels</span>
                                             </div>
                                             <div
                                                  className={`flex gap-2 items-center px-4 py-1 text-sm transition-colors cursor-pointer border-b whitespace-nowrap ${includesTab === "Sightseeing" ? "border-theme text-theme font-bold" : "border-transparent font-semibold"}`}
                                                  onClick={() => setIncludesTab("Sightseeing")}
                                             >
                                                  <GoTelescope /> <span>Sightseeing</span>
                                             </div>
                                             <div
                                                  className={`flex gap-2 items-center px-4 py-1 text-sm transition-colors cursor-pointer border-b whitespace-nowrap ${includesTab === "Meals" ? "border-theme text-theme font-bold" : "border-transparent font-semibold"}`}
                                                  onClick={() => setIncludesTab("Meals")}
                                             >
                                                  <GiHotMeal /> <span>Meals</span>
                                             </div>
                                             <div
                                                  className={`flex gap-2 items-center px-4 py-1 text-sm transition-colors cursor-pointer border-b whitespace-nowrap ${includesTab === "Flights" ? "border-theme text-theme font-bold" : "border-transparent font-semibold"}`}
                                                  onClick={() => setIncludesTab("Flights")}
                                             >
                                                  <MdOutlineFlight /> <span>Flights</span>
                                             </div>
                                        </div>
                                        {includesTab === "Hotels" &&
                                             <div>
                                                  <div className="flex flex-wrap gap-3 mb-3">
                                                       {holidayDetails.category.map((item, index) =>
                                                            <div
                                                                 className={`py-1 px-3 rounded-2xl text-sm transition-colors cursor-pointer ${category === item.category ? " font-semibold bg-theme text-white" : " bg-slate-100 hover:bg-slate-200"}`}
                                                                 onClick={() => setCategory(item.category)} key={index}
                                                            >{item.category}</div>
                                                       )}
                                                  </div>
                                                  <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded bg-clip-border">
                                                       <table className="w-full text-left table-auto min-w-max">
                                                            <thead>
                                                                 <tr>
                                                                      <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                           Location
                                                                      </th>
                                                                      <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                           Name
                                                                      </th>
                                                                      <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                           Category
                                                                      </th>
                                                                      <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                           Meal Plan
                                                                      </th>
                                                                 </tr>
                                                            </thead>
                                                            <tbody>
                                                                 {holidayDetails.category.map((item, index) =>
                                                                      item.category === category &&
                                                                      <tr className="hover:bg-slate-50" key={index}>
                                                                           <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                                {item.hotel.location}
                                                                           </td>
                                                                           <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                                {item.hotel.name}
                                                                           </td>
                                                                           <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                                {item.category}
                                                                           </td>
                                                                           <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                                {item.hotel.mealPlan}
                                                                           </td>
                                                                      </tr>
                                                                 )}
                                                            </tbody>
                                                       </table>
                                                  </div>
                                             </div>
                                        }
                                        {includesTab === "Sightseeing" &&
                                             <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded bg-clip-border">
                                                  <table className="w-full text-left table-auto min-w-max">
                                                       <thead>
                                                            <tr>
                                                                 <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                      Days
                                                                 </th>
                                                                 <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                      Description
                                                                 </th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {holidayDetails.packageDetails.map((item, index) =>
                                                                 item.sightseeing && item.sightseeing.length > 0 &&
                                                                 <tr className="hover:bg-slate-50" key={index}>
                                                                      <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                           Day {(index + 1).toString().padStart(2, 0)}
                                                                      </td>
                                                                      <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                           {item.sightseeing.map((sight) => sight.title).join(", ")}
                                                                      </td>
                                                                 </tr>
                                                            )}
                                                       </tbody>
                                                  </table>
                                             </div>
                                        }
                                        {includesTab === "Meals" &&
                                             <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded bg-clip-border">
                                                  <table className="w-full text-left table-auto min-w-max">
                                                       <thead>
                                                            <tr>
                                                                 <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                      Days
                                                                 </th>
                                                                 <th className="py-2 px-3 border-b border-slate-300 bg-slate-50 text-sm font-bold leading-none">
                                                                      Description
                                                                 </th>
                                                            </tr>
                                                       </thead>
                                                       <tbody>
                                                            {holidayDetails.packageDetails.map((item, index) =>
                                                                 item.inclusions && item.inclusions.length > 0 &&
                                                                 <tr className="hover:bg-slate-50" key={index}>
                                                                      <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                           Day {(index + 1).toString().padStart(2, 0)}
                                                                      </td>
                                                                      <td className="py-2 px-3 border-b border-slate-200 text-sm text-slate-800">
                                                                           {item.inclusions.join(", ")}
                                                                      </td>
                                                                 </tr>
                                                            )}
                                                       </tbody>
                                                  </table>
                                             </div>
                                        }
                                        {includesTab === "Flights" &&
                                             <div className="grid gap-4">
                                                  <div>
                                                       <div className="font-semibold text-xl mb-2">Onward</div>
                                                       <div className="grid gap-3">
                                                            <FlightTicket />
                                                            <FlightTicket />
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="font-semibold text-xl mb-2">Return</div>
                                                       <div className="grid gap-3">
                                                            <FlightTicket />
                                                       </div>
                                                  </div>
                                             </div>
                                        }
                                   </div>
                                   <div className="overview text-gray-600">{holidayDetails.overview}</div>
                              </ScrollElement>
                              {holidayDetails.highlights && holidayDetails.highlights.length > 0 &&
                                   <ScrollElement name={detailsTab[1].split(" ").join("-")} className="py-6 border-b border-slate-400">
                                        <div className="text-2xl font-bold mb-4">Holiday Highlights</div>
                                        <div className="alice-white-icons highlights">
                                             <AliceCarousel
                                                  disableDotsControls
                                                  mouseTracking
                                                  keyboardNavigation
                                                  touchMoveDefaultEvents
                                                  items={holidayDetails.highlights.map((highlight, idx) =>
                                                       <div className="px-2 py-4" key={idx}>
                                                            <div className="image mb-2">
                                                                 <img src={`${prefixAppName}${highlight.image}`} alt="Highlight" className="w-full rounded object-cover shadow" />
                                                            </div>
                                                            <div className="text-lg font-bold mb-1">{idx + 1}. {highlight.title}</div>
                                                            <div className="text-sm text-gray-600 font-medium"><EllipsisText text={highlight.content} initialShow={100} /></div>
                                                       </div>
                                                  )}
                                                  responsive={{
                                                       0: { items: 1 },
                                                       600: { items: 2 },
                                                       800: { items: 3 }
                                                  }}
                                             />
                                        </div>
                                   </ScrollElement>
                              }
                              {holidayDetails.packageDetails && holidayDetails.packageDetails.length > 0 &&
                                   <ScrollElement name={detailsTab[2].split(" ").join("-")} className="py-6 border-b border-slate-400">
                                        <div className="text-2xl font-bold mb-4">Detailed Iternary</div>
                                        <div className="grid gap-3">
                                             {holidayDetails.packageDetails.map((day, index) =>
                                                  <SingleDayBlock
                                                       key={index}
                                                       index={index}
                                                       activeDay={activeDay}
                                                       title={day.title}
                                                       overview={day.overview}
                                                       image={day.image}
                                                       sightseeing={day.sightseeing}
                                                       inclusions={day.inclusions}
                                                       handleDayClick={() => setActiveDay(prev => prev === index ? -1 : index)}
                                                  />
                                             )}
                                        </div>
                                   </ScrollElement>
                              }
                              {holidayDetails.optionals && holidayDetails.optionals.length > 0 &&
                                   <ScrollElement name={detailsTab[3].split(" ").join("-")} className="py-6 border-b border-slate-400">
                                        <div className="text-2xl font-bold mb-4">Optionals</div>
                                        <div className="grid gap-3">
                                             {holidayDetails.optionals.map((optional, index) =>
                                                  <PackageOptionalsCard data={optional} key={index} isSelected={selectedAddOns.includes(optional.id)} handleSelectedAddOn={handleSelectedAddOn} />
                                             )}
                                        </div>
                                   </ScrollElement>
                              }
                              {((holidayDetails.inclusions && holidayDetails.inclusions.length > 0) || (holidayDetails.exclusions && holidayDetails.exclusions.length > 0)) &&
                                   <ScrollElement name={detailsTab[4].split(" ").join("-")} className="py-6 border-b border-slate-400">
                                        {holidayDetails.inclusions.length > 0 &&
                                             <div className="mb-6">
                                                  <div className="text-xl font-bold mb-3 pl-5 relative pad-start-head inclusion">Inclusions</div>
                                                  <div className="grid gap-2">
                                                       {holidayDetails.inclusions.map((inclusion, index) =>
                                                            <div className="text-gray-600 flex gap-2 pl-4" key={index}>
                                                                 <span className="inline-block pt-1 text-sm"><GiCheckMark /></span> <span>{inclusion}</span>
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                        }
                                        {holidayDetails.exclusions.length > 0 &&
                                             <div>
                                                  <div className="text-xl font-bold mb-3 pl-5 relative pad-start-head exclusion">Exclusions</div>
                                                  <div className="grid gap-2">
                                                       {holidayDetails.exclusions.map((inclusion, index) =>
                                                            <div className="text-gray-600 flex gap-2 pl-4" key={index}>
                                                                 <span className="inline-block pt-1 text-sm"><GiCheckMark /></span> <span>{inclusion}</span>
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                        }
                                   </ScrollElement>
                              }
                              {holidayDetails.policies && holidayDetails.policies.length > 0 &&
                                   <ScrollElement name={detailsTab[5].split(" ").join("-")} className="py-6 border-b border-slate-400">
                                        <div className="flex overflow-x-auto gap-4 mb-4">
                                             <div
                                                  className={`text-lg font-bold border-b-2 pb-1 cursor-pointer whitespace-nowrap ${policyTabs === 0 ? "border-sky-600 text-sky-600" : "border-transparent"}`}
                                                  onClick={() => setPolicyTabs(0)}
                                             >Terms & Conditions</div>
                                             <div
                                                  className={`text-lg font-bold border-b-2 pb-1 cursor-pointer whitespace-nowrap ${policyTabs === 1 ? "border-sky-600 text-sky-600" : "border-transparent"}`}
                                                  onClick={() => setPolicyTabs(1)}
                                             >Booking Terms</div>
                                             <div
                                                  className={`text-lg font-bold border-b-2 pb-1 cursor-pointer whitespace-nowrap ${policyTabs === 2 ? "border-sky-600 text-sky-600" : "border-transparent"}`}
                                                  onClick={() => setPolicyTabs(2)}
                                             >Cancellation Policy</div>
                                        </div>
                                        {policyTabs === 0 && holidayDetails.policies.map((policy, index) =>
                                             <div key={index} className={index === holidayDetails.policies.length - 1 ? "" : "mb-3"}>
                                                  <div className="font-bold text-gray-800">{policy.head}</div>
                                                  <div className="text-gray-600 text-sm">{parse(policy.content)}</div>
                                             </div>
                                        )}
                                        {policyTabs === 1 &&
                                             <ul className="list-disc list-inside text-slate-900 grid gap-2 ">
                                                  <li>50 advance to be paid at the time of booking.</li>
                                                  <li>Air fair is calcualted at the time of proposal creation and is subject to change at the time of booking.</li>
                                                  <li>100 payment is to be made for domestic packages before 4 days of departure date.</li>
                                                  <li>100 payment is to be made for international packages before 7 days of departure date.</li>
                                                  <li>In case of cancellation standard cancellation policies will be applicable or may be changed as per the policies</li>
                                             </ul>
                                        }
                                        {policyTabs === 2 &&
                                             <div>
                                                  <div className="text-lg font-medium mb-2">
                                                       If you Cancel your Holiday
                                                  </div>
                                                  <ul className="list-disc list-inside text-slate-900 grid gap-2 ">
                                                       <li>30 days or more before date of departure : 25% of total cost</li>
                                                       <li>29 - 20 days before date of departure : 50% of total cost</li>
                                                       <li>19 days or less before date of departure : 100% of total cost</li>
                                                  </ul>
                                             </div>
                                        }
                                   </ScrollElement>
                              }
                              <div className="py-6">
                                   <div className="text-sm text-gray-600 mb-2">
                                        <strong>Please Note:</strong> For Issuance of the Flight Tickets, we require Full Payment of Airfare.
                                   </div>
                                   <div className="text-sm text-gray-600 mb-2">
                                        <strong>Please Note:</strong> Non- Refundable Services in the tour package has to be paid in full at the time of Booking.
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        <strong>Please Note:</strong> Payment Policy is non-negotiable and has to be paid accordingly.
                                   </div>
                              </div>
                         </div>
                         <div className="right-block py-4">
                              <div className="shadow-lg rounded-lg p-3">
                                   <div className="font-bold text-xl pb-3 mb-3 border-b-2 border-slate-700">Check Rates & Send Enquiry for {holidayDetails.title}</div>
                                   <SendEnquiryForm />
                              </div>
                         </div>
                    </div>
                    <div id="inclusive-packages">
                         <div className="max-w-6xl mx-auto px-4 py-10">
                              <div className="head-block text-center max-w-4xl mx-auto mb-4">
                                   <div className="head text-2xl md:text-3xl font-bold">Suggested Holiday Packages</div>
                              </div>
                              <div className="alice-white-icons">
                                   <AliceCarousel
                                        autoPlay
                                        autoPlayStrategy="default"
                                        autoPlayInterval={5000}
                                        disableDotsControls
                                        mouseTracking
                                        keyboardNavigation
                                        touchMoveDefaultEvents
                                        infinite
                                        items={internationalPackages.map((pack, index) =>
                                             <div className="px-2 py-4" key={index}>
                                                  <PackageCardType3 image={pack.image} destination={pack.destination} />
                                             </div>
                                        )}
                                        responsive={{
                                             0: { items: 1 },
                                             600: { items: 2 },
                                             991: { items: 3 }
                                        }}
                                   />
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default HolidayDetails

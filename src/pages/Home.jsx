import { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import parse from 'html-react-parser'
import { Link } from "react-router-dom"
import { benefits, defaultCountries, internationalPackages, nightPackages } from "../StaticData"
import PackageCardType1 from "../components/PackageCardType1"
import PackageCardType2 from "../components/PackageCardType2"
import ThemeCard from "../components/ThemeCard"
import PackageCardType3 from "../components/PackageCardType3"
import HolidaySearchForm from "../components/HolidaySearchForm"
import { useSelector } from "react-redux";

function Home() {
     const { origin } = location
     const { themes: allThemes } = useSelector(state => state.themes)
     const { homeTours } = useSelector(state => state.homeTours)
     const [uniqueStay, setUniqueStay] = useState("")
     const [nights, setNights] = useState("")
     useEffect(() => {
          setUniqueStay(defaultCountries[0])
          setNights(nightPackages[0])
          return () => {
               setUniqueStay("")
               setNights("")
          }
     }, [])
     return (
          <>

               <div id="home-banner" className="relative">
                    <div className="image">
                         <img src={`${origin}/images/banner/holidayBanner.png`} alt="Banner" className="w-full object-cover" />
                    </div>
                    <div className="overlay-container flex items-center justify-center absolute top-0 left-0 px-4 w-full h-full bg-neutral-950/[.20]">
                         <HolidaySearchForm showSuggestions={true} />
                    </div>
               </div>

               <div id="benefits">
                    <div className="max-w-6xl mx-auto px-4 py-6 grid lg:grid-cols-3 gap-4 border-b border-slate-300">
                         {benefits.map((benefit, index) =>
                              <div className={`benefit-block grid gap-3 items-center p-2 rounded ${benefit.background}`} key={index}>
                                   <div className="icon bg-white rounded border border-slate-300 p-2">
                                        <img src={`${origin}${benefit.image}`} alt="Benefit" />
                                   </div>
                                   <div>
                                        <div className="font-bold text-lg">{benefit.head}</div>
                                        <div className="text-sm">{parse(benefit.text)}</div>
                                   </div>
                              </div>
                         )}
                    </div>
               </div>

               {homeTours && homeTours.length > 0 && homeTours.some(pack => pack.category === "International") &&
                    <div id="international-packages">
                         <div className="max-w-6xl mx-auto px-4 py-10">
                              <div className="head-block text-center max-w-4xl mx-auto mb-4">
                                   <div className="head text-2xl md:text-3xl font-bold mb-1 md:mb-2">International Travel Packages</div>
                                   <div className="text-sm md:text-base">Whether it&lsquo;s your first international trip or you have traveled abroad multiple times, planning a holiday to a distinct land is always a special.</div>
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
                                        items={homeTours.filter(pack => pack.category === "International").map(pack =>
                                             <div className="px-2 py-4" key={pack.id}>
                                                  <PackageCardType1
                                                       image={`/images/package/${pack.destination.split(" ").join("-").toLowerCase()}.jpg`}
                                                       destination={pack.destination}
                                                       startingPrice={pack.startingPrice}
                                                  />
                                             </div>
                                        )}
                                        responsive={{
                                             0: { items: 2 },
                                             576: { items: 3 },
                                             768: { items: 4 },
                                             991: { items: 5 }
                                        }}
                                   />
                              </div>
                         </div>
                    </div>
               }

               <div id="home-mid-banner" className="max-w-6xl mx-auto px-4">
                    <div className="relative rounded shadow-lg overflow-hidden">
                         <div className="image">
                              <img src={`${origin}/images/banner/mid-banner.jpg`} alt="..." className="w-full object-cover" />
                         </div>
                         <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center bg-neutral-950/[.30]">
                              <div className="max-w-3xl text-white w-full px-5 py-3">
                                   <div className="head font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal mb-5">Top 10 Destinations for an International Summer Holiday</div>
                                   <Link to="/" className="bg-white hover:bg-theme text-black hover:text-white px-8 py-3 shadow rounded text-lg font-semibold">Explore</Link>
                              </div>
                         </div>
                    </div>
               </div>

               {homeTours && homeTours.length > 0 && homeTours.some(pack => pack.category === "Domestic") &&
                    <div id="domestic-packages">
                         <div className="max-w-6xl mx-auto px-4 py-10">
                              <div className="head-block text-center max-w-4xl mx-auto mb-4">
                                   <div className="head text-2xl md:text-3xl font-bold mb-1 md:mb-2">Domestic Travel Packages</div>
                                   <div className="text-sm md:text-base">Whether it&lsquo;s your first domestic trip or you have traveled abroad multiple times, planning a holiday to a distinct land is always a special.</div>
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
                                        items={homeTours.filter(pack => pack.category === "Domestic").map(pack =>
                                             <div className="px-2 py-4" key={pack.id}>
                                                  <PackageCardType1
                                                       image={`/images/package/${pack.destination.split(" ").join("-").toLowerCase()}.jpg`}
                                                       destination={pack.destination}
                                                       startingPrice={pack.startingPrice}
                                                  />
                                             </div>
                                        )}
                                        responsive={{
                                             0: { items: 2 },
                                             576: { items: 3 },
                                             768: { items: 4 },
                                             991: { items: 5 }
                                        }}
                                   />
                              </div>
                         </div>
                    </div>
               }

               <div id="worldwide-unique">
                    <div className="max-w-6xl mx-auto px-4 py-10 border-b border-slate-300">
                         <div className="head-block text-center max-w-4xl mx-auto mb-4">
                              <div className="head text-2xl md:text-3xl font-bold mb-2">Explore Worldwide Unique Stays.</div>
                              <div className="text-sm md:text-base mb-3">Whether it&lsquo;s your first domestic trip or you have traveled abroad multiple times, planning a holiday to a distinct land is always a special.</div>
                              <div className="flex gap-3 justify-center overflow-x-auto pb-1home-tab-scroll">
                                   {defaultCountries.map((country, index) => (
                                        <div
                                             key={index}
                                             onClick={() => setUniqueStay(country)}
                                             className={`font-medium text-sm px-2 py-1 rounded text-nowrap cursor-pointer ${uniqueStay === country ? "bg-theme text-white" : "hover:text-white bg-slate-100 hover:bg-theme border hover:border-theme"}`}
                                        >{country}</div>
                                   ))}
                              </div>
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
                                             <PackageCardType2 image={pack.image} destination={pack.destination} />
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

               {allThemes && allThemes.length > 0 &&
                    <div id="theme-destination">
                         <div className="max-w-6xl mx-auto px-4 py-10 border-b border-slate-300">
                              <div className="head-block text-center max-w-4xl mx-auto mb-4">
                                   <div className="head text-2xl md:text-3xl font-bold mb-1 md:mb-2">Explore Destination By Theme</div>
                                   <div className="text-sm md:text-base">Our experts recommend our top experiences and themed vacation packages across our destinations that you can customize to your personal interests.</div>
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
                                        items={allThemes.map(theme =>
                                             <div className="px-2 pt-4" key={theme.id}>
                                                  <ThemeCard
                                                       image={`/images/theme/${theme.title.toLowerCase()}.jpg`}
                                                       title={theme.title}
                                                       destinations={theme.destinations}
                                                  />
                                             </div>
                                        )}
                                        responsive={{
                                             0: { items: 2 },
                                             576: { items: 3 },
                                             768: { items: 4 },
                                             991: { items: 5 }
                                        }}
                                   />
                              </div>
                         </div>
                    </div>
               }

               <div id="inclusive-packages">
                    <div className="max-w-6xl mx-auto px-4 py-10">
                         <div className="head-block text-center max-w-4xl mx-auto mb-4">
                              <div className="head text-2xl md:text-3xl font-bold mb-2">All Inclusive Holiday Packages</div>
                              <div className="text-sm md:text-base mb-3">Whether it&lsquo;s your first domestic trip or you have traveled abroad multiple times, planning a holiday to a distinct land is always a special.</div>
                              <div className="flex gap-3 flex-wrap justify-center">
                                   {nightPackages.map((night, index) => (
                                        <div
                                             key={index}
                                             onClick={() => setNights(night)}
                                             className={`font-medium text-sm px-3 py-1 rounded text-nowrap cursor-pointer ${nights === night ? "bg-theme text-white" : "hover:text-white bg-slate-100 hover:bg-theme border hover:border-theme"}`}
                                        >{night}</div>
                                   ))}
                              </div>
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

          </>
     )
}

export default Home

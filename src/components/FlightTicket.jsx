
function FlightTicket() {
     const { origin } = location
     return (
          <>

               <div className="flight-ticket grid sm:grid-cols-4 bg-sky-100 rounded-lg shadow p-4">
                    <div className="sm:col-span-3 border-dashed border-zinc-600 relative left-block border-b-2 sm:border-b-0 sm:border-r-2 pb-4 sm:pb-0 sm:pr-4">
                         <div className="grid grid-cols-5 gap-3">
                              <div className="col-span-2 text-right">
                                   <div className="text-lg md:text-xl font-bold">22:00 (AMD)</div>
                                   <div className="text-sm md:text-base font-semibold">Ahmedabad , IN - Sardar Vallabh Bhai Patel Intl (AMD)</div>
                                   <div className="text-xs md:text-sm">Thu 24 Oct, 2024</div>
                              </div>
                              <div className="pt-2">
                                   <div className="flex gap-1 items-center">
                                        <div className="w-3 rounded-full h-3 bg-sky-600"></div>
                                        <div className="flex-auto border-t-2 border-dashed border-sky-600"></div>
                                        <div className="w-3 rounded-full h-3 bg-sky-600"></div>
                                   </div>
                              </div>
                              <div className="col-span-2">
                                   <div className="text-lg md:text-xl font-bold">22:00 (DPS)</div>
                                   <div className="text-sm md:text-base font-semibold">Bali Denpasar , ID - Ngurah Rai (DPS)</div>
                                   <div className="text-xs md:text-sm">Fri 25 Oct, 2024</div>
                              </div>
                         </div>
                    </div>
                    <div className="pt-4 sm:pt-0 sm:pl-4 flex sm:flex-col justify-center items-center sm:items-start gap-4 sm:gap-2">
                         <div className="flex gap-2">
                              <div className="pt-1">
                                   <img src={`${origin}/images/airline.png`} alt="Airline" className="w-7 h-7" />
                              </div>
                              <div>
                                   <div className="font-bold">Vistara</div>
                                   <div className="font-semibold text-sm">UK - 959</div>
                              </div>
                         </div>
                         <div className="text-sm text-gray-700">
                              <span className="text-black font-semibold">Class</span> Economy
                         </div>
                    </div>
               </div>

          </>
     )
}

export default FlightTicket


function PackageCardType3Skeleton() {
     return (
          <>

               <div className="package-card-type-2 rounded relative overflow-hidden shadow-lg">
                    <div className="h-52 rounded animate-pulse bg-gray-300"></div>
                    <div className="details p-3 font-medium">
                         <div className="mb-2 bg-gray-300 h-4 rounded animate-pulse"></div>
                         <div className="bg-gray-300 h-6 rounded animate-pulse mb-1"></div>
                         <div className="mb-2 bg-gray-300 h-6 rounded animate-pulse w-1/3"></div>
                         <div className="mb-2 bg-gray-300 h-4 rounded animate-pulse w-1/2"></div>
                         <div className="grid grid-cols-3 gap-2 mb-3">
                              <div className="bg-gray-300 h-6 rounded animate-pulse"></div>
                              <div className="bg-gray-300 h-6 rounded animate-pulse"></div>
                              <div className="bg-gray-300 h-6 rounded animate-pulse"></div>
                              <div className="bg-gray-300 h-6 rounded animate-pulse"></div>
                         </div>
                         <div className="grid grid-cols-5 gap-2 items-end">
                              <div className="col-span-3">
                                   <div className="mb-neg-1">
                                        <div className="bg-gray-400 rounded h-4 animate-pulse w-1/3"></div>
                                   </div>
                                   <div className="bg-slate-200 px-2 pb-2 pt-4 rounded grid gap-3">
                                        <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
                                        <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
                                        <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
                                   </div>
                              </div>
                              <div className="text-right col-span-2">
                                   <div className="inline-block bg-gray-300 h-4 rounded animate-pulse w-3/4"></div>
                                   <div className="mb-1 bg-gray-300 h-4 rounded animate-pulse"></div>
                                   <div className="mb-1 bg-gray-300 h-4 rounded animate-pulse"></div>
                                   <div className="flex justify-end items-center gap-2">
                                        <div className={`inline-block bg-gray-300 w-7 h-7 rounded-full animate-pulse`}></div>
                                        <div className={`inline-block bg-gray-300 h-7 w-2/3 rounded animate-pulse`}></div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default PackageCardType3Skeleton

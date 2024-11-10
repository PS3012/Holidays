import { IoClose } from "react-icons/io5"

function SightSeeingModal(_props) {
     const { origin } = location
     const { data, onCloseModal } = _props
     return (
          <>

               <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
                              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                                   <div className="flex items-start justify-between gap-3 p-3 text-xl border-b">
                                        <div className="font-bold">{data.title}</div>
                                        <div className="cursor-pointer" onClick={onCloseModal}><IoClose /></div>
                                   </div>
                                   <div className="grid md:grid-cols-3 p-3 gap-3">
                                        <img src={`${origin}${data.image}`} alt="Sightseeing" className="aspect-square object-cover rounded max-w-96 w-full" />
                                        <div className="md:col-span-2">
                                             <div className="text-sm">{data.description}</div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default SightSeeingModal

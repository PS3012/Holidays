import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { formatPrice } from "./OtherFunctions"

function PackageCardType1(_props) {
     const { origin } = location
     const currencyData = useSelector(state => state.currencyData)
     return (
          <>

               <Link to={`/tour-destination/${_props.destination.split(" ").join("-").toLowerCase()}`} className="package-card-type-1 rounded relative overflow-hidden shadow-lg block">
                    <div className="image">
                         <img src={`${origin}${_props.image}`} alt={_props.destination} />
                    </div>
                    <div className="content absolute top-0 left-0 bottom-0 right-0 p-3 flex items-end text-white bg-neutral-950/[.30]">
                         <div className="w-full">
                              <div className="text-xl md:text-2xl font-bold mb-1">{_props.destination}</div>
                              <div className="text-sm md:text-base font-medium mb-2">Starting From</div>
                              <div className="text-lg md:text-xl font-bold">
                                   {formatPrice(currencyData, _props.startingPrice)}
                                   <span className="text-xs md:text-sm">&nbsp;/ Person</span>
                              </div>
                         </div>
                    </div>
               </Link>

          </>
     )
}

export default PackageCardType1

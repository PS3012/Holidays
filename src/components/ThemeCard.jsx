import { useRecoilState } from "recoil"
import { appName, originURL } from "../recoil"
import { Link } from "react-router-dom"

function ThemeCard(_props) {
     const [origin] = useRecoilState(originURL)
     const [prefixAppName] = useRecoilState(appName)
     return (
          <>

               <Link to={`${prefixAppName}/tour-destination/${_props.title.split(" ").join("-").toLowerCase()}`} className="block theme-card">
                    <div className="image mb-2">
                         <img src={`${origin}${_props.image}`} alt={_props.title} className="w-full object-cover rounded" />
                    </div>
                    <div className="text-xl font-bold mb-1">{_props.title}</div>
                    <div className="text-sm text-slate-500">60+ Destinations</div>
               </Link>

          </>
     )
}

export default ThemeCard

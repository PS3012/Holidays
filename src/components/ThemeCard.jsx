import { Link } from "react-router-dom"

function ThemeCard(_props) {
     const { origin } = location
     return (
          <>

               <Link to={`/tour-destination/${_props.title.split(" ").join("-").toLowerCase()}`} className="block theme-card">
                    <div className="image mb-2">
                         <img
                              src={`${origin}${_props.image}`}
                              alt={_props.title} className="w-full object-cover rounded"
                              onError={({ currentTarget }) => {
                                   currentTarget.onerror = null;
                                   currentTarget.src = `${origin}/images/notfound.jpg`;
                              }}
                         />
                    </div>
                    <div className="text-xl font-bold mb-1">{_props.title}</div>
                    <div className="text-sm text-slate-500">{_props.destinations} Destinations</div>
               </Link>

          </>
     )
}

export default ThemeCard

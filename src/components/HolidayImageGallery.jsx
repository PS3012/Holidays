
function HolidayImageGallery(_props) {
     return (
          <>

               <div className="holiday-gallery md:grid md:gap-4 mb-3">
                    <div className="gallery-item big1" style={{ gridArea: "big1" }}>
                         <img src={_props.big1} alt="Image" className="w-full h-full object-cover rounded-lg shadow" />
                    </div>
                    <div className="gallery-item top1 hidden md:block" style={{ gridArea: "top1" }}>
                         <img src={_props.top1} alt="Image 1" className="w-full h-full object-cover rounded-lg shadow" />
                    </div>
                    <div className="gallery-item center2 hidden md:block" style={{ gridArea: "center2" }}>
                         <img src={_props.center2} alt="Image 2" className="w-full h-full object-cover rounded-lg shadow" />
                    </div>
                    <div className="gallery-item center3 hidden md:block" style={{ gridArea: "center3" }}>
                         <img src={_props.center3} alt="Image 3" className="w-full h-full object-cover rounded-lg shadow" />
                    </div>
                    <div className="gallery-item bottom1 gallery-top hidden md:block" style={{ gridArea: "bottom1" }}>
                         <img src={_props.bottom1} alt="Image 4" className="w-full h-full object-cover rounded-lg shadow" />
                    </div>
               </div>

          </>
     )
}

export default HolidayImageGallery

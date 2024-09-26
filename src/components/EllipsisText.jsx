import { useState } from "react"

function EllipsisText(_props) {
     const { initialShow, text } = _props
     const [textLength, setTextLength] = useState(initialShow)
     const handleEllipsisClick = () => {
          setTextLength(prev => prev === initialShow ? text.length : initialShow)
     }
     return (
          <>

               <span>{text.slice(0, textLength)}</span>&nbsp;
               {text.length > initialShow &&
                    <span
                         onClick={handleEllipsisClick}
                         className="text-xs text-sky-500 border-b-2 font-semibold cursor-pointer hover:border-sky-500"
                    >
                         {textLength === initialShow ? "Read More" : "Read Less"}
                    </span>
               }

          </>
     )
}

export default EllipsisText

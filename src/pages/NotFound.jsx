import { Link } from "react-router-dom"

function NotFound() {
     return (
          <>

               <div id="not-found-page">
                    <div className="max-w-4xl mx-auto py-10 px-4">
                         <div className="grid md:grid-cols-2 md:gap-4 items-center">
                              <div className="image">
                                   <img src={`/images/notFound.svg`} alt="..." className="w-full mx-auto" />
                              </div>
                              <div className="content text-center md:text-left">
                                   <div className="head text-8xl font-bold mb-3">404</div>
                                   <div className="text-4xl font-semibold mb-3">UH OH! You are Lost.</div>
                                   <div className="font-medium mb-3">
                                        The page you are looking for does not exist. How you got here is mystery. Click the button to go back to the home page.
                                   </div>
                                   <div>
                                        <Link to="/" className={`bg-theme hover:bg-black inline-block text-white rounded py-2 px-4`}>Go to Home Page</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default NotFound

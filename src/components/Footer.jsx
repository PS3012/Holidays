import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6"
import { BiSolidPhoneCall } from "react-icons/bi"
import { MdEmail } from "react-icons/md";
import { IoArrowForwardCircle } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { collection, addDoc } from 'firebase/firestore';
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { footerBlocks } from "../StaticData";
import { db } from "../config/firebase";

export default function Footer() {
     const { origin } = location
     const { user } = useSelector(state => state.user)
     const { themes } = useSelector(state => state.themes)
     const { destinations } = useSelector(state => state.defaultDestinations)
     const { data: contactDetails } = useSelector(state => state.contactDetails)
     const [email, setEmail] = useState(user.email)
     const [loading, setLoading] = useState(false)
     const handleSubscription = async () => {
          if (!email || email.trim() === "") {
               toast.error("Enter valid email!")
          } else {
               try {
                    setLoading(true)
                    await addDoc(collection(db, 'newsletters'), { email: email });
                    setLoading(false)
                    setEmail("")
                    toast.success("Thank you for subscribing! 🎉")
               } catch (err) {
                    toast.error("Error adding title!")
                    console.error('Error adding document: ', err);
               }
          }
     }
     return (
          <>

               <footer className="bg-slate-200">
                    <div className="max-w-7xl mx-auto px-4 font-medium">
                         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-4 py-10 border-b border-slate-400">
                              {footerBlocks.map((block, index) =>
                                   <div className="block lg:col-span-2" key={index}>
                                        <div className="head text-xl uppercase font-bold mb-4 text-theme">
                                             <span className="italic border-b-2 border-theme">{block.head}</span>
                                        </div>
                                        <div className="grid gap-1">
                                             {block.links.map((item, idx) =>
                                                  <LinkItem title={item.title} link={`/${item.link}`} key={idx} />
                                             )}
                                        </div>
                                   </div>
                              )}
                              {destinations && destinations.length > 0 &&
                                   <div className="block lg:col-span-2">
                                        <div className="head text-xl uppercase font-bold mb-4 text-theme">
                                             <span className="italic border-b-2 border-theme">Destinations</span>
                                        </div>
                                        <div className="grid gap-1">
                                             {destinations.slice(0, 6).map(destination =>
                                                  <LinkItem title={destination.destination} link={`/tour-destination/${destination.destination.toLowerCase()}`} key={destination.id} />
                                             )}
                                        </div>
                                   </div>
                              }
                              {themes && themes.length > 0 &&
                                   <div className="block lg:col-span-2">
                                        <div className="head text-xl uppercase font-bold mb-4 text-theme">
                                             <span className="italic border-b-2 border-theme">Tours Themes</span>
                                        </div>
                                        <div className="grid gap-1">
                                             {themes.slice(0, 6).map(theme =>
                                                  <LinkItem title={theme.title} link={`/tour-destination/${theme.title.toLowerCase()}`} key={theme.id} />
                                             )}
                                        </div>
                                   </div>
                              }
                              <div className="block md:col-span-3">
                                   <div className="head text-xl uppercase font-bold mb-4 text-theme">
                                        <span className="italic border-b-2 border-theme">Contact</span>
                                   </div>
                                   <form action="" className="newsletter grid grid-cols-4 gap-2 border-2 border-theme rounded-3xl overflow-hidden p-1 mb-4">
                                        <input
                                             value={email} onChange={e => setEmail(e.target.value)}
                                             name="newsletter" placeholder="Enter your email"
                                             className="col-span-3 bg-transparent focus:outline-0 pl-2 py-1"
                                        />
                                        <button onClick={handleSubscription} disabled={loading ? "disabled" : ""}
                                             className="text-xs bg-theme text-white rounded-3xl py-1  disabled:opacity-20"
                                        >Subscribe</button>
                                   </form>
                                   <div className="grid gap-2">
                                        {contactDetails.address &&
                                             <div className="flex gap-3 items-center">
                                                  <span className="text-lg inline-block pt-1"><FaMapLocationDot /></span>
                                                  <a href={contactDetails.mapUrl ?? ""} target="_blank">{contactDetails.address}</a>
                                             </div>
                                        }
                                        {contactDetails.mobileNumber &&
                                             <a className="flex gap-3 items-center" href={`tel:${contactDetails.mobileNumber.split(" ").join("")}`}><BiSolidPhoneCall /> {contactDetails.mobileNumber}</a>
                                        }
                                        {contactDetails.emailAddress &&
                                             <a className="flex gap-3 items-center" href={`mailto:${contactDetails.emailAddress.trim()}`}><MdEmail /> {contactDetails.emailAddress}</a>
                                        }
                                   </div>
                              </div>
                         </div>
                         <div className="py-4 flex justify-between items-center">
                              <div className="logo">
                                   <img src={`${origin}/images/logo.svg`} alt="..." />
                              </div>
                              <div className="social flex gap-2 sm:gap-3 items-center">
                                   {contactDetails.facebookUrl &&
                                        <a href={contactDetails.facebookUrl} target="_blank" className="border border-black rounded-full grid place-items-center text-sm sm:text-lg hover:bg-theme hover:text-white hover:border-theme"><GrFacebookOption /></a>
                                   }
                                   {contactDetails.twitterUrl &&
                                        <a href={contactDetails.twitterUrl} target="_blank" className="border border-black rounded-full grid place-items-center text-sm sm:text-lg hover:bg-theme hover:text-white hover:border-theme"><BsTwitterX /></a>
                                   }
                                   {contactDetails.instagramUrl &&
                                        <a href={contactDetails.instagramUrl} target="_blank" className="border border-black rounded-full grid place-items-center text-sm sm:text-lg hover:bg-theme hover:text-white hover:border-theme"><BsInstagram /></a>
                                   }
                                   {contactDetails.youTubeUrl &&
                                        <a href={contactDetails.youTubeUrl} target="_blank" className="border border-black rounded-full grid place-items-center text-sm sm:text-lg hover:bg-theme hover:text-white hover:border-theme"><BsYoutube /></a>
                                   }
                              </div>
                         </div>
                         <div className="copyright bg-theme p-2 text-white text-center rounded-t-xl">
                              © {(new Date()).getFullYear()} Crystal Travels. All Rights Reserved.
                         </div>
                    </div>
               </footer>

          </>
     )
}

const LinkItem = (_props) => {
     return (
          <>

               <Link to={_props.link} className="flex gap-3 items-center">
                    <span className="text-lg">{_props.icon ? _props.icon : <IoArrowForwardCircle />}</span>
                    <span>{_props.title}</span>
               </Link>

          </>
     )
}

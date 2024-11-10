import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../slices/userSlice"
import Header from "../components/Header"
import Footer from "../components/Footer"

function UserLayout() {
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const { user } = useSelector(state => state.user)
     useEffect(() => {
          if (!user.accessToken) {
               const driveUser = JSON.parse(localStorage.getItem("driveUser") || "{}")
               if (driveUser.accessToken) {
                    dispatch(loginUser(driveUser))
               }
               else {
                    if (location.pathname !== "/login" && location.pathname !== "/register") {
                         navigate(`/login`)
                    }
               }
          }
     }, [dispatch, navigate, user, user.accessToken])
     return (
          <>

               <Header />
               <Outlet />
               <Footer />

          </>
     )
}

export default UserLayout

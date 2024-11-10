import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import AdminSidebar from "../components/AdminSidebar"
import AdminHeader from "../components/AdminHeader"

function AdminLayout() {
     const navigate = useNavigate()
     useEffect(() => {
          const crystalAdmin = JSON.parse(localStorage.getItem("crystalAdmin") ?? "{}")
          if (crystalAdmin.accessToken && crystalAdmin.accessToken.trim() !== "") {
               if (location.pathname === "/admin/login") navigate("/admin/dashboard")
          } else {
               if (location.pathname !== "/admin/login") navigate("/admin/login")
          }
     }, [navigate])
     if (location.pathname === "/admin/login") {
          return (
               <Outlet />
          )
     } else {
          return (
               <div className="grid grid-cols-5">
                    <AdminSidebar />
                    <div className="col-span-4 bg-slate-100 pt-5 pb-3 px-3">
                         <AdminHeader />
                         <div className="bg-white p-5 h-[calc(100vh-6rem)] overflow-y-auto">
                              <Outlet />
                         </div>
                    </div>
               </div>
          )
     }
}

export default AdminLayout

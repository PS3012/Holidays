import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-international-phone/style.css';
import { Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useRecoilState } from "recoil";
import { appName } from './recoil';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import HolidayResults from "./pages/HolidayResults";
import HolidayDetails from "./pages/HolidayDetails";
import BookNow from "./pages/BookNow";
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import './App.css'

function App() {
  const [prefixAppName] = useRecoilState(appName)
  return (
    <>

      <Header />
      <Routes>
        <Route path={`${prefixAppName}/`} element={<Home />} />
        <Route path={`${prefixAppName}/tour-destination/:destination`} element={<HolidayResults />} />
        <Route path={`${prefixAppName}/holidays-details`} element={<HolidayDetails />} />
        <Route path={`${prefixAppName}/book-now`} element={<BookNow />} />
        <Route path={`${prefixAppName}/login`} element={<Login />} />
        <Route path={`${prefixAppName}/register`} element={<Register />} />
        <Route path={`${prefixAppName}/*`} element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />

    </>
  )
}

export default App

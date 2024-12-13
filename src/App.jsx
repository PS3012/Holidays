import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { Route, Routes } from "react-router-dom"
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-international-phone/style.css';
import 'ckeditor5/ckeditor5.css';
import './App.css'
import { db } from './config/firebase';
import { updateContactData } from './slices/contactDataSlice';
import { getAllThemes } from './slices/themeSlice';
import { getAllDestinations } from './slices/defaultDestinationsSlice';
import { getAllHomeTours } from './slices/homeToursSlice';
import Home from "./pages/Home"
import HolidayResults from "./pages/HolidayResults";
import HolidayDetails from "./pages/HolidayDetails";
import BookNow from "./pages/BookNow";
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import AddTheme from './pages/Admin/AddTheme';
import Themes from './pages/Admin/Themes';
import ManageContactDetails from './pages/Admin/ManageContactDetails';
import EditContactDetails from './pages/Admin/EditContactDetails';
import ManageNewsletters from './pages/Admin/ManageNewsletters';
import ManageDefaultDestinations from './pages/Admin/ManageDefaultDestinations';
import AddDefaultDestination from './pages/Admin/AddDefaultDestination';
import HomeTours from './pages/Admin/HomeTours';
import AddHomeTour from './pages/Admin/AddHomeTour';
import AdminLogin from './pages/Admin/AdminLogin';
import Dashboard from './pages/Admin/Dashboard';
import Settings from './pages/Admin/Settings';
import ManagePackages from './pages/Admin/ManagePackages';
import AddPackage from './pages/Admin/AddPackage';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const docRef = doc(db, "contactDetails", "YPUmoa96CBUTTXMKeUwt");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const contactDetails = { id: docSnap.id, ...docSnap.data() };
          dispatch(updateContactData(contactDetails))
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err)
      }
    }
    const fetchAllThemes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "themes"));
        const themes = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(getAllThemes(themes))
      } catch (err) {
        console.log(err)
      }
    }
    const fetchDefaultDestinations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "defaultDestinations"));
        const destinations = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(getAllDestinations(destinations))
      } catch (err) {
        console.log(err)
      }
    }
    const fetchHomeTours = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "homeTours"));
        const responseData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(getAllHomeTours(responseData))
      } catch (err) {
        console.log(err)
      }
    }
    fetchContactDetails()
    fetchAllThemes()
    fetchDefaultDestinations()
    fetchHomeTours()
  }, [dispatch])
  return (
    <>

      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="login" element={<AdminLogin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addTheme" element={<AddTheme />} />
          <Route path="themes" element={<Themes />} />
          <Route path="contactDetails" element={<ManageContactDetails />} />
          <Route path="editContactDetails" element={<EditContactDetails />} />
          <Route path="manageNewsletters" element={<ManageNewsletters />} />
          <Route path="manageDefaultDestinations" element={<ManageDefaultDestinations />} />
          <Route path="addDefaultDestination" element={<AddDefaultDestination />} />
          <Route path="manageHomeTours" element={<HomeTours />} />
          <Route path="addHomeTour" element={<AddHomeTour />} />
          <Route path="settings" element={<Settings />} />
          <Route path="managePackages" element={<ManagePackages />} />
          <Route path="addPackage" element={<AddPackage />} />
          <Route path={`*`} element={<NotFound />} />
        </Route>
        <Route path="" element={<UserLayout />}>
          <Route path={`/`} element={<Home />} />
          <Route path={`/tour-destination/:destination`} element={<HolidayResults />} />
          <Route path={`/holidays-details`} element={<HolidayDetails />} />
          <Route path={`/book-now`} element={<BookNow />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/register`} element={<Register />} />
          <Route path={`/*`} element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />

    </>
  )
}

export default App

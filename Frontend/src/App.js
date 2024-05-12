import { useEffect, useContext } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";
import Screen3 from "./pages/Screen3";
import Screen4 from "./pages/Screen4";
import Screen5 from "./pages/Screen5";
import Screen6 from "./pages/Screen6";
import Screen7 from "./pages/Screen7";
import Screen8 from "./pages/Screen8";
import React, { createContext, useState } from "react";

export const DataContext = createContext({
  phone: "",
  confirmCode: "",
  id: "",
  nameOfBusiness: "",
  address: "",
  city: "",
  businessAddress: "",
  gstNumber: "",
  yearlyRevenue: "",
});

export function DataProvider({ children }) {
  const [data, setData] = useState({
    phoneNumber: "",
    confirmCode: "",
    id: "",
    nameOfBusiness: "",
    address: "",
    city: "",
    businessAddress: "",
    gstNumber: "",
    yearlyRevenue: "",
    panCardURL: "",
    aadharCardFrontURL: "",
    aadharCardBackURL: "",
    accountHolderName: "",
    gender: "",
    dob: "",
    financialDocumentsURL: "",
    ifscCode: "",
    accountNumber: "",
    businessPlan: "",
    panCardNumber: "",
    aadharCardNumber: "",
  }); // Example of a more: structured initial state

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/screen2":
        title = "";
        metaDescription = "";
        break;
      case "/screen4":
        title = "";
        metaDescription = "";
        break;
      case "/screen3":
        title = "";
        metaDescription = "";
        break;
      case "/screen5":
        title = "";
        metaDescription = "";
        break;
      case "/screen6":
        title = "";
        metaDescription = "";
        break;
      case "/screen7":
        title = "";
        metaDescription = "";
        break;
      case "/screen8":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen4" element={<Screen4 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/screen5" element={<Screen5 />} />
        <Route path="/screen6" element={<Screen6 />} />
        <Route path="/screen7" element={<Screen7 />} />
        <Route path="/screen8" element={<Screen8 />} />
      </Routes>
    </DataProvider>
  );
}
export default App;

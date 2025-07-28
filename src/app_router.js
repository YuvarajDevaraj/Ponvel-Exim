import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Modules/Home/home";
import Maincontainer from "./maincontainer";
import ContactUs from "./Modules/Contact/Contactus";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Maincontainer />}>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

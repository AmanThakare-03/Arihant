import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "./routes.js";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import VFDCategory from "./pages/VFDCategory.jsx";
import V20 from "./pages/V20.jsx";
import G120 from "./pages/G120.jsx";
import HMI from "./pages/HMI.jsx";
import S7200Smart from "./pages/S7200Smart.jsx";
import S71200 from "./pages/S71200.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.products} element={<Products />} />
        <Route path={ROUTES.vfd.category} element={<VFDCategory />} />
        <Route path={ROUTES.vfd.v20} element={<V20 />} />
        <Route path={ROUTES.vfd.g120} element={<G120 />} />
        <Route path={ROUTES.hmi} element={<HMI />} />
        <Route path={ROUTES.plc.s7200} element={<S7200Smart />} />
        <Route path={ROUTES.plc.s71200} element={<S71200 />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

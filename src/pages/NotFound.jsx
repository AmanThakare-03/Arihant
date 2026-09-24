import { Link } from "react-router-dom";
import { C, FONT } from "../theme.js";
import { ROUTES } from "../routes.js";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

export default function NotFound() {
  return (
    <div style={{ fontFamily: FONT, color: C.text, background: "#fff" }} className="min-h-screen w-full flex flex-col">
      <Nav activeLink="" activeProduct="" />
      <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
        <div style={{ fontSize: 72, fontWeight: 800, color: C.navy }}>404</div>
        <p style={{ color: C.muted, fontSize: 15, marginBottom: 24 }}>
          That page doesn't exist. Let's get you back on track.
        </p>
        <Link
          to={ROUTES.home}
          style={{ background: C.green, color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 24px", borderRadius: 6, textDecoration: "none" }}
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}

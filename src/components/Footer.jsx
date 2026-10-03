import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from "lucide-react";
import { C } from "../theme.js";
import { ROUTES } from "../routes.js";

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{ color: "#4d7a28", fontWeight: 700, fontSize: 12, letterSpacing: 0.6, marginBottom: 14 }}>
        {title.toUpperCase()}
      </div>
      {items.map((i) => (
        <div key={i.label} style={{ fontSize: 12.5, color: "#c6d0d9", marginBottom: 10 }}>
          {i.to ? (
            <Link to={i.to} style={{ color: "#c6d0d9", textDecoration: "none" }}>
              {i.label}
            </Link>
          ) : (
            i.label
          )}
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: C.navy, color: "#c6d0d9" }} className="px-4 sm:px-6 md:px-10 pt-12 pb-6">
      <div className="footer-grid grid gap-8" style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div>
          <Link to={ROUTES.home} className="flex items-center gap-2 mb-3" style={{ textDecoration: "none" }}>
            <div className="w-8 h-8 rounded flex items-center justify-center bg-white">
              <span style={{ color: C.navy, fontWeight: 800, fontSize: 14 }}>3A</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}>3Arihant</div>
              <div style={{ fontSize: 9, color: C.green, letterSpacing: 1, fontWeight: 700 }}>AUTOMATION</div>
            </div>
          </Link>
          <p style={{ fontSize: 12.5, lineHeight: 1.7, color: "#8fa0af", maxWidth: 260 }}>
            Leading the industrial landscape with precision-engineered automation solutions and state-of-the-art sensor technologies.
          </p>
          <div className="flex gap-2 mt-4">
            {[Facebook, Youtube, Linkedin].map((Icon, i) => (
              <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ border: "1px solid #33495d" }}>
                <Icon size={13} color="#c6d0d9" />
              </div>
            ))}
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          items={[
            { label: "Home", to: ROUTES.home },
            { label: "Products", to: ROUTES.products },
            { label: "Contact Us", to: ROUTES.contact },
          ]}
        />
        <FooterCol
          title="Support"
          items={[
            { label: "Technical Support", to: ROUTES.contact },
            { label: "Documentation", to: null },
            { label: "Privacy Policy", to: null },
            { label: "Terms of Service", to: null },
          ]}
        />

        <div>
          <div style={{ color: C.green, fontWeight: 700, fontSize: 12, letterSpacing: 0.6, marginBottom: 14 }}>CONTACT US</div>
          <div className="flex gap-2 mb-3" style={{ fontSize: 12.5, color: "#c6d0d9" }}>
            <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} />
            350, Girnar Khushboo Plaza, GIDC Phase 2, Vapi, Gujarat 396195
          </div>
          <div className="flex gap-2 mb-3" style={{ fontSize: 12.5, color: "#c6d0d9" }}>
            <Phone size={14} /> +91 98980 16055
          </div>
          <div className="flex gap-2" style={{ fontSize: 12.5, color: "#c6d0d9" }}>
            <Mail size={14} /> arihantautovapi@gmail.com
          </div>
        </div>
      </div>

      <div className="mt-10 pt-4 text-center" style={{ borderTop: "1px solid #24374a", fontSize: 12, color: "#6f8395" }}>
        © 2026 Arihant Automation. All Rights Reserved. Precision Engineered.
      </div>
    </footer>
  );
}

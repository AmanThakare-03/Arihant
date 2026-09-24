import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { C } from "../theme.js";
import { ROUTES } from "../routes.js";

const PRODUCT_MENU = [
  {
    heading: "PLC",
    items: [
      { key: "s7200", label: "Siemens S7-200 SMART", to: ROUTES.plc.s7200 },
      { key: "s71200", label: "Siemens S7-1200", to: ROUTES.plc.s71200 },
    ],
  },
  {
    heading: "VFD",
    items: [
      { key: "vfd", label: "VFD Overview (V20 / G120C / G120)", to: ROUTES.vfd.category },
      { key: "v20", label: "SINAMICS V20", to: ROUTES.vfd.v20 },
      { key: "g120", label: "SINAMICS G120", to: ROUTES.vfd.g120 },
    ],
  },
  {
    heading: "HMI",
    items: [{ key: "hmi", label: "KTP Basic / Comfort Panels", to: ROUTES.hmi }],
  },
];

/**
 * activeLink: which top-level nav item is highlighted ("Home", "Products", "Contact Us", ...)
 * activeProduct: which item inside the Products dropdown is highlighted (key from PRODUCT_MENU)
 */
export default function Nav({ activeProduct = "", activeLink = "Home" }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const links = ["Home", "Services", "Products", "Our Projects", "About Us", "Contact Us"];

  const linkTo = (l) => {
    if (l === "Home") return ROUTES.home;
    if (l === "Products") return ROUTES.products;
    if (l === "Contact Us") return ROUTES.contact;
    return null; // no dedicated page yet (Services / Our Projects / About Us)
  };

  return (
    <nav
      className="flex items-center justify-between px-6 py-3 flex-wrap gap-3"
      style={{ borderBottom: `1px solid ${C.border}`, maxWidth: 1180, margin: "0 auto", position: "relative" }}
    >
      <Link to={ROUTES.home} className="flex items-center gap-2" style={{ textDecoration: "none" }}>
        <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: C.navy }}>
          <span style={{ color: C.green, fontWeight: 800, fontSize: 14 }}>3A</span>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 15, color: C.navy, lineHeight: 1 }}>3Arihant</div>
          <div style={{ fontSize: 9, color: C.green, letterSpacing: 1, fontWeight: 700 }}>AUTOMATION</div>
        </div>
      </Link>

      <ul className="flex items-center gap-6 list-none text-sm" style={{ color: C.text, margin: 0, padding: 0 }}>
        {links.map((l) => {
          const isProducts = l === "Products";
          const isActive = l === activeLink;
          const to = linkTo(l);
          const content = (
            <span className="flex items-center gap-1">
              {l.toUpperCase()}
              {isProducts && <ChevronDown size={12} />}
            </span>
          );
          const style = isActive
            ? { color: C.green, fontWeight: 700, borderBottom: `2px solid ${C.green}`, paddingBottom: 4 }
            : { fontWeight: 500, color: C.text };

          return (
            <li
              key={l}
              style={{ position: "relative" }}
              onMouseEnter={() => isProducts && setOpen(true)}
              onMouseLeave={() => isProducts && setOpen(false)}
            >
              {to ? (
                <Link to={to} style={{ ...style, textDecoration: "none" }}>
                  {content}
                </Link>
              ) : (
                <a href="#" onClick={(e) => e.preventDefault()} style={{ ...style, textDecoration: "none" }}>
                  {content}
                </a>
              )}

              {isProducts && open && (
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    border: `1px solid ${C.border}`,
                    boxShadow: "0 8px 24px rgba(0,0,0,.08)",
                    minWidth: 260,
                    zIndex: 20,
                  }}
                >
                  {PRODUCT_MENU.map((group) => (
                    <div key={group.heading}>
                      <div
                        className="px-4 pt-3 pb-1"
                        style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.6, color: C.mutedLight }}
                      >
                        {group.heading}
                      </div>
                      {group.items.map((p) => (
                        <Link
                          key={p.key}
                          to={p.to}
                          className="block px-4 py-2"
                          style={{
                            fontSize: 13,
                            fontWeight: p.key === activeProduct ? 700 : 500,
                            color: p.key === activeProduct ? C.green : C.text,
                            background: p.key === activeProduct ? C.offwhite : "#fff",
                            textDecoration: "none",
                          }}
                        >
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link
                    to={ROUTES.products}
                    className="block px-4 py-3"
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fff",
                      background: C.navy,
                      textDecoration: "none",
                    }}
                  >
                    VIEW ALL PRODUCTS →
                  </Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-3">
        <div
          className="hidden md:flex items-center gap-2 px-3 py-2 rounded"
          style={{ background: C.offwhite, border: `1px solid ${C.border}`, minWidth: 200 }}
        >
          <Search size={14} color={C.mutedLight} />
          <span style={{ fontSize: 12, color: C.mutedLight }}>Search products, solutions...</span>
        </div>
        <button
          onClick={() => navigate(ROUTES.contact)}
          className="text-xs font-bold px-4 py-2 rounded"
          style={{ background: C.green, color: "#fff", border: "none", cursor: "pointer" }}
        >
          REQUEST QUOTE
        </button>
      </div>
    </nav>
  );
}

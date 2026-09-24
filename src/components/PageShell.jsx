import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CheckCircle2, Download, FileText } from "lucide-react";
import { C, FONT } from "../theme.js";
import { ModuleArt, CardArt } from "./Art.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

/* ── HERO ── */
function Hero({ data }) {
  return (
    <div
      className="px-6 md:px-10 py-8 grid gap-8"
      style={{ gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", maxWidth: 1180, margin: "0 auto" }}
    >
      <div>
        <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "16/15", border: `1px solid ${C.border}`, maxWidth: 420 }}>
          <ModuleArt />
        </div>
      </div>

      <div style={{ maxWidth: 340 }}>
        <div style={{ color: C.green, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{data.eyebrow}</div>
        <h1 style={{ color: C.navy, fontWeight: 800, fontSize: 30, lineHeight: 1.18, margin: "8px 0" }}>
          {data.title[0]}
          <br />
          {data.title[1]}
        </h1>
        <div style={{ color: C.mutedLight, fontSize: 13, marginBottom: 18 }}>{data.model}</div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {data.specs.map((s) => (
            <div key={s.label} className="rounded px-4 py-3" style={{ background: C.offwhite, border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 10, color: C.mutedLight, letterSpacing: 0.5, fontWeight: 600 }}>{s.label}</div>
              <div style={{ fontSize: 14, color: C.navy, fontWeight: 700, marginTop: 2 }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, color: C.green, fontWeight: 700, fontSize: 14, marginBottom: 8 }}>
          <CheckCircle2 size={16} /> {data.featuresTitle}
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 22 }}>
          {data.features.map((f) => (
            <li key={f} style={{ display: "flex", gap: 8, fontSize: 13, color: C.muted, marginBottom: 6 }}>
              <CheckCircle2 size={13} color={C.green} style={{ flexShrink: 0, marginTop: 3 }} />
              {f}
            </li>
          ))}
        </ul>

        <a
          href={data.primaryHref || "#"}
          target={data.primaryHref ? "_blank" : undefined}
          rel={data.primaryHref ? "noreferrer" : undefined}
          onClick={(e) => !data.primaryHref && e.preventDefault()}
          className="w-full rounded flex items-center justify-center gap-2 py-3 mb-2"
          style={{ background: C.navy, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
        >
          ▷ {data.primaryCta}
        </a>
        <a
          href={data.secondaryHref || "#"}
          onClick={(e) => !data.secondaryHref && e.preventDefault()}
          className="w-full rounded flex items-center justify-center gap-2 py-3"
          style={{ background: "#fff", color: C.text, border: `1px solid ${C.border}`, fontWeight: 700, fontSize: 14, textDecoration: "none" }}
        >
          <FileText size={15} /> {data.secondaryCta}
        </a>
      </div>
    </div>
  );
}

/* ── OVERVIEW + TECH SPECS + ADVANCED TECH + DOCS ── */
function SectionHeading({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
      <h2 style={{ color: C.navy, fontWeight: 800, fontSize: 21, whiteSpace: "nowrap", margin: 0 }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: C.border }} />
    </div>
  );
}

function OverviewAndSpecs({ data }) {
  return (
    <div
      className="px-6 md:px-10 py-8 grid gap-10"
      style={{ gridTemplateColumns: "minmax(0,1fr) 300px", borderTop: `1px solid ${C.border}`, maxWidth: 1180, margin: "0 auto" }}
    >
      <div>
        <SectionHeading>{data.overviewTitle}</SectionHeading>
        {data.overview.map((p) => (
          <p key={p} style={{ color: C.muted, fontSize: 14, lineHeight: 1.8, marginBottom: 14, maxWidth: 620 }}>
            {p}
          </p>
        ))}

        <div style={{ marginTop: 28 }}>
          <h3 style={{ color: C.navy, fontWeight: 800, fontSize: 19, marginBottom: 14 }}>{data.techSpecsTitle}</h3>
          <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.border}`, maxWidth: 620 }}>
            {data.techSpecs.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2"
                style={{ borderBottom: i < data.techSpecs.length - 1 ? `1px solid ${C.border}` : "none", background: i % 2 ? C.offwhite : "#fff" }}
              >
                <div className="flex justify-between px-4 py-3" style={{ borderRight: `1px solid ${C.border}` }}>
                  <span style={{ color: C.mutedLight, fontSize: 13 }}>{row[0]}</span>
                  <span style={{ color: C.navy, fontWeight: 700, fontSize: 13, textAlign: "right" }}>{row[1]}</span>
                </div>
                <div className="flex justify-between px-4 py-3">
                  <span style={{ color: C.mutedLight, fontSize: 13 }}>{row[2]}</span>
                  <span style={{ color: C.navy, fontWeight: 700, fontSize: 13, textAlign: "right" }}>{row[3]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="rounded-lg overflow-hidden mb-5" style={{ background: C.navy, position: "relative" }}>
          <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{data.advTitle}</span>
          </div>
          <div className="px-4 py-3" style={{ position: "relative" }}>
            {data.adv.map((row, i) => (
              <div key={row.k} style={{ padding: "10px 0", borderBottom: i < data.adv.length - 1 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                <div style={{ color: C.green, fontSize: 10, fontWeight: 700, letterSpacing: 0.6 }}>{row.k}</div>
                <div style={{ color: "#fff", fontSize: 13, marginTop: 2 }}>{row.v}</div>
              </div>
            ))}
            <svg width="34" height="34" viewBox="0 0 34 34" style={{ position: "absolute", right: 4, bottom: 6, opacity: 0.35 }}>
              <rect x="6" y="4" width="8" height="26" rx="2" fill="#4a6278" />
              <rect x="20" y="4" width="8" height="26" rx="2" fill="#4a6278" />
            </svg>
          </div>
        </div>

        <div style={{ fontWeight: 700, fontSize: 14, color: C.navy, marginBottom: 10 }}>Documentation</div>
        <div className="flex flex-col gap-2">
          {data.docs.map((d) => (
            <div key={d.label} className="flex items-center justify-between px-4 py-3 rounded" style={{ background: C.offwhite, border: `1px solid ${C.border}` }}>
              <div className="flex items-center gap-2">
                <FileText size={14} color={d.tint} />
                <span style={{ fontSize: 13, color: C.text }}>{d.label}</span>
              </div>
              <Download size={14} color={C.mutedLight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── MODELS / RELATED-PRODUCTS GRID ── */
function ModelsGrid({ data }) {
  const colors = [C.green, "#8a5a2f", "#5c6b7a", "#2d6b8a"];
  return (
    <div className="py-10" style={{ background: C.offwhite, borderTop: `1px solid ${C.border}` }}>
      <div className="px-6 md:px-10 flex items-center justify-between mb-5" style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2 style={{ color: C.navy, fontWeight: 800, fontSize: 22 }}>{data.modelsSub}</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ border: `1px solid ${C.border}`, background: "#fff" }}>
            <ChevronLeft size={15} />
          </button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ border: `1px solid ${C.border}`, background: "#fff" }}>
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
      <div className="px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-5" style={{ maxWidth: 1180, margin: "0 auto" }}>
        {data.models.map((m, i) => {
          const card = (
            <div className="rounded-lg overflow-hidden h-full" style={{ background: "#fff", border: `1px solid ${C.border}` }}>
              <div style={{ aspectRatio: "1/1" }}>
                <CardArt label={m.name} color={colors[i % colors.length]} />
              </div>
              <div className="p-3">
                <div style={{ fontSize: 10, fontWeight: 700, color: C.green, letterSpacing: 0.5 }}>{m.tag}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, margin: "3px 0" }}>{m.name}</div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{m.desc}</div>
                <div style={{ fontSize: 10, color: C.mutedLight, marginTop: 6, fontFamily: "monospace" }}>{m.part}</div>
              </div>
            </div>
          );

          if (m.to) {
            return (
              <Link key={m.name} to={m.to} style={{ textDecoration: "none", color: "inherit" }}>
                {card}
              </Link>
            );
          }
          if (m.href) {
            return (
              <a key={m.name} href={m.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {card}
              </a>
            );
          }
          return <div key={m.name}>{card}</div>;
        })}
      </div>
    </div>
  );
}

/**
 * PageShell — full page: Nav + Hero + OverviewAndSpecs + ModelsGrid + Footer.
 * Every page in the site is just this shell fed with page-specific `data`.
 */
export default function PageShell({ data, activeLink = "Home", activeProduct = "" }) {
  return (
    <div style={{ fontFamily: FONT, color: C.text, background: "#fff" }} className="min-h-screen w-full">
      <Nav activeProduct={activeProduct} activeLink={activeLink} />
      <Hero data={data} />
      <OverviewAndSpecs data={data} />
      <ModelsGrid data={data} />
      <Footer />
    </div>
  );
}

import { ROUTES, whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "AUTHORIZED DISTRIBUTOR · SIEMENS · BANNER · SICK",
  title: ["Siemens PLC, VFD & HMI", "Automation Products India"],
  model: "Full Catalog · 7 Categories · Ready Stock at Vapi, Gujarat",
  specs: [
    { label: "AUTHORIZED BRANDS", value: "3" },
    { label: "PRODUCTS", value: "Genuine · Zero Counterfeit" },
    { label: "STOCK", value: "Ready · Same/Next Day" },
    { label: "COVERAGE", value: "PAN India · 50+ Cities" },
  ],
  featuresTitle: "What We Supply",
  features: [
    "PLC systems, VFDs, servo drives, HMI panels & SMPS power supplies",
    "Industrial sensors from Banner Engineering & Sick",
    "Process instruments — pressure, level & flow measurement",
  ],
  primaryCta: "WhatsApp: 98980 16055",
  primaryHref: whatsappLink("Hi, I'd like the full product catalog / a quote."),
  secondaryCta: "Call Now",
  secondaryHref: "tel:+919898016055",
  overviewTitle: "About Our Catalog",
  overview: [
    "Arihant Automation supplies the full range of industrial automation products — Siemens PLCs, VFDs, servo drives, HMI panels, SITOP power supplies, industrial sensors, and process instruments — from a single authorized source in GIDC Vapi, Gujarat.",
    "Every category links to a dedicated product page with full specifications, part numbers, and pricing. WhatsApp any part number for a quote within 30 minutes.",
  ],
  advTitle: "Category Snapshot",
  adv: [
    { k: "VFDS & SERVO", v: "V20 · G120 · G120C · S120" },
    { k: "PLC SYSTEMS", v: "S7-1200 · S7-200 SMART · Delta" },
    { k: "SENSORS", v: "Banner · Sick — Photoelectric to Vision" },
  ],
  docs: [
    { label: "Siemens PLC Distributor India", tint: "#2266cc" },
    { label: "Siemens VFD Drive India", tint: "#c0392b" },
    { label: "Photoelectric Sensor Price India", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Product Categories",
  techSpecs: [
    ["PLC Systems", "S7-1200 · S7-200 SMART · Delta", "VFDs", "V20 · G120 · G120C"],
    ["Servo Drives", "S120 · CU320 Booksize", "HMI Panels", "KTP400 · KTP700 · TP1200"],
    ["Power Supply", "SITOP 5A – 40A", "Sensors", "Banner · Sick"],
    ["Process Instruments", "Pressure · Level · Flow", "Coverage", "PAN India"],
  ],
  modelsSub: "Browse Product Categories",
  models: [
    { tag: "PLC SYSTEMS", name: "Siemens PLC", desc: "S7-1200, S7-200 SMART, Delta DVP series.", part: "View PLC Range", to: ROUTES.plc.s71200 },
    { tag: "VFDS & SERVO", name: "VFDs & Servo Drives", desc: "V20, G120, G120C, S120 servo systems.", part: "View Drive Range", to: ROUTES.vfd.category },
    { tag: "HMI & SCADA", name: "HMI Panels", desc: "KTP400, KTP700, TP1200, WinCC SCADA.", part: "View HMI Range", to: ROUTES.hmi },
    { tag: "SENSORS", name: "Industrial Sensors", desc: "Banner & Sick photoelectric, proximity, vision.", part: "View Sensor Range", href: whatsappLink("Hi, I'd like pricing on industrial sensors (Banner/Sick).") },
  ],
};

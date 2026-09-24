import { ROUTES, whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "SIEMENS SINAMICS VFD · AUTHORIZED CHANNEL PARTNER",
  title: ["Siemens VFD Drive", "Price India"],
  model: "SINAMICS V20 · G120C · G120 · 0.12 kW – 250 kW",
  specs: [
    { label: "BRAND", value: "Siemens SINAMICS" },
    { label: "SERIES", value: "V20 · G120C · G120" },
    { label: "POWER RANGE", value: "0.12 kW – 250 kW" },
    { label: "PROTOCOL", value: "USS / Modbus / PROFINET" },
  ],
  featuresTitle: "Precision Engineered Features",
  features: [
    "Single-phase & 3-phase input available across the range",
    "Native connection to S7-1200 PLCs via USS or PROFINET",
    "Genuine SINAMICS, authorized supply from GIDC Vapi",
  ],
  primaryCta: "WhatsApp Inquiry",
  primaryHref: whatsappLink("Hi, I'd like a quote on the Siemens SINAMICS VFD range."),
  secondaryCta: "Download Catalog PDF",
  secondaryHref: null,
  overviewTitle: "Product Overview",
  overview: [
    "The Siemens SINAMICS range is India's most widely specified VFD family — trusted by OEMs, panel builders, and system integrators across all industries. Three series cover every requirement from simple single-phase pump drives to safety-rated multi-drive industrial systems.",
    "Arihant Automation is an authorized Siemens channel partner in GIDC Vapi supplying all three SINAMICS series from ready stock — V20 for entry-level, G120C for compact integrated safety, and G120 for modular high-power installations.",
  ],
  advTitle: "Advanced Tech",
  adv: [
    { k: "V20 · ENTRY", v: "0.12–15 kW · Most Economical" },
    { k: "G120C · COMPACT", v: "0.55–18.5 kW · STO Integrated" },
    { k: "G120 · MODULAR", v: "0.37–250 kW · PROFINET/PROFIBUS" },
  ],
  docs: [
    { label: "VFD Catalog (PDF)", tint: "#c0392b" },
    { label: "Series Comparison Sheet", tint: "#2266cc" },
    { label: "Authorized Dealer Certificate", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Series Comparison",
  techSpecs: [
    ["V20 Power Range", "0.12 – 15 kW", "V20 Input", "1-phase or 3-phase"],
    ["G120C Power Range", "0.55 – 18.5 kW", "G120C Safety", "STO Integrated (SIL2)"],
    ["G120 Power Range", "0.37 – 250 kW", "G120 Comm", "PROFINET · PROFIBUS · USS"],
    ["Commissioning", "Quickstart ~10 min (V20)", "Design", "Modular CU+PM (G120)"],
  ],
  modelsSub: "Choose Your Series",
  models: [
    { tag: "ENTRY LEVEL", name: "SINAMICS V20", desc: "0.12–15 kW, single/3-phase input, most economical.", part: "6SL3210 series", to: ROUTES.vfd.v20 },
    { tag: "COMPACT · SAFETY", name: "SINAMICS G120C", desc: "0.55–18.5 kW, STO integrated, PROFINET option.", part: "6SL3220 series", to: ROUTES.vfd.g120 },
    { tag: "MODULAR · HIGH POWER", name: "SINAMICS G120", desc: "0.37–250 kW, modular CU+PM, full safety functions.", part: "6SL3xxx series", to: ROUTES.vfd.g120 },
    { tag: "ACCESSORIES", name: "VFD Panel Build Kit", desc: "Braking resistors, line reactors, EMC filters.", part: "Full Panel Kit", href: whatsappLink("Hi, I'd like pricing on a VFD panel build kit.") },
  ],
};

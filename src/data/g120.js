import { whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "SIEMENS SINAMICS · G120 MODULAR SERIES",
  title: ["Siemens SINAMICS G120", "VFD — Modular System"],
  model: "32 Models · Control Units + Power Modules + Operator Panels",
  specs: [
    { label: "BRAND", value: "Siemens SINAMICS" },
    { label: "SERIES", value: "G120 Modular" },
    { label: "POWER RANGE", value: "0.55 kW – 250 kW" },
    { label: "PROTOCOL", value: "PROFINET · PROFIBUS · USS" },
  ],
  featuresTitle: "Precision Engineered Features",
  features: [
    "Separate Control Units (CU240E-2 / CU250S-2) and Power Modules (PM240-2) for full modularity",
    "Integrated safety functions — STO, SS1, SLS up to SIL2",
    "All 32 model numbers, genuine supply, ready stock from GIDC Vapi",
  ],
  primaryCta: "WhatsApp Inquiry",
  primaryHref: whatsappLink("Hi, I'd like a quote on the Siemens SINAMICS G120."),
  secondaryCta: "Download Catalog PDF",
  secondaryHref: null,
  overviewTitle: "Product Overview",
  overview: [
    "Siemens SINAMICS G120 is a modular industrial drive system built from separate Control Units and Power Modules, scaling from 0.55 kW to 250 kW. The modular design lets you match exactly the communication, safety, and control features your application needs.",
    "Arihant Automation supplies the complete G120 system — 8 Control Unit / operator panel variants and 24 PM240-2 Power Modules — as an authorized Siemens channel partner from GIDC Vapi, Gujarat.",
  ],
  advTitle: "Advanced Tech",
  adv: [
    { k: "CONTROL UNITS", v: "CU240E-2 · CU250S-2 · 8 variants" },
    { k: "POWER MODULES", v: "PM240-2 · 24 kW ratings" },
    { k: "SAFETY", v: "STO · SS1 · SLS (SIL2)" },
  ],
  docs: [
    { label: "G120 Catalog (PDF)", tint: "#c0392b" },
    { label: "CU + PM Selection Guide", tint: "#2266cc" },
    { label: "Authorized Dealer Certificate", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Technical Specifications",
  techSpecs: [
    ["Power Range", "0.55 kW – 250 kW", "Input", "3-phase 380–480V"],
    ["Control Units", "CU240E-2 / CU250S-2", "Operator Panels", "BOP-2 · IOP-2"],
    ["Communication", "PROFINET · PROFIBUS · USS", "Safety", "STO · SS1 · SLS"],
    ["Frame Sizes", "FSA – FSJ (Chassis)", "Total Models", "32"],
  ],
  modelsSub: "Popular Power Modules",
  models: [
    { tag: "PM240-2 · FSC", name: "7.5 kW Power Module", desc: "18.0 A output, FSC frame, most popular rating.", part: "6SL3210-1PE21-8UL0" },
    { tag: "CU240E-2 PN", name: "Control Unit PN", desc: "PROFINET + USS, native S7-1200 pairing, most popular CU.", part: "6SL3244-0BB12-1PA1" },
    { tag: "PM240-2 · FSA", name: "0.75 kW Power Module", desc: "2.3 A output, compact FSA frame.", part: "6SL3210-1PE12-3UL1" },
    { tag: "OPERATOR PANEL", name: "IOP-2 Panel", desc: "Graphical LCD, advanced setup, clips onto CU.", part: "6SL3255-0AA00-4JA2" },
  ],
};

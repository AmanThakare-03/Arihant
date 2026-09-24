import { whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "SIEMENS HMI · KTP BASIC SERIES",
  title: ["Siemens SIMATIC HMI", "KTP700 Basic Panel"],
  model: "Part Number: 6AV2 123-2GA03-0AX0 · 18 Models Available",
  specs: [
    { label: "DISPLAY SIZE", value: '7" Color TFT' },
    { label: "RESOLUTION", value: "800 × 480 px" },
    { label: "INTERFACE", value: "PROFINET (PN)" },
    { label: "SOFTWARE", value: "TIA Portal WinCC Basic" },
  ],
  featuresTitle: "Precision Engineered Features",
  features: [
    "IP65 front protection — most popular HMI in Indian machine building",
    '8 function keys plus full touch operation on a 7" color display',
    "Genuine 6AV2 series, authorized supply from GIDC Vapi",
  ],
  primaryCta: "Enquiry / Request Quote",
  primaryHref: whatsappLink("Hi, I'd like a quote on the Siemens KTP700 Basic HMI."),
  secondaryCta: "Get Data Book",
  secondaryHref: null,
  overviewTitle: "Product Overview",
  overview: [
    'The Siemens SIMATIC KTP700 Basic is the most popular HMI panel in Indian machine building — a 7" color touch panel with PROFINET connectivity, TIA Portal WinCC Basic software, and IP65-rated front protection for panel door mounting.',
    "Arihant Automation is an authorized Siemens channel partner supplying the full KTP Basic, Comfort and Mobile panel range — 18 models in total — from GIDC Vapi, Gujarat, with genuine parts and PAN India delivery.",
  ],
  advTitle: "Advanced Tech",
  adv: [
    { k: "INTERFACE VARIANTS", v: "PN only (A) · PN+DP (B)" },
    { k: "FUNCTION KEYS", v: "8 keys + touch" },
    { k: "PROTECTION", v: "IP65 front" },
  ],
  docs: [
    { label: "User Manual (EN)", tint: "#c0392b" },
    { label: "Panel Datasheet (PDF)", tint: "#2266cc" },
    { label: "Authorized Dealer Certificate", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Technical Specifications",
  techSpecs: [
    ["Display", '7" Color TFT', "Resolution", "800 × 480 px"],
    ["Function Keys", "8 keys", "Software", "WinCC Basic"],
    ["Interface", "PROFINET (PN)", "Protection", "IP65 front"],
    ["Part Prefix", "6AV2 123-2G", "Family", "KTP Basic Series"],
  ],
  modelsSub: "Available HMI Models",
  models: [
    { tag: "ENTRY · MONO", name: "KTP400 Basic Mono", desc: '4" mono TFT, 320×240, 4 function keys, PN only.', part: "6AV2 123-2DB03-0AX0" },
    { tag: "★ MOST POPULAR", name: "KTP700 Basic PN", desc: '7" color TFT, 800×480, 8 keys, PROFINET only.', part: "6AV2 123-2GA03-0AX0" },
    { tag: "PN + DP", name: "KTP700 Basic DP", desc: "7\" color TFT, PROFINET + PROFIBUS DP, legacy S7-300/400.", part: "6AV2 123-2GB03-0AX0" },
    { tag: "PN + DP", name: "KTP900 Basic DP", desc: '9" color TFT, 800×480, PROFINET + PROFIBUS DP.', part: "6AV2 123-2JB03-0AX0" },
  ],
};

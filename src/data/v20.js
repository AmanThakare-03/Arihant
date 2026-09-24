import { whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "SIEMENS SINAMICS · V20 ENTRY SERIES",
  title: ["Siemens SINAMICS V20", "VFD Price India"],
  model: "13 Models · 0.37 kW – 22 kW · 3-Phase 380–480V",
  specs: [
    { label: "BRAND", value: "Siemens SINAMICS" },
    { label: "SERIES", value: "V20" },
    { label: "POWER RANGE", value: "0.37 – 22 kW" },
    { label: "PROTOCOL", value: "USS · Modbus RTU" },
  ],
  featuresTitle: "Precision Engineered Features",
  features: [
    "India's most popular entry-level VFD for pumps, fans & conveyors",
    "Simple ~10-minute commissioning, single all-in-one design",
    "All 13 models, genuine supply, ready stock at GIDC Vapi",
  ],
  primaryCta: "WhatsApp Inquiry",
  primaryHref: whatsappLink("Hi, I'd like a quote on the Siemens SINAMICS V20."),
  secondaryCta: "Download Catalog PDF",
  secondaryHref: null,
  overviewTitle: "Product Overview",
  overview: [
    "Siemens SINAMICS V20 is India's most popular entry-level VFD, built for pumps, fans, and conveyor applications where simple, reliable speed control is needed. The all-in-one compact design commissions in around 10 minutes.",
    "Arihant Automation supplies the complete V20 range — all 13 power ratings from 0.37 kW to 22 kW — as an authorized Siemens channel partner from GIDC Vapi, Gujarat, with genuine parts and PAN India delivery.",
  ],
  advTitle: "Advanced Tech",
  adv: [
    { k: "COMMISSIONING", v: "~10 minutes · Quickstart wizard" },
    { k: "COMMUNICATION", v: "USS · Modbus RTU" },
    { k: "FRAME SIZES", v: "FSA – FSE" },
  ],
  docs: [
    { label: "V20 Catalog (PDF)", tint: "#c0392b" },
    { label: "Quick Reference Table", tint: "#2266cc" },
    { label: "Authorized Dealer Certificate", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Technical Specifications",
  techSpecs: [
    ["Power Range", "0.37 kW – 22 kW", "Input", "3-phase 380–480V"],
    ["Communication", "USS · Modbus RTU", "Commissioning", "~10 min Quickstart"],
    ["Frame Sizes", "FSA · FSB · FSC · FSD · FSE", "Total Models", "13"],
    ["Part Prefix", "6SL3210-5BE", "Safety", "Via external wiring"],
  ],
  modelsSub: "Popular V20 Models",
  models: [
    { tag: "ENTRY · FSA", name: "0.37 kW V20", desc: "1.3 A output, compact FSA frame, most economical.", part: "6SL3210-5BE13-7UV1" },
    { tag: "★ MOST POPULAR", name: "1.5 kW V20", desc: "4.5 A output, FSB frame, top-selling rating.", part: "6SL3210-5BE21-5UV1" },
    { tag: "★ POPULAR", name: "5.5 kW V20", desc: "13.2 A output, FSC frame, common mid-size pump/fan rating.", part: "6SL3210-5BE25-5UV1" },
    { tag: "HIGH POWER · FSE", name: "22 kW V20", desc: "48.0 A output, FSE frame, top of V20 range.", part: "6SL3210-5BE32-2UV0" },
  ],
};

import { ROUTES, whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "AUTHORIZED CHANNEL PARTNER · EST. 2016",
  title: ["India's Trusted Siemens PLC,", "VFD & Sensor Distributor"],
  model: "GIDC Vapi, Gujarat · PAN India Supply · GSTIN 24BNAPM9233B1Z1",
  specs: [
    { label: "INDIAMART RATING", value: "4.7 / 5" },
    { label: "BANNER ENGINEERING", value: "Top Performer" },
    { label: "STOCK", value: "Ready · Same/Next Day" },
    { label: "COVERAGE", value: "PAN India · 50+ Cities" },
  ],
  featuresTitle: "Why Industry Professionals Trust Us",
  features: [
    "Authorized channel partner for Siemens, Banner Engineering & Sick",
    "Genuine products only — authorization certificates available on request",
    "Same/next-day dispatch from GIDC Vapi with PAN India delivery",
  ],
  primaryCta: "WhatsApp Now",
  primaryHref: whatsappLink("Hi, I'd like to enquire about your products."),
  secondaryCta: "Call: 98980 16055",
  secondaryHref: "tel:+919898016055",
  overviewTitle: "About Arihant Automation",
  overview: [
    "Arihant Automation is an authorized Siemens channel partner, Banner Engineering Top Performer, and Sick distributor, supplying genuine industrial automation products across India from GIDC Vapi, Gujarat since 2016.",
    "From Siemens PLCs and VFDs to Banner and Sick sensors, we're a single-window source for industrial automation — ready stock, authorized supply, and same-day response on every enquiry.",
  ],
  advTitle: "Certifications",
  adv: [
    { k: "SIEMENS", v: "Authorized Channel Partner" },
    { k: "BANNER ENGINEERING", v: "Top Performer · All Categories" },
    { k: "SICK", v: "Authorized Distributor · India" },
  ],
  docs: [
    { label: "MSME / Udyam Certificate", tint: "#1a9e50" },
    { label: "GST Registration (GSTIN)", tint: "#2266cc" },
    { label: "Download Company Profile", tint: "#c0392b" },
  ],
  techSpecsTitle: "Company Snapshot",
  techSpecs: [
    ["Established", "2016", "Location", "GIDC Vapi, Gujarat"],
    ["Coverage", "PAN India · 50+ Cities", "Rating", "4.7/5 IndiaMART"],
    ["GSTIN", "24BNAPM9233B1Z1", "MSME", "Udyam Certified"],
    ["Contact", "98980 16055", "Email", "arihantautovapi@gmail.com"],
  ],
  modelsSub: "Products We Supply",
  models: [
    { tag: "SIEMENS", name: "Siemens PLC", desc: "S7-200 SMART, S7-1200, S7-1500 — full range.", part: "View PLC Range", to: ROUTES.plc.s71200 },
    { tag: "SIEMENS", name: "Siemens VFD", desc: "V20, G120, G120C, S120 drives.", part: "View VFD Range", to: ROUTES.vfd.category },
    { tag: "SIEMENS", name: "Siemens HMI", desc: "KTP Basic, Comfort & Mobile panels.", part: "View HMI Range", to: ROUTES.hmi },
    { tag: "BANNER / SICK", name: "Industrial Sensors", desc: "Photoelectric, proximity, vision & safety sensors.", part: "View Sensor Range", to: ROUTES.products },
  ],
};

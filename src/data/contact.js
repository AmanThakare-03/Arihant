import { whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "VAPI, GUJARAT · PAN INDIA SUPPLY",
  title: ["Contact Arihant Automation", "Vapi, Gujarat"],
  model: "GSTIN 24BNAPM9233B1Z1 · Est. 2016 · Wholesale Distributor",
  specs: [
    { label: "WHATSAPP RESPONSE", value: "~30 Minutes" },
    { label: "PHONE", value: "+91 98980 16055" },
    { label: "EMAIL", value: "arihantautovapi@gmail.com" },
    { label: "HOURS", value: "Mon–Sat · WhatsApp 7 Days" },
  ],
  featuresTitle: "Reach Us Instantly",
  features: [
    "WhatsApp your model or part number for a quote within 30 minutes",
    "Call for technical product selection or bulk order discussions",
    "Email for formal quotes, PO submissions & GST invoicing",
  ],
  primaryCta: "Open WhatsApp — Send Enquiry",
  primaryHref: whatsappLink("Hi, I'd like to send an enquiry."),
  secondaryCta: "Call: 98980 16055",
  secondaryHref: "tel:+919898016055",
  overviewTitle: "Company Details",
  overview: [
    "Arihant Automation is based at 350, Girnar Khushboo Plaza, GIDC Phase 2, Vapi, Gujarat 396195 — one of India's most active industrial estates in South Gujarat. We're a wholesale distributor established in 2016, GST registered and MSME/Udyam certified.",
    "For fastest response, WhatsApp your product model number or requirement directly — most enquiries receive a quote within 30 minutes during business hours.",
  ],
  advTitle: "Business Hours",
  adv: [
    { k: "MONDAY – FRIDAY", v: "9:00 AM – 6:30 PM" },
    { k: "SATURDAY", v: "9:00 AM – 2:00 PM" },
    { k: "WHATSAPP ENQUIRIES", v: "7 Days · 9 AM – 8 PM" },
  ],
  docs: [
    { label: "Siemens PLC Price Quote", tint: "#2266cc" },
    { label: "Siemens VFD Price Quote", tint: "#c0392b" },
    { label: "Sensor Price Quote (Banner/Sick)", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Contact & Compliance",
  techSpecs: [
    ["Registered Address", "350, Girnar Khushboo Plaza", "Industrial Zone", "GIDC Vapi, Gujarat"],
    ["WhatsApp (Primary)", "+91 98980 16055", "Phone (Alt)", "+91 96621 64856"],
    ["Email", "arihantautovapi@gmail.com", "GSTIN", "24BNAPM9233B1Z1"],
    ["Registration", "MSME / Udyam Certified", "Established", "2016"],
  ],
  modelsSub: "Quick Enquiry — Select Your Requirement",
  models: [
    { tag: "PLC", name: "Siemens PLC Price", desc: "S7-1200 · S7-200 SMART — WhatsApp for instant quote.", part: "wa.me/919898016055", href: whatsappLink("Hi, I'd like a price quote for Siemens PLC.") },
    { tag: "VFD", name: "Siemens VFD Price", desc: "V20 · G120 · G120C — WhatsApp for instant quote.", part: "wa.me/919898016055", href: whatsappLink("Hi, I'd like a price quote for Siemens VFD.") },
    { tag: "SENSORS", name: "Sensor Price Quote", desc: "Banner · Sick · Photoelectric sensors.", part: "wa.me/919898016055", href: whatsappLink("Hi, I'd like a price quote for industrial sensors.") },
    { tag: "POWER SUPPLY", name: "SITOP SMPS Price", desc: "6EP series, 24VDC DIN rail power supply.", part: "wa.me/919898016055", href: whatsappLink("Hi, I'd like a price quote for SITOP SMPS.") },
  ],
};

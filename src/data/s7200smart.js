import { ROUTES, whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "SIEMENS PLC · S7-200 SMART SERIES",
  title: ["Siemens S7-200 SMART", "PLC — CPU & Modules"],
  model: "Part Prefix: 6ES7 288 · CPU ST20 / ST30 / ST40 / ST60",
  specs: [
    { label: "DIGITAL I/O RANGE", value: "8–36 DI / 6–24 DO" },
    { label: "WORK MEMORY", value: "24 – 30 KB" },
    { label: "MOTION CONTROL", value: "PTO · Up to 3 axes" },
    { label: "COMMUNICATION", value: "Integrated Ethernet" },
  ],
  featuresTitle: "Precision Engineered Features",
  features: [
    "High-speed transistor output CPUs with integrated Ethernet",
    "Up to 6 expansion modules — mix digital & analog freely",
    "Genuine 6ES7 288 series, authorized supply from GIDC Vapi",
  ],
  primaryCta: "Enquiry / Request Quote",
  primaryHref: whatsappLink("Hi, I'd like a quote on the Siemens S7-200 SMART."),
  secondaryCta: "Get Data Book",
  secondaryHref: null,
  overviewTitle: "Product Overview",
  overview: [
    "The Siemens S7-200 SMART is India's most popular entry-level compact PLC, built for machine builders and panel builders who need reliable, high-speed control in a compact footprint. Arihant Automation is an authorized Siemens channel partner supplying the complete range from GIDC Vapi, Gujarat.",
    "The ST-series CPUs use transistor outputs for high-speed switching and motion control up to 3 axes of pulse train output, making them ideal for stepper and servo-driven positioning tasks alongside standard machine sequencing.",
  ],
  advTitle: "Advanced Tech",
  adv: [
    { k: "PART PREFIX", v: "6ES7 288 series" },
    { k: "SUPPLY", v: "Authorized · Genuine" },
    { k: "STOCK", v: "Ready Stock · Vapi" },
  ],
  docs: [
    { label: "User Manual (EN)", tint: "#c0392b" },
    { label: "CPU Datasheet (PDF)", tint: "#2266cc" },
    { label: "Authorized Dealer Certificate", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Technical Specifications",
  techSpecs: [
    ["CPU Range", "ST20 · ST30 · ST40 · ST60", "Output Type", "Transistor"],
    ["Analog Input", "1 AI onboard (all models)", "Motion (PTO)", "Up to 3 axes"],
    ["Expansion Slots", "Up to 6 EM modules", "Signal Board", "1 (front slot)"],
    ["Communication", "Integrated Ethernet port", "Supply Voltage", "24 V DC"],
  ],
  modelsSub: "Customers Also Viewed",
  models: [
    { tag: "CPU · ST SERIES", name: "CPU ST20", desc: "8 DI / 6 DO transistor, 24 KB memory, 3-axis PTO.", part: "6ES7 288-1ST20-0AA1" },
    { tag: "CPU · ST SERIES", name: "CPU ST30", desc: "18 DI / 12 DO transistor, 30 KB memory, 3-axis PTO.", part: "6ES7 288-1ST30-0AA1" },
    { tag: "CPU · ST SERIES", name: "CPU ST40", desc: "24 DI / 16 DO transistor, 30 KB memory, 3-axis PTO.", part: "6ES7 288-1ST40-0AA1" },
    { tag: "COMPARE", name: "Siemens S7-1200", desc: "Need more I/O or PROFINET? Compare the mid-range S7-1200.", part: "View S7-1200 →", to: ROUTES.plc.s71200 },
  ],
};

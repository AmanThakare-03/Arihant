import { ROUTES, whatsappLink } from "../routes.js";

export const DATA = {
  eyebrow: "SIEMENS PLC · S7-1200 SERIES",
  title: ["Siemens S7-1200", "PLC — 13 CPU Variants"],
  model: "Part Prefix: 6ES7 21x · CPU 1211C – 1217C",
  specs: [
    { label: "CPU VARIANTS", value: "13 Models" },
    { label: "ONBOARD I/O", value: "6/4 – 14/10 DI/DO" },
    { label: "PROGRAM MEMORY", value: "50 – 150 KB" },
    { label: "POWER OPTIONS", value: "DC 24V / AC 85–240V" },
  ],
  featuresTitle: "Precision Engineered Features",
  features: [
    "PROFINET integrated on every CPU for HMI, SCADA & drives",
    "DC/DC/DC, AC/DC/Relay and DC/DC/Relay variants across the range",
    "Genuine 6ES7 21x series, all 36 part numbers, ready stock PAN India",
  ],
  primaryCta: "Enquiry / Request Quote",
  primaryHref: whatsappLink("Hi, I'd like a quote on the Siemens S7-1200."),
  secondaryCta: "Get Data Book",
  secondaryHref: null,
  overviewTitle: "Product Overview",
  overview: [
    "The Siemens S7-1200 is a scalable, modular mid-range controller built for machine and process automation. Arihant Automation supplies the complete system — 13 CPU variants, digital & analog signal modules, communication modules and memory cards — as an authorized Siemens channel partner since 2016.",
    "The CPU 1214C is the most widely specified model for its balance of I/O count and memory, but the range scales down to the compact 1211C and up to the high-performance 1217C for demanding process and motion applications.",
  ],
  advTitle: "Advanced Tech",
  adv: [
    { k: "SIGNAL MODULES", v: "16 SM Models" },
    { k: "COMMUNICATION", v: "CM 1241 · RS485" },
    { k: "MEMORY CARDS", v: "4 MB – 256 MB" },
  ],
  docs: [
    { label: "User Manual (EN)", tint: "#c0392b" },
    { label: "CPU Selection Guide (PDF)", tint: "#2266cc" },
    { label: "Authorized Dealer Certificate", tint: "#1a9e50" },
  ],
  techSpecsTitle: "Technical Specifications",
  techSpecs: [
    ["CPU Range", "1211C · 1212C · 1214C · 1215C · 1217C", "Output Type", "Transistor / Relay"],
    ["Program Memory", "50 KB – 150 KB", "Power Supply", "DC 24V or AC 85–240V"],
    ["Communication", "Integrated PROFINET", "Expansion", "Signal + Comm modules"],
    ["Memory Card", "4 MB – 256 MB SIMATIC", "Signal Board", "1 (front slot)"],
  ],
  modelsSub: "Customers Also Viewed",
  models: [
    { tag: "CPU 1211C", name: "CPU 1211C", desc: "6 DI / 4 DO onboard, 50 KB memory. Compact entry model.", part: "6ES7 211-1AE40-0XB0" },
    { tag: "CPU 1212C", name: "CPU 1212C", desc: "8 DI / 6 DO onboard, 75 KB memory.", part: "6ES7 212-1AE40-0XB0" },
    { tag: "CPU 1214C ★", name: "CPU 1214C", desc: "14 DI / 10 DO onboard, 100 KB memory. Most popular.", part: "6ES7 214-1AG40-0XB0" },
    { tag: "COMPARE", name: "Siemens S7-200 SMART", desc: "Need a compact entry-level PLC instead? Compare the S7-200 SMART.", part: "View S7-200 SMART →", to: ROUTES.plc.s7200 },
  ],
};

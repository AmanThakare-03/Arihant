/* CENTRAL ROUTE MAP — single source of truth for every link in the site */
export const ROUTES = {
  home: "/",
  products: "/products",
  plc: {
    s7200: "/products/plc/s7-200-smart",
    s71200: "/products/plc/s7-1200",
  },
  vfd: {
    category: "/products/vfd",
    v20: "/products/vfd/v20",
    g120: "/products/vfd/g120",
  },
  hmi: "/products/hmi",
  contact: "/contact",
};

export const WHATSAPP_NUMBER = "919898016055";

export function whatsappLink(text) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

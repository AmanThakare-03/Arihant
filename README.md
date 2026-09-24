# 3Arihant Automation — Website

A multi-page React site for Arihant Automation (Siemens PLC / VFD / HMI distributor),
built with Vite, React Router and Tailwind CSS.

## Structure

```
src/
  theme.js              Shared color/font tokens
  routes.js             Central route map + WhatsApp link helper
  components/
    Nav.jsx              Site header, with a real Products mega-dropdown
    Footer.jsx            Site footer
    Art.jsx               Decorative SVG art (module + product-card art)
    PageShell.jsx          Hero / Overview / Specs / Related-products layout
                            shared by every page
  data/                  One file per page holding just its content (text,
                          specs, related-product links, CTA targets)
  pages/                 One tiny component per route — wires a data file
                          into <PageShell>
  App.jsx                Route table
  main.jsx               Entry point (wraps App in <BrowserRouter>)
```

Every page was originally a fully self-contained ~450-line component with
duplicated Nav/Hero/Footer code. This project pulls that shared layout into
`PageShell`/`Nav`/`Footer` once, so each page is now just a content file +
3 lines of wiring — and all navigation (nav bar, dropdown, "View Range"
cards, "Customers Also Viewed" cards, footer links, Call/WhatsApp buttons)
is now real, working links instead of decorative dead links.

## Pages / Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Products catalog overview |
| `/products/plc/s7-200-smart` | Siemens S7-200 SMART |
| `/products/plc/s7-1200` | Siemens S7-1200 |
| `/products/vfd` | VFD category (V20 / G120C / G120) |
| `/products/vfd/v20` | Siemens SINAMICS V20 |
| `/products/vfd/g120` | Siemens SINAMICS G120 |
| `/products/hmi` | Siemens HMI (KTP panels) |
| `/contact` | Contact page |

"Services", "Our Projects" and "About Us" have no content yet, so those
nav links are inert placeholders — add pages for them the same way as any
route above once you have content.

## Running it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
```

## Notes

- WhatsApp buttons open `wa.me/919898016055` with a pre-filled message.
- "Call" buttons use `tel:` links.
- "Download Catalog PDF" / "Get Data Book" buttons are left inert since no
  actual PDF files were supplied — point `secondaryHref` in the matching
  `src/data/*.js` file at a real file URL to activate them.
- Add a new product page by: creating `src/data/yourPage.js`, a 4-line
  component in `src/pages/`, a route in `App.jsx`, and an entry in
  `ROUTES` (`src/routes.js`) plus `PRODUCT_MENU` (`src/components/Nav.jsx`)
  if it should appear in the dropdown.

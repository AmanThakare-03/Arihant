import PageShell from "../components/PageShell.jsx";
import { DATA } from "../data/products.js";

export default function Products() {
  return <PageShell data={DATA} activeLink="Products" activeProduct="" />;
}

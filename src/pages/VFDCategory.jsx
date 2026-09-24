import PageShell from "../components/PageShell.jsx";
import { DATA } from "../data/vfdCategory.js";

export default function VFDCategory() {
  return <PageShell data={DATA} activeLink="Products" activeProduct="vfd" />;
}

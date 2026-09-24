import PageShell from "../components/PageShell.jsx";
import { DATA } from "../data/s7200smart.js";

export default function S7200Smart() {
  return <PageShell data={DATA} activeLink="Products" activeProduct="s7200" />;
}

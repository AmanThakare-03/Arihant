import PageShell from "../components/PageShell.jsx";
import { DATA } from "../data/hmi.js";

export default function HMI() {
  return <PageShell data={DATA} activeLink="Products" activeProduct="hmi" />;
}

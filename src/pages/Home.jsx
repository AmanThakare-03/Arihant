import PageShell from "../components/PageShell.jsx";
import { DATA } from "../data/home.js";

export default function Home() {
  return <PageShell data={DATA} activeLink="Home" activeProduct="" />;
}

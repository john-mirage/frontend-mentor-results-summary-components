import "./main.css";
import data from "./data/data.json";

import FmResultsSummary from "./components/fm-results-summary";

customElements.define("fm-results-summary", FmResultsSummary);

const fmResultsSummary = document.querySelector("fm-results-summary");
if (fmResultsSummary) {
  setTimeout(() => fmResultsSummary.data = data, 3000);
}
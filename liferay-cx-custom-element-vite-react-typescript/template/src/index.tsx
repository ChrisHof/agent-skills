import { createRoot } from "react-dom/client";
import "./css/index.scss";

const customElementId: string = "liferay-cx-custom-element";

class LiferayCxCustomElement extends HTMLElement {
  connectedCallback() {
    createRoot(this).render(<h1>Liferay CX Custom Element</h1>);
  }
}

if (!customElements.get(customElementId)) {
  customElements.define(customElementId, LiferayCxCustomElement);
}

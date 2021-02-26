class MacButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = `<button><slot></slot></button>`;
  }
}

customElements.define("mac-button", MacButton);

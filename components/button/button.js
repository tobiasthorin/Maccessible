class MacButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Button</button>`;
  }
}

customElements.define("mac-button", MacButton);

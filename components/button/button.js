class MacButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>MacButton</button>`;
  }
}

customElements.define("mac-button", MacButton);

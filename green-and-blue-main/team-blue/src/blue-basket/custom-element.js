/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
/* globals HTMLElement, window */
import render from "./render";

class BlueBasket extends HTMLElement {
  connectedCallback() {
    this.addToCart = this.addToCart.bind(this);
    const sku = this.getAttribute("sku");
    this.log("connected", sku);
    this.render();
    this.addEventListener("click", this.addToCart);
  }

  refresh() {
    this.log('event recieved "blue:basket:changed"');
    this.render();
  }

  render() {
    this.innerHTML = render(window.blue.count);
  }

  disconnectedCallback() {
    window.removeEventListener("blue:basket:changed", this.refresh);
    this.log("disconnected");
  }

  log(...args) {
    console.log("🛒 blue-basket", ...args);
  }
}

export default BlueBasket;

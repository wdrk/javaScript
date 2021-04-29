'use strict';

class CustomHTMLElement {
  constructor(element) {
    this._element = element;
  }

  get html() {
    return this._element.innerHTML;
  }

  set html(value) {
    this._element.innerHTML = value;
  }
}

const descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype,
  'html'
);
console.log('get' in descriptor);
console.log('set' in descriptor);
console.log(descriptor.enumerable);

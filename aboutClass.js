'use strict';

let propertyName = 'html';

class CustomHTMLElement {
  constructor(element) {
    this._element = element;
  }

  get [propertyName]() {
    return this._element.innerHTML;
  }

  set [propertyName](value) {
    this._element.innerHTML = value;
  }
}

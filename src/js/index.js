import 'babel-polyfill';
import StyleVariables from './StyleVariables.js';

document.addEventListener('DOMContentLoaded', e => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  class Dropdown {
    constructor() {
      const self = this;
      this.native = $('.dropdown');
      this.state = {
        get opened() {
          return self.native.classList.contains('opened');
        }
      };
      this.setPosition();
    }

    get button() {
      return $('.dropdown-button');
    }

    toggle() {
      dropdown.native.classList.toggle('opened');
      this.state.opened ? this.setOpenedPosition() : this.setClosedPosition();
    }

    setPosition() {
      const offsetLeft = this.button.getBoundingClientRect().left;
      this.native.style.transform = `translateX(${ offsetLeft }px)`;
    }

    setClosedPosition() {
      this.native.style.width = '';
    }

    setOpenedPosition() {
      const offsetLeft = this.button.getBoundingClientRect().left;
      this.native.style.width = `calc(100vw - ${ offsetLeft + StyleVariables.grid()*4 }px)`;
    }
  }

  const dropdown = new Dropdown();

  dropdown.button.addEventListener('click', e => {
    dropdown.toggle('opened');
  });

});

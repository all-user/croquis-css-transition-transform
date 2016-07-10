import 'babel-polyfill';

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
      this.setClosedPosition();
    }

    get button() {
      return $('.dropdown-button');
    }

    toggle() {
      dropdown.native.classList.toggle('opened');
      this.state.opened ? this.setOpenedPosition() : this.setClosedPosition();
    }

    setClosedPosition() {
      this.native.style.transform = `translateX(${ this.button.getBoundingClientRect().left }px)`;
    }

    setOpenedPosition() {
      this.native.style.transform = '';
    }
  }

  const dropdown = new Dropdown();

  dropdown.button.addEventListener('click', e => {
    dropdown.toggle('opened');
  });

});

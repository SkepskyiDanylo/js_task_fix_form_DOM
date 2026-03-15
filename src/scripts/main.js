'use strict';

const forms = document.querySelectorAll('form');

for (const form of [...forms]) {
  for (const div of [...form.children]) {
    const input = div.firstElementChild;
    const label = document.createElement('label');

    if (input.nodeName !== 'BUTTON') {
      label.className = 'field-label';
      label.textContent = input.getAttribute('name');
      label.setAttribute('for', input.getAttribute('id'));
      div.prepend(label);

      input.setAttribute('placeholder', input.getAttribute('name'));
    }
  }
}

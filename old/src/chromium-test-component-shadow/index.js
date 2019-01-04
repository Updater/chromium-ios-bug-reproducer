import { runTest } from '../runTest';

export default class ChromiumTestComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  fireChangeEvent() {
    this.dispatchEvent(new Event('change'));
  }

  fireComposedChangeEvent() {
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        composed: true,
      })
    );
  }

  fireChangeEventAndRunTest() {
    this.fireChangeEvent();
    runTest();
  }

  fireComposedChangeEventAndRunTest() {
    this.fireComposedChangeEvent();
    runTest();
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.shadowRoot.innerHTML = `
      <button id="fireChangeEvent">
        A) Fire Change Event 
      </button>

      <button id="fireComposedChangeEvent">
        B) Fire Composed Change Event 
      </button>

      <button id="runTest">
        C) Run Test
      </button>

      <button id="fireChangeEventAndRunTest">
        D) Fire Change Event and Run Test
      </button>

      <button id="fireComposedChangeEventAndRunTest">
        E) Fire Composed Change Event and Run Test
      </button>
    `;

    this.shadowRoot
      .querySelector('#fireChangeEvent')
      .addEventListener('click', this.fireChangeEvent);

    this.shadowRoot
      .querySelector('#fireComposedChangeEvent')
      .addEventListener('click', this.fireComposedChangeEvent);

    this.shadowRoot
      .querySelector('#runTest')
      .addEventListener('click', runTest);

    this.shadowRoot
      .querySelector('#fireChangeEventAndRunTest')
      .addEventListener('click', this.fireChangeEventAndRunTest.bind(this));

    this.shadowRoot
      .querySelector('#fireComposedChangeEventAndRunTest')
      .addEventListener(
        'click',
        this.fireComposedChangeEventAndRunTest.bind(this)
      );
  }
}

customElements.define(
  'chromium-test-shadow',
  ChromiumTestComponent
);

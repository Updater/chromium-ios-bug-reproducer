import { runTest } from '../runTest';

export default class ChromiumTestComponent extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('tabindex', 0);
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


    this.innerHTML = `
      <button class="fireChangeEvent">
        A) Fire Change Event 
      </button>

      <button class="fireComposedChangeEvent">
        B) Fire Composed Change Event 
      </button>

      <button class="runTest">
        C) Run Test
      </button>

      <button class="fireChangeEventAndRunTest">
        D) Fire Change Event and Run Test
      </button>

      <button class="fireComposedChangeEventAndRunTest">
        E) Fire Composed Change Event and Run Test
      </button>
    `;

    this.querySelector('.fireChangeEvent').addEventListener(
      'click',
      this.fireChangeEvent
    );

    this.querySelector('.fireComposedChangeEvent').addEventListener(
      'click',
      this.fireComposedChangeEvent
    );

    this.querySelector('.runTest').addEventListener('click', runTest);

    this.querySelector('.fireChangeEventAndRunTest').addEventListener(
      'click',
      this.fireChangeEventAndRunTest.bind(this)
    );

    this.querySelector('.fireComposedChangeEventAndRunTest').addEventListener(
      'click',
      this.fireComposedChangeEventAndRunTest.bind(this)
    );
  }
}

customElements.define(
  'chromium-test-html',
  ChromiumTestComponent
);

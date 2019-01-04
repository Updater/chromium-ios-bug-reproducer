document.querySelector('chromium-test').value = {
  x: () => { }
};

class Test extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('tabindex', 0);
  }

  fireChangeEvent() {
    this.dispatchEvent(new Event('change'));
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    this.innerHTML = `
    <button>Reproduce</button>
    `;
    this.querySelector('button').addEventListener('click', this.fireChangeEvent)
  }
}

customElements.define(
  'chromium-test',
  Test
);

const logToConsole = (html) => {
  const initalHtml = document.querySelector('#console').innerHTML;
  document.querySelector('#console').innerHTML = html + initalHtml;
}

document.querySelector('#button').addEventListener('click', () => {
  let failed = false;

  try {
    console.log('a')
  } catch (ex) {
    failed = true;
    logToConsole(`<code><pre>ConsoleLog Exception: ${ex.message}\n${ex.stack}</pre></code>`);
  }
  try {
    history.pushState(null, '', 'b');
  } catch (ex) {
    failed = true;
    logToConsole(`<code><pre>PushState Exception: ${ex.message}\n${ex.stack}</pre></code>`);
  }
  if (!failed) {
    logToConsole(`<code><pre>Test passed successfully</pre></code>`)
  }
});

document.querySelector('#gCrWeb').addEventListener('click', () => {
  try {
    __gCrWeb.message.getMessageQueue();
  } catch (ex) {
    logToConsole(`<code><pre>gCrWeb Exception: ${ex.message}\n${ex.stack}</pre></code>`);
  }
})
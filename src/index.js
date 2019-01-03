import './chromium-test-component-shadow';
import './chromium-test-component-html';
import { logToConsole } from './utils';

// Switch between regular function in object and nested
// No observable differences
const testScenario = 'with_function';
// const testScenario = 'with_nested_function';

[
  'chromium-test-shadow.withFunction',
  'chromium-test-html.withFunction',
].forEach(selector => {
  const app = document.querySelector(selector);
  if (testScenario === 'with_function') {
    app.value = {
      x: () => {},
    };
  }

  if (testScenario === 'with_nested_function') {
    app.value = {
      x: {
        y: () => {},
      },
    };
  }
});

const getMessageQueue = () => {
  try {
    window.__gCrWeb.message.getMessageQueue();
  } catch (ex) {
    logToConsole(`
    <code><pre>GetMessageQueue Exception: ${ex.message}\n${
      ex.stack
    }</pre></code>`);
  }
};

const callGetMessageQueue = document.querySelector('#callGetMessageQueue');
callGetMessageQueue.addEventListener('click', getMessageQueue);

// In order to make refreshing easier for gh-pages
const initialHref = window.location.href;
const refreshDemo = document.querySelector('#refresh');
refreshDemo.addEventListener('click', () => {
  window.location.href = initialHref
});

// in order to make it easier to play with functionality
// without the text getting in the way
const toggleInstructions = document.querySelector("#toggleInstructions");
const state = localStorage.getItem('instruction-state');
document.querySelector('#instructions').style.display = state ? state : 'block';
toggleInstructions.addEventListener('click', () => {
  const instructions = document.querySelector('#instructions');
  instructions.style.display = instructions.style.display === 'block' ? 'none' : 'block';
  localStorage.setItem('instruction-state', instructions.style.display);
})


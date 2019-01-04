import { logToConsole } from "./utils";

let count = 0;

export const runTest = () => {
  let failed = false;
  try {
    window.history.pushState(null, '', 'test-me' + count);
    count++;
  } catch (ex) {
    logToConsole(`<code><pre>PushState Exception: ${ex.message}\n${ex.stack}</pre></code>`);
    failed = true;
  }

  try {
    console.log('hello');
    console.log('hello2');
  } catch (ex) {
    logToConsole(`<code><pre>ConsoleLog Exception: ${ex.message}\n${ex.stack}</pre></code>`);
    failed = true;
  }

  if (!failed) {
    logToConsole(`<code><pre>Test Ran Successfully</pre></code>`);
  }
};

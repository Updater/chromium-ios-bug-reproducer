const logToConsole = (html) => {
  const initalHtml = document.querySelector('#console').innerHTML;
  document.querySelector('#console').innerHTML = html + initalHtml;
}

document.querySelector('#button').addEventListener('click', () => {
  document.querySelector("#a").value = {
    x: () => {}
  };

  alert('hi')

  document.querySelector('#a').setAttribute('tabindex', 0);

  document.querySelector("#a").dispatchEvent(new Event('change'));

  try {
    console.log('a')
  } catch (ex) {
    logToConsole(`<code><pre>ConsoleLog Exception: ${ex.message}\n${ex.stack}</pre></code>`);
  }

  try {
    history.pushState(null, '', 'b');
  } catch (ex) {
    logToConsole(`<code><pre>PushState Exception: ${ex.message}\n${ex.stack}</pre></code>`);
  }
});


export const logToConsole = (html) => {
  const initalHtml = document.querySelector('#console').innerHTML;
  document.querySelector('#console').innerHTML = html + initalHtml;
}
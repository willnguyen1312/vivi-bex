// Content script content goes here or in activatedContentHooks (use activatedContentHooks if you need a variable
// accessible to both the content script and inside a hook

let searchInput = null;
let searchButton = null;

const getSearchInput = () =>
  document.querySelector('input[aria-label="Search"');
const getSearchButton = () =>
  document.querySelector('button[aria-label="Search"');
const getMiniviewButton = () =>
  document.querySelector('button[aria-label="Miniplayer (i)"');

(async () => {
  searchInput = getSearchInput();
  searchButton = getSearchButton();
  while (!(searchInput && searchInput)) {
    await new Promise(res =>
      setTimeout(() => {
        res();
      }, 1000)
    );
  }

  searchInput.addEventListener('keydown', event => {
    const isEnter = event.key === 'Enter';
    const miniviewButton = getMiniviewButton();

    if (isEnter && miniviewButton) {
      searchInput.blur();
      miniviewButton.click();
    }
  });

  searchButton.addEventListener('click', event => {
    const miniviewButton = getMiniviewButton();

    if (miniviewButton) {
      miniviewButton.click();
    }
  });
})();

// Content script content goes here or in activatedContentHooks (use activatedContentHooks if you need a variable
// accessible to both the content script and inside a hook

const searchInput = document.querySelector('input[aria-label="Search"');
const searchButton = document.querySelector('button[aria-label="Search"');
const miniviewButton = document.querySelector(
  'button[aria-label="Miniplayer (i)"'
);
console.log(searchInput);
console.log(searchButton);
console.log(miniviewButton);

import { App } from './app/app.js';

let app: App;

/**
 * Callback for when the page is loaded.
 */
const pageLoaded = (event: Event) => {
  window.removeEventListener(event.type, pageLoaded, false);
  app = new App();
  try {
    app.initialise();
  } catch (e) {
    exit();
  }
}

/**
 * Exits the app cleanly.
 */
const exit = () => {
  if (app) {
    app.destroy();
  }
}

// Listen for when the page loads
window.addEventListener('load', pageLoaded, false);

// Listen for when the page unloads
window.addEventListener('beforeunload', event => exit(), true);

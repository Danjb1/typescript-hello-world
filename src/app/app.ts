export class App {

  /**
   * Called when the whole page is loaded.
   */
  public initialise(): void {
    document.body.innerHTML = 'Hello world!';
    console.log('App initialised!');
  }

  /**
   * Cleans up the application.
   */
  public destroy(): void {
    console.log('App destroyed!');
  }

}

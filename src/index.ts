const app = document.getElementById("app");
if (app) {
  app.innerHTML = `
  <h1>Classes</h1>
  <p>This practice is a little different. Instead of just making sure TypeScript's 
  type checker passes, you also need to write your code to match some automated tests. 
  Switch the CodeSandbox tab from 'Browser' to 'Tests' to see the automated tests in action.
  Then, update the code in <code>/src/classes.ts</code> to make the tests pass. Finally, make
  sure you double check <code>/src/classes.test.ts</code> to make sure TypeScript's type checker is passing 
  in that file too.
  `;
}

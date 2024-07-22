import "./App.css";
import Calculator from "./Calculator";

/**
 * The main App component that renders the header and the Calculator component.
 */
function App() {
  return (
    <>
      {/* Header section with title and description */}
      <header>
        <h1>Age in Days Calculator</h1>
        <p>
          Given how many years old someone is, this app will tell you how many
          days old they are.
        </p>
      </header>

      {/* Main section containing the Calculator component */}
      <main className="main-container">
        <Calculator />
      </main>
    </>
  );
}

export default App;

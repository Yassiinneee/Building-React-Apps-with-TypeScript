/*
  Import components
*/
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';

/*
  Main application component
*/
function App() {

  return (

    <div>

      {/* Greeting component */}
      <Greeting name="Yassine" />

      <hr />

      {/* Counter component */}
      <Counter />

    </div>
  );
}

/*
  Export App component
*/
export default App;
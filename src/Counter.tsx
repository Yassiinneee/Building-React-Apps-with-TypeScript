/*
  Import only Component
  from React library.
*/
import { Component } from 'react';

/*
  Interface for component state.

  count must always be a number.
*/
interface CounterState {
  count: number;
}

/*
  Class component using TypeScript generics.

  Component<Props, State>

  {} = no props

  CounterState = structure of state
*/
class Counter extends Component<{}, CounterState> {

  /*
    Initialize component state.

    count starts at 0.
  */
  state: CounterState = {
    count: 0
  };

  /*
    Function to increase count.

    (): void
    means the function returns nothing.
  */
  increment = (): void => {

    /*
      Update state using setState().
      Add 1 to current count.
    */
    this.setState({
      count: this.state.count + 1
    });
  };

  /*
    render() displays the UI.
  */
  render() {

    return (
      <div>

        {/* Display current count */}
        <p className="counter-text">
          Count: {this.state.count}
        </p>

        {/* Button triggers increment function */}
        <button onClick={this.increment}>

          Increment

        </button>

      </div>
    );
  }
}

/*
  Export component
  for use in other files.
*/
export default Counter;
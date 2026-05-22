/*
  Interface that defines the props structure.

  The component must receive:
  - name → must be a string
*/
interface GreetingProps {
  name: string;
}

/*
  Functional React component.

  ({ name }: GreetingProps)
  means:
  - destructure the "name" prop
  - apply the GreetingProps type
*/
const Greeting = ({ name }: GreetingProps) => {

  /*
    JSX returned by the component.
    Displays the name dynamically.
  */
  return (
        <div className="greeting">


      {/* Display greeting message */}
      Hello, {name}

    </div>
  );
};

/*
  Export component
  so it can be used in other files.
*/
export default Greeting;
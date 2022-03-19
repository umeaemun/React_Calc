import {add, sub, mul, div} from "./Calc";
import './App.css';

function App() {
  return (
   <>
   <ul>
     <li>Sum is {add(1,3)}</li>
     <li>Subtraction is {sub(4,2)}</li>
     <li>Multiplication is {mul(4,2)}</li>
     <li>Division is {div(4,2)}</li>
   </ul>
   </>
  );
}

export default App;

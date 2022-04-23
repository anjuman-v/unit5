import logo from './logo.svg';
import './App.css';
import { Button } from "./components/Button"

function App() {
 
  return (
  <div className='App'>
  <Button>button</Button>
  <Button bgcolor={"red"} color={"blue"}>button1</Button>
  <Button bgcolor={"blue"}>button2</Button>
   </div>

       

  );
}

export default App;

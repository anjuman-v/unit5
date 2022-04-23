import './App.css';
import { Todoapp } from './components/Todoapp'
import { DisplayStatus } from './display/ContextDisplay'

function App(){
  return (
    <div className='App'>
<Todoapp/>
   <DisplayStatus/>
    </div>
    
  )
}

export default App;
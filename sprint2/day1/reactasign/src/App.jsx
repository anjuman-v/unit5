import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <div className='todoAdd container Todocontainer'>
    <h1 className='todoheading'>ToDo List</h1>

   <TodoList/>
    </div>



    </>
  );
}

export default App;
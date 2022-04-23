

import './App.css';
import { ToDo } from './components/ToDo';


//TO Do=>

function App(){
  return (
    <div className='App'>
        <ToDo></ToDo>
    </div>
  )
}

////////////////

// function App() {
//   const [age, setAge] = useState(0);

//   const getData = (data) => {
//     setAge(data)
//   }

//   return (
//     <div className="App">
//         <First handleData = {getData}></First>
//         <Second age={age}></Second>
//     </div>
//   );
// }

// function First({handleData}){

//   const age = 10;
//   handleData(age);
//   return <div>
//    Child of app  <p>your age is {age}</p>
//     <Second age = {age}></Second>
    

//   </div>
// }

// function Second({age}){
//   return <div>
//   Child of app <p>your age is {age+10}</p>
//   </div>
// }

export default App;
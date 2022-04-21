import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ["Android", "blackberry", "iPhone", "windows phone"];
  const arr2 = ["sumsung", "HTC", "apple", "oppo"]
  return (
  <div>
   <div>
     <h1>Mobile Operating System</h1>
     {arr.map((e) =>{
       return <li>{e}</li>
     })}
     </div>
     <div className='mobilediv'>
     <h1>Mobile Manufacture</h1>
     {arr2.map((e) =>{
       return <li>{e}</li>
     })}

   </div>
   </div>

       

  );
}

export default App;

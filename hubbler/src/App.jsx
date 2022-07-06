import { useState } from 'react';
import './App.css';
import {Form} from './components/Form';

function App() {
  const [state,setState] = useState(false);
  const [rule,setRule] = useState([{default:""}]);
  const [but,setBut] = useState(true);
  const handlebutton=()=>{
    setState(!state);
    setBut(!but);
  }
  const handlerule=()=>{
    if(rule.length<=5){
      setRule([...rule,{default:""}])
    }
  }
  return (
    <div className="App">
      <div id="data">
      <h2>Rule {rule.length}</h2>
     { rule.map((e,i)=>{
        return(
          <div key={i} >
            {rule.length<=5&&<input type="text" placeholder='Default Rule' />}
          </div>
        )
      })}
      <div>
        {
          but?
          <button disabled={rule.length===5} onClick={handlerule}>Add New Rule</button>:""
        }
      </div>
      </div>
      <div className='done'>
      <button className='done' onClick={handlebutton}>{state?"Edit":"Done"}</button>
      <div>
       <Form but={but} />
      </div>
      </div>
       
    </div>
  );
}

export default App;

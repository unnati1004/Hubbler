import { useState } from 'react';
import './App.css';
import { Detail } from './components/Detail';
import {Form} from './components/Form';

function App() {
  const [state,setState] = useState(false);
  const [data,setData] = useState(<Form/>);
  const [rule,setRule] = useState([{default:""}])
  const handlebutton=()=>{
    setState(!state);
    if(!state){
      setData(<Detail/>);
    }
    else{
      setData(<Form/>)
    }
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
          <button disabled={rule.length===5} onClick={handlerule}>Add New Rule</button>
      </div>
      </div>
      <div className='done'>
      <button className='done' onClick={handlebutton}>{state?"Edit":"Done"}</button>
      <div>
        {data}
      </div>
      </div>
       
    </div>
  );
}

export default App;

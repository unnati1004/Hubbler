// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Default </h2>
      <p>Button-Name</p>
      <input type="text" placeholder='Button-Name' />
      <div>
        <select name="" id="">
          <option value="">All</option>
        </select>
        <p>of the following conditions are met:</p>
      </div>
      <div>
        <select name="" id="">
          <option value="">Text</option>
        </select>
        <select name="" id="">
          <option value="">Contains</option>
        </select>
      </div>
      <div>
        <button>Add New Condition</button>
      </div>
      <br />
       <p>Perform the following action:</p>
      <input type="text" placeholder='Button-Name' />
      <br />
      <div>
        <button>Add another action</button>
      </div>
    </div>
  );
}

export default App;

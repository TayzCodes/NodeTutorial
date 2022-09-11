import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function getDataToRender(data){
  return(<div>
    {
      
      data.map(item => {
        console.log("ITEM", item);
        return(<div className={"list-item"}>
          <div>{item.username}</div>
          <div>{item.todo}</div>
          <div>{item.isDone}</div>
        </div>)
      })
    }
  </div>)
}
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/todos/test")
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data);
        setData(data)});
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <div>{!data ? "Loading..." : getDataToRender(data)}</div>
      </header>
    </div>
  );
}

export default App;

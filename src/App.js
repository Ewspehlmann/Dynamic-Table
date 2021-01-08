import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
/*
Gitting git 
*/

function requestUserRepos(usernames){
  //attempt with ajax 
  //creating new request
  const req = new XMLHttpRequest();
  //end point , passing username 
  const url = `https://api.github.com/users/${usernames}/repos`;
  // Open a new connection, using a GET request via URL endpoint
  
  req.open('GET', url, true);
  //processing request
  req.onload=function(){
    const data = JSON.parse(this.response);
    
    console.log(data.map(row => row.name));
    
  }
  //sending the request
  req.send();
  
  
}
function GitForm(){
  const [user, setUser] = useState("");
  const handleSubmit = (e) =>{
    alert(`submitted user: ${user}`);
    //requestUserRepos({user});
  }
  return(
    <div>
    <form style =
    {{display:"flex",height:"20px",width:"20px",margin:"10px"}}
    onSubmit = {handleSubmit}
    >
    
      <input 
      style ={{float:"left",fontSize:"15px",border:"1 solid blue",width:"150px"}}
        type= "text" 
        placeholder ="user"
        onChange = {e =>setUser(e.target.value)}
      
      ></input>
      <input 
      style=
      {{border:"1 solid blue",borderRadius:"20%"}}
      type="submit"
      value="submit"

      ></input>
    </form>
    </div>
  );
}
function Header({cols}){
  return(
    <div style= {{display:"flex",borderBottom:"3px solid black"}}>
      {
        cols.map(c => 
          <div style={{width:"100px"}}>
            {c}
            </div>
          )
      }

    </div>


  );
}
function Row({columns,data}){
  return(
    <div style= {{display:"flex",borderBottom:"3px solid black"}}>
    {columns.map(col => <div style ={{width:'100px'}} >{data[col]}</div>)}
    </div>

  )
}
function Table({data}){
const col = Object.keys(data[0]);
return (
  <div style={{}}>
    <Header cols = {col} />
    {data.map(c => 
      <Row
      columns = {col}
      data = {c}
      key = {c.id}
      />
      )}
    

    </div>

);



}




function App() {
  const data = [
    { id: 0, name: "Greg", sex: "M", age: "34" },
    { id: 1, name: "Henry", sex: "M", age: "44" },
    { id: 1, name: "Sam", sex: "F", age: "23" },
    { id: 2, name: "Hazel", sex: "F", age: "4" }
  ];
  //const test = requestUserRepos("cramja");
 
  return (
    <React.Fragment>
      <div style ={{display:"flex",  justifyContent:"center"}}>
      <GitForm/>
      </div>
    <div style ={{display:"flex",  justifyContent:"center"}}>
    
    <Table data = {data}/>
    </div>
    </React.Fragment>
  )
    
}


export default App;

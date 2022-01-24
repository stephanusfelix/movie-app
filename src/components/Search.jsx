import React , {useState}from "react";

function Search(props){
  const [keyword,setKeyword] = useState("")
  const inputOnChange = (event) => {
    setKeyword(event.target.value);
  }
    return (
      <div>
        <h1>From Navbar</h1>
        <input  onChange={inputOnChange} type="text" placeholder="Search..."></input>
        <button onClick={()=>props.search(keyword)}>Search</button>
      </div>
    );
  }

export default Search
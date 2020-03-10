import React from 'react';

function Food({name}){
  return (
    <div>
      <h1>I like {name} </h1>
    </div>
  )
}
const foodILike =[
  {
    name: "kimchi"
  },
  {
    name: "toast"
  },
  {
    name: "kimchi toast"
  }
]

function App() {
  return (
    <div className="App">
       <h1>Hello</h1> 
       {foodILike.map(dish => <Food name= {dish.name} />)}
    </div>
  );
}

export default App;

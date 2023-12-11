import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person ={name: "Asif Akbar",
  job: "Singer"
};
var person2 ={name: "Monir Khan",
  job: "Singer"
};

var style ={
  color: 'red',
  backgroundColor: 'yellow'
}

const nayok = ['Anwar', 'Jafor', 'Joshim', 'Suhel', 'Shuvo', 'Rubel']

const products = [
  {name: 'Photoshop', price: 'US$22.99/mo',},
  {name: 'Illustrator', price: 'US$10.99/mo',},
  {name: 'Adobe Express', price: 'US$9.99/mo',},
  {name: 'Adobe Firefly', price: 'US$4.99/mo',},
  {name: 'Adobe Premier Pro', price: 'US$29.99/mo',},
]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>My first paragraph</p>
        <h1 style ={style}>My Heading : {person.name+" "+ person.job}</h1>
        <h1>My Heading : {person2.name+" "+ person2.job}</h1>

        {<Counter></Counter>}

        {<Users></Users>}
        
        {/* <Product product= {products[0]}></Product>
        <Product product= {products[1]}></Product> */}

        {
        products.map(product => <Product product={product}></Product>)
        }

        <ul>
          {
          nayok.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <Person name= "Rubel" title= "Best Employee"></Person>        
        <Person name= {nayok[0]} title= "Perfect Choice"></Person>
        <Person name= "Mushfiq" title= "Great choice"></Person>
        <Person name= "Taskin" title= "Employee of the month"></Person>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// ******* How to declare State ********
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease =  () => {
    // const newCount = count + 1;
    setCount(count + 1 );
  };
  const handleDecrease = () => {
    setCount(count - 1);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
// ***************************


// ********* How to load data from server *************
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{users.id},{users.title}</li>)
        }
      </ul>
    </div>
  )
}
// ***********************************

function Person(props){
  return (
  <div className = "App-style">
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <h1> Name: {props.name}</h1>
    <h3>{props.title}</h3>
  </div>
  );
}

function Product(props){
  const productStyle ={
    border: "1px solid gray",
    color: 'black',
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "50vh",
    width: "200px",
    float: "left",
    marginTop:'5px',
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <p style={{fontSize: "10px"}}>The complete PDF solution for working anywhere (includes desktop, web, and mobile access).</p>
      <button style={{marginLeft: "5px"}}>Buy now</button>
    </div>
  )
}

export default App;

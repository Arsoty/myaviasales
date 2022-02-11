import './App.css';

async function f() {
  let res = await fetch(
    'https://raw.githubusercontent.com/BrowningForce/aviasales-react/master/tickets.json'
  )
    .then((response) => response.json())
    .then((data) => data.tickets.map((el) => console.log(el)));
  // .then((response) => {
  //   return response.json();
  // });
  // .then((data) => data.tickets.map((el) => console.log(el)));
  // console.log(res);
  return res;
}
console.log(f());

function App() {
  return <div>Zdarova</div>;
}

export default App;

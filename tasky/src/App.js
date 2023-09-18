// import logo from './logo.svg';

import './App.css';
import Task from './components/Task';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    // <div className="App">
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow" />
      <Task title="Tidy" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
    </Task>
    </div>
    
  );
}


export default App;


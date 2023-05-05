// import logo from './logo.svg';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App ()
{
  const [books, setBooks] = useState([]);

  const createBook = (title) =>
  {
    console.log(title);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

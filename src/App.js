// import logo from './logo.svg';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App ()
{
  const [books, setBooks] = useState([]);

  const createBook = (title) =>
  {
    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }];
    setBooks(updatedBooks);
  };

  const deleteBookByID = (id) =>
  {
    const updatedBooks = books.filter((book) =>
    {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookByID = (id, title) =>
  {
    const updatedBooks = books.map((book) =>
    {
      if (book.id === id)
      {
        return { ...book, title };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID} />
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

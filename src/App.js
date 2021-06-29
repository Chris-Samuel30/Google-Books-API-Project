import logo from './logo.svg';
import './App.css';
import Form from './Containers/Form/Index';
import { useState } from 'react';
import Books from './Containers/Books/Index';
import Header from './Containers/Header/Index';
import Banner from './Containers/Banner/Index';
import Main from './Containers/Main/Index'

function App() {

const [search, setSearch] = useState('');
const [books, setBooks] = useState({items:[]});

  return (
          <>
          <Header/>
          <Banner/>
          <Main search={search} setSearch={setSearch} books={books} setBooks={setBooks}/>
          </>
  );
}

export default App;

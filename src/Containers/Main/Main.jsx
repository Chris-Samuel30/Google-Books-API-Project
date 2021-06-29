import React from 'react'
import Form from '../Form/Index';
import Books from '../Books/Index';
import styles from './Main.module.scss'

const Main = ({search, setSearch, books, setBooks}) => {
    return (
        <div className={styles.Main}>
          <Form search={search} setSearch={setSearch} books={books} setBooks={setBooks}/>
          <Books books={books} setBooks={setBooks}/>
        </div>
    )
}

export default Main
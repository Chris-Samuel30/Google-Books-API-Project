import React from 'react'
import Book from '../../Components/Book/Index';
import styles from './Books.module.scss';

const Books = ({books, setBooks}) => {

return(
<div className={styles.Container}>
<div className={styles.Grid}>
<Book books={books} />
 </div>
 </div>
)

}

export default Books

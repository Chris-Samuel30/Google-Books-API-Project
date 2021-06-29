import React from 'react'
import styles from './Book.module.scss';
import { useState } from 'react';

const Book = ({books, setBooks}) => {

const[isActive, setActive] = useState(false);
const[modalOpen, setModalOpen] = useState(false);


 const handleToggle = () => {
    setActive(!isActive);
  }

    return (
        <>
        {console.log("BOOKS", books)}
        {books.length <= 0 || books.totalItems === 0 ? <p className={styles.Error}>Books cannot be found</p> : books.items.map((book, index) => {
            const Book = {
              id: "null",
              image: null,
              title: "Title Not Found",
              author: "Authors Not Found",
              description:"Description Not Available",
            }
            return (
              <div className={styles.Book} key={book.id}>
                <div className={styles.Flex} >
                  <img className={styles.Image} alt={`${book.volumeInfo.title}`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                    <h3>{book.volumeInfo.title || Book.title}</h3>
                    <h5>{book.volumeInfo.authors === undefined ? Book.author:`${book?.volumeInfo.authors}`.replace(/,/g, ", ")}</h5>
                    <div className={styles.Scroll}>
                    <p>{book.volumeInfo.description === undefined ? Book.description : book.volumeInfo.description.substring(0,150)}<span className={isActive === false ? styles.moreText: styles.ReadMoreText}>{`${book.volumeInfo.description}`.substring(151,`${book.volumeInfo.description}`.length)}</span></p>
                    </div>
                    <div className={styles.button}>
                    <button className={styles.Button} onClick={handleToggle}>Read More</button>
                    </div>
                    </div>
                    </div>

            );
          })}
      </>
    )
}

export default Book

import React from 'react'
import styles from './Book.module.scss';
import { useState } from 'react';

const Book = ({books, setBooks}) => {

const[isActive, setActive] = useState(false);
const[isClicked, setIsClicked] = useState(null);


 const handleToggle = () => {
    setActive(!isActive);
  }

  const getId = (event) => {
    console.log(isClicked);
    setIsClicked(event.target.value);
  }

    return (
        <>
        {books.length <= 0 || books.totalItems === 0 ? <div className={styles.Error}>Books cannot be found</div> : books.items.map((book, index) => {
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
                    <p>{book.volumeInfo.description === undefined ? Book.description : book.volumeInfo.description.substring(0,250)}<span className={isActive === false ? styles.moreText: styles.ReadMoreText}>{`${book.volumeInfo.description}`.substring(250,`${book.volumeInfo.description}`.length)}</span></p>
                    </div>
                    <div className={styles.button}>
                    <button className={styles.Button} onClick={handleToggle}>Read More</button>
                    <button className={styles.Button} value={index} onClick={getId}>Get ID</button>
                    </div>
                    </div>
                    </div>
            );
          })}
      </>
    )
}

export default Book

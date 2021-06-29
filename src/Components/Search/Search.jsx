import React from 'react'
import Button from '../Button/Index';
import getBooks from '../../Data/Api/Index';
import styles from './Search.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';




const Search = ({search, setSearch, books, setBooks}) => {

const onInput = (event) => {
setSearch(event.target.value);
console.log(search)
}

const fetchBooks = async () => {
    const data = await getBooks(search);
    setBooks(data.data);
};

const handleonSubmit = (event) => {
    event.preventDefault();
    fetchBooks();
    setSearch("");
}
    return (
        <div className={styles.Search}>
        <form className={styles.Form} onSubmit={handleonSubmit}>
            <TextField className={styles.Search__Input} onChange={onInput} type="search" value={search} placeholder="Please enter a book title or author"  
            InputProps={{
            endAdornment: (
            <InputAdornment position="start">
                <SearchIcon className={styles.Search__Icon} />
            </InputAdornment>
                            )
                            }}
            />
            <br/>
            <Button/>
        </form>
        </div>
    )
}

export default Search

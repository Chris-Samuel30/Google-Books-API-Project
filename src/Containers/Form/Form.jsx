import Search from '../../Components/Search/Index'
import React from 'react'

const Form = ({search, setSearch, books, setBooks}) => {
    return (
        <div>
            <Search search={search} setSearch={setSearch} books={books} setBooks={setBooks}/>
        </div>
    )
}

export default Form

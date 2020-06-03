import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as fetchBooksFromAPI from "../BooksAPI";
import BookDesign from "./Book"
import useBookShelfApis from"../Hooks/bookShelfHook";



const searchBooksOnline = (React.FunctionComponent = () => {
  
const myData =  {
    query: '',
    books: []
};
 const [data, setData] = useState(myData);
 const {handleBook}=useBookShelfApis();

    
    const updateQuery = (inputValue) => {
        setData({ query: inputValue })
        console.log(inputValue);
    }
   const searchBooks = () => {
        fetchBooksFromAPI.search(data.query)
            .then((books) => {

                console.log(books)
                setData({ books })
            })
    }
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={(event) => updateQuery(event.target.value)} />

                </div>
                <button onClick={()=>searchBooks()} className="searchBooks">+</button>
            </div>
            <div className="search-books-results">

                <ol className="books-grid">
                    {data.books && (data.books.map((b)=>
                        <li key={b.id}>
                        <BookDesign
                            books={b}
                            onSelection={handleBook}
                        />
                    </li>
                    ))}
                </ol>
            </div>
        </div>
    );

});
export default searchBooksOnline;


import React, { useState, useEffect, useCallback } from "react";
import BookStore from "./MyreadPage";
import * as fetchBooksFromAPI from "../BooksAPI";
import { Link } from "react-router-dom";


const listOfBooks = (React.FunctionComponent = () => {
    // Data used in the childelement are defined in this
    const teamData = {
        bookStatus: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        },
        titles: ['Currently Reading', 'Want To Read', 'Read']
    };
    const [data, setData] = useState(teamData);
    //using hard coded data, which can be also Bookd to API call later if needed.
    useEffect(() => {
        fetchBooksFromAPI.getAll()
            .then((books) => {
                console.log(books)
                setData({
                    bookStatus: {
                        currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
                        wantToRead: books.filter((book) => book.shelf === "wantToRead"),
                        read: books.filter((book) => book.shelf === "read")
                    }

                })
            });
    }, [setData]);
    const handleBook = useCallback((book, shelf) => {
        fetchBooksFromAPI.update(book, shelf)
            .then(() => {
                fetchBooksFromAPI.getAll()
                    .then((books) => {
                        setData({
                            currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
                            wantToRead: books.filter((book) => book.shelf === "wantToRead"),
                            read: books.filter((book) => book.shelf === "read")
                        })
                    })
            })
    }, [setData]
    )
    return (
        <>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {teamData.titles.map((title, index) => {
                            return <BookStore
                                key={index}
                                title={title}
                                bookshelf={data.bookStatus}
                                handleBookOnTheShelf={handleBook}
                            />
                        })}
                    </div>



                </div>
                <Link to="/search">
                    <div className="open-search">
                        <button>Add a book</button>
                    </div>
                </Link>
            </div>
        </>
    );
});

export default listOfBooks;
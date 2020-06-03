import React, { useEffect } from "react";
import BookStore from "./MyreadPage";
import { Link } from "react-router-dom";
import useBookShelfApis from"../Hooks/bookShelfHook";


const listOfBooks =()=>{
    const{data,teamData, setData, handleBook,getAllBooks}=useBookShelfApis();

    useEffect(() => {
        getAllBooks();
    }, [setData]);


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
};

export default listOfBooks;
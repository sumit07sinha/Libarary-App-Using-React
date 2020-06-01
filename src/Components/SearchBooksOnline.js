import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book"
class searchBooksOnline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            books: []
        };
    }
    updateQuery = (inputValue) => {
        this.setState({ query: inputValue })
        console.log(inputValue);
    }
    searchBooks = () => {
        search(this.state.query)
            .then((books) => {

                console.log(books)
                this.setState({
                    books: [books]
                })
            })
    }
    render() {
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
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                    <button onClick={this.searchBooks} className="searchBooks">+</button>
                </div>
                <div className="search-books-results">

                    <ol className="books-grid">
                        {this.state.books && (this.state.books.map((bs) => (bs.map((b) =>
                            <li key={b.id}>
                                <Book
                                    books={b}
                                />
                            </li>)
                        )))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default searchBooksOnline;


import React, { Component } from 'react'

class BookDesign extends Component {
    onChange = (selectedValue) => {
        this.props.onSelection(this.props.books, selectedValue)
    }
    render() {

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url("${this.props.books.imageLinks && this.props.books.imageLinks.thumbnail}")` }}
                    />
                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.onChange(event.target.value)} >
                            <option value="move">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.books.title}</div>
                <div className="book-authors">{this.props.books.authors}</div>
            </div>
        )
    }
}

export default BookDesign
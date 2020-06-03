import { useCallback,useState } from "react";
import * as fetchBooksFromAPI from "../BooksAPI";


const useBookShelfApis = () => {
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

    const getAllBooks = useCallback(()=>{
        fetchBooksFromAPI.getAll()
        .then((books) => {
            setData({
                bookStatus: {
                    currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
                    wantToRead: books.filter((book) => book.shelf === "wantToRead"),
                    read: books.filter((book) => book.shelf === "read")
                }

            })
        });
    },[])

    const handleBook = useCallback((book, shelf) => {
        fetchBooksFromAPI.update(book, shelf)
            .then(() => {
                getAllBooks();
            })
    }, []
    );

    return{data,teamData,setData, getAllBooks,handleBook}
};

export default useBookShelfApis;
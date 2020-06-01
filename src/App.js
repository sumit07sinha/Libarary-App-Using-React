import React from 'react'
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import searchBooksOnline from './Components/SearchBooksOnline'
import listOfBooks from './Components/ListOfBooks'
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route
          exact path='/'
          component={listOfBooks}
        />
        <Route
          exact path='/search'
          component={searchBooksOnline}
        />

      </BrowserRouter>)
  }
}
export default App;
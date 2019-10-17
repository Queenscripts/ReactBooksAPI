import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Filter from './Filter';
import Results from './Results';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      author: "",
      price: "",
      textSnippet: ""
    }
  }

  newTitle(title){
    this.setState({
      title
    });
  }

  newAuthor(author){
    this.setState({
      author
    })
  }

  newPrice(price){
    this.setState({
      price
    })
  }

  newText(textSnippet){
    this.setState({
      textSnippet
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    let input = document.getElementById('searchinput').value;
    // let printType = document.getElementById('printType')
    // let bookType = document.getElementById('bookType')
    let url = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyBKc4vTsdGfk8SzS35UW2Z6f3S4NSw1E5k`
  
    fetch(url)
      .then(response=> response.json())
      .then(data => {
        this.setState({
          title: data,
          author: data,
          price: data,
          textSnippet: data
        });
      });
  }
  render(){
    return (
      <div className="main">
        <header className="header">
          <h1> Google Book Search</h1>
        </header>
        <Search submitHandler={this.submitHandler}/>
        <Filter />
        <Results />
      </div> 
    );
  }
}
export default App;

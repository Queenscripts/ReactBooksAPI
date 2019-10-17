import React, {Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import SearchBar from './SearchBar';
import BookType from './BookType';
import PrinType from './PrinType'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      details:"",
      url:"",
      searchTerm: '',
    };
  }

  updateSearchTerm(term){
    this.setState({
      searchTerm: term
    })
  }
  
  updateFilterOption(option){
    this.setState({
      filterOption: option
    })
  }

  componentDidMount (){
    const url = "https://www.googleapis.com/books/v1/volumes?q=parableauthor:octavia&key=AIzaSyBKc4vTsdGfk8SzS35UW2Z6f3S4NSw1E5k"
    const options = {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
    }
  };

  fetch(url, options)
    .then (res => {
      if(!res.ok)
      {
        throw new Error ('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data =>
      {
        this.setState({
          books: data, error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  render(){
    return(
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}/>
      </div>
    );
  }
}
export default App;

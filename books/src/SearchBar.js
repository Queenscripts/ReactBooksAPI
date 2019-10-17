import React, {Component} from 'react';
import App from './App';
import BookType from './BookType'
import SearchBox from './SearchBox'
import PrinType from './PrinType'

class SearchBar extends Component{
render() {
    return(
      <div className="SearchBar">
            <div className="SearchBar__heading">
            <h1> Google Book Search </h1>
        </div>
            <div className="SearchBar__controls">
            <SearchBox 
                searchTerm={this.props.searchTerm}
                handleUpdate={this.props.handleUpdate}
            />
            <BookType 
                filterOption={this.props.filterOption}
                handleFilterChange={this.props.handleFilterChange}
            /> 
            <PrinType
                filterOption={this.props.filterOption}
                handleFilterChange={this.props.handleFilterChange}
            />
            </div>   
      </div>
      )

    }
}

export default SearchBar;
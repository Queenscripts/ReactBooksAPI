import React, {Component} from 'react';
import App from './App';
import SearchBar from './SearchBar'
import PrinType from './PrinType'

class SearchBox extends Component {
render(){
    return(
        <div className="SearchBox">
           <label>
            Search: 
            <input placeholder = "henry"
            value={this.props.searchTerm}
            onChange={e =>this.props.handleUpdate(e.target.value)}>
            </input>
            </label> 
            <button>
                Search
            </button>

        </div>
    )
    }
}

export default SearchBox;
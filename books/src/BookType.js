import React, {Component} from 'react';
import App from './App';
import SearchBar from './SearchBar';
import SearchBox from './SearchBox';
import PrinType from './PrinType';

class BookType extends Component{
render() {
    const {filterOption} = this.props;
    return(
    <div>    
        <form>
            <label>  Book Type: </label>
            <select >
                <option value="filter"> Filter
                </option>
                <option value="filter"> No Filter
                </option>
            </select>
        </form>
    </div>
    )
}
}

export default BookType;
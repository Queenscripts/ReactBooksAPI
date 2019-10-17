import React, {Component} from 'react';
import './Filter.css'

class Filter extends Component{
    render(){
        return(
            <div className="filter">
                <label htmlFor="printType">Print Type:</label> 
                <select name="printType" className="select" id="printType"> 
                    <option>
                        All
                    </option>
                    <option>
                        Book
                    </option>
                    <option>
                        Magazine
                    </option>
                </select>
                <p>Book Type:</p> 
                <select className="select" id="bookType">
                    <option>
                        No Filter
                    </option>
                    <option>
                        Free Ebook
                    </option>
                    <option>
                       Paid Ebook
                    </option>
                </select>
            </div>
        )
    }
}

export default Filter
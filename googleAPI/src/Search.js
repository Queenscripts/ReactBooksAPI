import React, {Component} from 'react'
import './search.css'
class Search extends Component{

    render(){
        return(
            <div className= "search">
                <label htmlFor= "searchinput">Search:</label>
                <input 
                    className= "bar" 
                    type= "text" 
                    id= "searchinput" 
                    name= "searchinput" 
                    placeholder= "book title" 
                required/>
                <button 
                    type="submit">
                    Search
                </button> 
            </div>
        )
    }
}

export default Search
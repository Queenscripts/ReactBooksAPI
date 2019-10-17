import React, {Component} from 'react';
import Book from "./Book"

class Results extends Component {
    render (){
        let books = this.props.books.items.map((book, i)=>
            <Book 
                title= {this.response.title}
                key={i} />
        )
        return(
            <div>
                {books}
            </div>
        )
    }
}

export default Results
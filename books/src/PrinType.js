import React, {Component} from 'react';
import App from './App';
import BookType from './BookType';



class PrinType extends Component{
    render(){
        return(
            <div>    
                <form>
                    <label>  Print Type: </label>
                    <select >
                        <option value="all"> All
                        </option>
                        <option value="digital"> Digital
                        </option>
                        <option value="print"> Print
                        </option>
                    </select>
                </form>
            </div>
        )
    }
}

export default PrinType;
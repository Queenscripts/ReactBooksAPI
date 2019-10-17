import React from 'react';
import Search from './Search';
import Filter from './Filter';

function Form (props){
    return(
        <form >
            <Search />
            <Filter />
        </form>
    )
}

export default Form
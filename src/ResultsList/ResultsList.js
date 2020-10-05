import React from 'react';

export default function ResultsList(props){
    return(
            <div className="results-list">
                <h1>{props.title}</h1>
                <h3>{props.author}</h3>
                <p>{props.price}</p>
                <p>{props.description}</p>
                <img src={props.thumbnail} alt='' width='300' height='400'/>
            </div>
    )
}
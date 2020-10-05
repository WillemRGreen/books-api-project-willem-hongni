import React from 'react';

export default function ResultsList(props){
    return(
        <div className="results-list">
            <li id={props.id}>
                <h1>{props.title}</h1>
                <h3>{props.author}</h3>
                <p>{props.price}</p>
                <p>{props.description}</p>
                
            </li>
        </div>
    )
}
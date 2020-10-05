import React, { Component } from 'react';


export default class SearchForm extends Component{
    state={
        searchValue: ''
    }
    render() {
    return (
        <div>
            <label htmlFor="search-bar">Search</label>
            <input value={this.state.searchValue} onChange={(e)=> this.setState({searchValue: e.currentTarget.value})}name="search-bar" id="search-bar"></input>
            <button onClick={(e) => this.props.handleSubmitButton(this.state.searchValue)} type="submit" className="search-button">Search</button>
            <label htmlFor="print-type">Print Type</label>
            <selector name="print-type" id="print-type">
                <option>All</option>
                <option>BOOKS</option>
                <option>MAGAZINE</option>
            </selector>
        </div> 
    )}
};
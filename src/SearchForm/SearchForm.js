import React, { Component } from 'react';


export default class SearchForm extends Component{
    state={
        searchValue: ''
    }
    render() {
    return (
        <div>
            <label for="search-bar">Search</label>
            <input value={this.state.searchValue} onChange={(e)=> this.setState({searchValue: e.currentTarget.value})}name="search-bar" id="search-bar"></input>
            <button onClick={(e) => this.props.handleSubmitButton(this.state.searchValue)} type="submit" class="search-button">Search</button>
            <label for="print-type">Print Type</label>
            <selector name="print-type" id="print-type">
                <option>All</option>
                <option>BOOKS</option>
                <option>MAGAZINE</option>
            </selector>
        </div> 
    )}
};
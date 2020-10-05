import React, { Component } from 'react';


export default class SearchForm extends Component{
    state={
        searchValue: '',
        filterValue: ''
    }
    render() {
    return (
        <div>
            <label htmlFor="search-bar">Search</label>
            <input value={this.state.searchValue} onChange={(e)=> this.setState({searchValue: e.currentTarget.value})}name="search-bar" id="search-bar"></input>
            <button onClick={(e) => this.props.handleSubmitButton(this.state.searchValue, this.state.filterValue)} type="submit" className="search-button">Search</button>
            <label htmlFor="print-type">Print Type</label>
            <select onChange={(e)=> this.setState({filterValue: e.currentTarget.value})} name="print-type" id="print-type">
                <option value="FILTER_UNDEFINED">All</option>
                <option value="ebooks">ebooks</option>
                <option value="free-ebooks">Free ebooks</option>
                <option value="full">Completed Books Only</option>
                <option value="paid-ebooks">Pay to Read</option>
                <option value="partial">Partially Finished</option>
            </select>
        </div> 
    )}
};
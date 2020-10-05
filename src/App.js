import React, {Component} from 'react';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm'

const apiKey = 'AIzaSyBQfBOsRj9-0wFDUfUFqOgz5njOc_VjDw8';

class App extends Component {
  state = {
    bookList:[],
    error:null
}

  handleSubmitButton = (searchValue) => {
    console.log(searchValue)
    this.handleGetBooks(searchValue)
  }

  handleGetBooks = (searchValue) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=`
    
    fetch(`${url}${searchValue}`)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later')
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      let newList = data.items.map(item =>{
        return {title:item.volumeInfo.title, authors:item.volumeInfo.authors, description:item.volumeInfo.description, price:item.saleInfo.retailPrice? item.saleInfo.retailPrice.amount: '', thumbnail:item.volumeInfo.imageLinks? item.volumeInfo.imageLinks.smallThumbnail: ''}
      })
      this.setState({bookList:newList})
    })
    .catch(err =>{
      this.setState({error:err.message})
      console.log(err)
    });
  }

  componentDidMount() {
    //this.handleGetBooks('')
    
    
}


  render(){
    console.log(this.state.bookList)
    return(
      <div class="main">
        <Header />

        <fieldset class="search-form">
          <SearchForm handleSubmitButton={this.handleSubmitButton}/>
        </fieldset>
      </div>
    )
  }
};

export default App;







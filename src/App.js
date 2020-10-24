import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  handleOnClick = () => {
    this.setState({
      string: 'Fifi',

    })
  }

  handleOnChange = (e) => {
    this.setState({searchField: e.target.value}, () =>{
      console.log(this.state.searchField)
    })

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const {monsters, searchField } = this.state
    const filteredMonsters = monsters.filter( monster => (
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App">
        <header className="App-header">
          <h1>ROLERDEX</h1>
          <SearchBox
            placeholder='search monsters'
            handlechange={this.handleOnChange}/>
          <CardList monsters={filteredMonsters}/>
          <p>
            {this.state.string}
          </p>
          <button onClick={this.handleOnClick}> Click Me!</button>
    
        </header>
      </div>
    );
  }
}

export default App;

import './App.css';
import  React, { Component } from 'react';
import {CardList} from './Components/card-list/card-list.component';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:'',
      infinite:React.createRef(null),
      pagecount:1
    };
  }
 
  getData=()=>{
    fetch("https://api.pokemontcg.io/v2/cards?page=1&pageSize=10")
    .then(response=>response.json())
    .then(
      users =>{
        let s=this.state.monsters;
        console.log('l',s)
        s.concat(users.data);
        console.log(users.data)
        
        this.setState({monsters:users.data})
       });
  }

  componentDidMount(){
    this.getData();
  }
  
  render() 
    {
 
      return (
            <div className="App">
              <h1>Monsters Rolodex</h1>          
              <CardList 
              monsters={this.state.monsters}/>
              </div>
            );
    }

  }

  export default App;
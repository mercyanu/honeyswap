import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import NavMenu from './components/navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsHoney from './components/tabs-honey/tabs-honey.component';
import {SearchBox} from './components/search-box/search-box.component';




class App extends Component{
constructor(){
  super();

  this.state= {
    string: 'Anu Akintoye',
    count: 90,
    searchField: '',
    wallets:[
      {
        name: 'bitcoin',
        value: '$9000',
        id: 'btc01'
      },
      {
        name: 'ethereum',
        value: '$3000',
        id: 'eth01'
      },
      {
        name: 'bitcash',
        value: '$1200',
        id: 'bth01'
      },
      {
        name: 'lion',
        value: '$500',
        id: 'lnn01'
      },
      {
        name: 'tiger',
        value: '$1530',
        id: 'tgr01'
      },
      {
        name: 'steemit',
        value: '$300',
        id: 'stm01'
      },
      {
        name: 'litecoin',
        value: '$4500',
        id: 'lit01'
      }
    ]
  };

}

/* FECTHING USER FROM API
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) //convert retuned promise to json format
  .then(users => this.setState({wallets: users}));
}
*/

  handleChange(e) {
    this.setState({searchField: e.target.value});
  }
  render() {

    const { searchField:searchWord, wallets:walletSet } = this.state;
    const filteredWallets = walletSet.filter(wallet => wallet.name.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
        <div className='App'>
          <NavMenu/>
          <TabsHoney/>
        
        <h1><center>CryptoNow</center></h1>
            {/* <input
              type='search'
              placeholder='enter to search'
              onChange={this.handleChange}
            /> */}

          {/* TO MAKE THE ABOVE SEARCH COMPONENT RESUBALE  */}
          <SearchBox 
            placeholder='...enter to search coin'
            changeHandler={this.handleChange}
          />

          <CardList allWallets={filteredWallets}/>
          
        </div>
    )
  }
  
}

export default App;

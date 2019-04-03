import React, { Component } from 'react';
import './App.css';
import cities from './DB'
import City from './City'
import Header from './Header';

// import   from './Popup';

// import Cards from './Cards';



class App extends Component {
state= {
  cities: cities
}


  render() {
    
    return (
      <div>
      <Header/>
  
<div className='cardHolder' style={{backgroundColor: '',  margin: '20px'}}>

  
      <City cities={this.state.cities}/>
      {/* <Weather cities={this.state.cities}/> */}
      
      </div>
    


      </div>
      
    );
  }
}

export default App;

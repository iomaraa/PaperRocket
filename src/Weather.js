// https://api.openweathermap.org/data/2.5/weather?q=riyadh&appid=e5641209c168c9ca6b5e2aed090e203d


// https://newsapi.org/v2/top-headlines?country=kr&language=en&apiKey=4102d268d5a14bd6bb780903083fc404

// http://geodb-free-service.wirefreethought.com/v1/geo/cities/802

// /v1/geo/cities?limit=5&offset=0

// v1/geo/cities/{cityId}

import React from 'react';

import axios from 'axios';

import icons from './WeatherDB'

export default class Weather extends React.Component {
  state ={
      temp:[],
      icon: ''
  }

  componentDidMount() {
      if (this.props.city){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=metric&appid=e5641209c168c9ca6b5e2aed090e203d`)
      .then(res => {
        this.setState({
            temp: Math.floor(res.data.main.temp),
            icon: res.data.weather[0].main
        })
        let icon = icons.filter(item=> item.name === this.state.icon)
this.setState({icon: icon[0].src})
      })
  }

}

setIcon=()=>{
    // return icons.map(item => item.name == this.state.icon)
}

  render() {
// console.log("*",this.state.icon);
// console.log(this.state.temp);

    console.log("im icons",icons)
// icon = icon[0]
console.log("**icon",this.state.icon);

    return (
      <div ><img src={this.state.icon} style={{height: '23px',width:'23px', marginRight:'10px'}} alt='NO '/> {this.state.temp} °C </div>
    )
  }
}

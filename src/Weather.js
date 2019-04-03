// https://api.openweathermap.org/data/2.5/weather?q=riyadh&appid=e5641209c168c9ca6b5e2aed090e203d


// https://newsapi.org/v2/top-headlines?country=kr&language=en&apiKey=4102d268d5a14bd6bb780903083fc404

// http://geodb-free-service.wirefreethought.com/v1/geo/cities/802

// /v1/geo/cities?limit=5&offset=0

// v1/geo/cities/{cityId}

import React from 'react';

import axios from 'axios';

export default class Weather extends React.Component {
  state ={
      temp:[]
  }

  componentDidMount() {
      if (this.props.city){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=metric&appid=e5641209c168c9ca6b5e2aed090e203d`)
      .then(res => {
        //   let celTemp = res.data.main.temp
       
        this.setState({
            temp: Math.floor(res.data.main.temp)
        })
        // const persons = res.data;
        // this.setState({temp: res });
      })
  }
}


  render() {
   
    return (
      <div>{this.state.temp} °C </div>
    )
  }
}

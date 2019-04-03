import React from 'react';
import axios from 'axios';

export default class News extends React.Component {
  state ={
      news: 'news'
  }

  componentDidMount() {
      if (this.props.city){
    axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.id}&apiKey=4102d268d5a14bd6bb780903083fc404`)
      .then(res => {
        //   let celTemp = res.data.main.temp
       
        this.setState({
            // temp: Math.floor(res.data.main.temp)
            // news: 
        })
        // const persons = res.data;
        // this.setState({temp: res });
      })
  }
}


  render() {
   
    return (
      <div><a href={this.state.temp}>{this.state.news}</a> </div>
    )
  }
}

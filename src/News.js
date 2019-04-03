import React from 'react';
import axios from 'axios';

export default class News extends React.Component {
  state ={
      art: []  }
  
  
  componentDidMount() {
     
    axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.cityId}&apiKey=4102d268d5a14bd6bb780903083fc404`)
      .then(res => {
        // console.log(res);
        
        //   let celTemp = res.data.main.temp
       
        this.setState({
            // temp: Math.floor(res.data.main.temp)
            art: res.data.articles
        })
        // const persons = res.data;
        // this.setState({temp: res });
      })
  }



  render() {

   // eslint-disable-next-line array-callback-return
   let news = this.state.art.map((item, index) =>{
     if (index < 5){
     return <p><a style={{textDecoration: 'none', color:'#000'}} key={index} href={item.url}>{item.title}</a></p> 
     }
    
   })
    return (
      <div style={{backgroundColor: '', borderRadius: '10px'}}>
        {news}
  
      
      </div>
    )
  }
}

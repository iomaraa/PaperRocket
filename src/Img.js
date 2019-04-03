import React, { Component } from 'react'
// import City from './City';

export default class Img extends Component {
  render() {
      
    // let x = this.props.cities.map(img => {
    //     return <img key={img.id} src={img.pic} alt="" />
    //  });
    return (
        <div>
            <img src={this.props.src} alt=''/>
        </div>
    )
  }
}

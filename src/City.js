
import './App.css';

import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col, Row } from 'reactstrap';
import './App.css';
import Clock from './Clock'
import Popup from './Popup'

// import Img from './Img'



export default class City extends Component {
  
  render() {
    

    let img = this.props.cities.map(city => {
      
      return <Col md={3} key={city.id} >
      
      <Card inverse style={{margin: '15px 0'}}  >
      
    <CardImg width="100%" height= '220px' src={city.pic} alt="Card image cap" />
      <CardImgOverlay>
        <Popup city={city.city}/>
        <CardTitle style={{textShadow: '0px 0px 6px #000000', textAlign: 'Center', fontSize: '30px'}} >{city.city}</CardTitle>
        <CardText style={{textShadow: '0px 0px 6px #000000', textAlign: 'Center', fontSize: '30px'}}><Clock time={city.time}/></CardText>
        {/* <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText> */}
      </CardImgOverlay>
    </Card>
      </Col>

   });
  //  <Img key={img.id} src={img.pic} alt="" />
    return (

      <div className='cardHolder'>
      <Row>
        {img}
      </Row>
        
        
        {/* <Img cities={this.props.cities} /> */}
      </div>
    )
  }
}

// const Example = (props) => {
//   return (
//     <div>
//       <Card inverse>
//         <CardImg width="100%" src={img.pic} alt="Card image cap" />
//         <CardImgOverlay>
//           <CardTitle>Card Title</CardTitle>
//           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//           <CardText>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </CardText>
//         </CardImgOverlay>
//       </Card>
//     </div>
//   );
// };

// export default Example;









// import React, { Component } from 'react'
// import './App.css';
// // import Img from './Img'
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';



// export default class City extends Component {
//   render() {
//     let img = this.props.cities.map(img => {
      
//       return <Card className='cards' key={img.id}>

//       <CardImg top width="100%"   src={img.pic} alt="Card cap" />
//       <CardBody>
//         <CardTitle>Card title</CardTitle>
//         <CardSubtitle>Card subtitle</CardSubtitle>
//         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//         <Button>Button</Button>
//       </CardBody>
//     </Card>

//    });
//   //  <Img key={img.id} src={img.pic} alt="" />
//     return (

//       <div className='cardHolder'>
//         {img}
        
//         {/* <Img cities={this.props.cities} /> */}
//       </div>
//     )
//   }
// }

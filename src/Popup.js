import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Weather from './Weather'
import News from './News';
import './weather.css'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader  style={{backgroundColor: '#FF3F3F', letterSpacing:'2px', fontFamily: 'Helvetica', color: 'white'}}  className='styleName'> {this.props.city} <Weather style={{}} city={this.props.city}/></ModalHeader>
            <h3 style={{margin: '5px auto'}}>Latest News</h3>
          
          <ModalBody>
            {/* <b style={{  fontSize: '40px', textAlign: 'center'}}> </b><br /> */}
            <News cityId={this.props.cityId}/>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Popup;
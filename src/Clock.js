import React from "react";


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export default class Clock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      date: ``
    };
  }

  startTime() {
    const today = new Date();
    
    let h = new Date().getUTCHours() +  this.props.time ;
    if (h > 23){
      h = h - 24}
    const m = checkTime(today.getMinutes());
    const s = checkTime(today.getSeconds());

    this.setState({ date: h + ":" + m + ":" + s });
    this.timeout = setTimeout(() => this.startTime(), 500);
  }

  componentDidMount() {
    this.startTime();
  }
  componentWillUnmount() {
    if (!this.timeout) return;
    clearTimeout(this.timeout);
  }
  render() {
    // console.log(this.props.time)
    return( <React.Fragment>{this.state.date}</React.Fragment>);

    
  }
}

import React, { Component } from 'react';

class CenterTitle extends Component {
	constructor(props) {
	    super(props);
	    this.props = {
	      centerTitle: '',
	    };
	  }
  render() {
  	
    return (
      <div className="centerTitle">— {this.props.centerTitle} —</div>
    );
  }
}
export default CenterTitle;

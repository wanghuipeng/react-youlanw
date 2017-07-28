import React, { Component } from 'react';
import './lifeTitle.css';

class LifeTitle extends Component {
	
  render() {
    return (
      <div className="lifeTitle">{this.props.lifeTitle}</div>
    );
  }
}
export default LifeTitle;

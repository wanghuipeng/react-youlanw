import React, { Component } from 'react';
import LineBar from '../common/LineBar';
import './youlanMall.css';

class YoulanMall extends Component {
  render() {
    return (
      <div>
         <ul className="mall">
           <li><img src={this.props.datas.thumbImageUrl} alt={this.props.datas.title} /></li>
         </ul>
      </div>
    );
  }
}
export default YoulanMall;

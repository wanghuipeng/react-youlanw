import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
class InterViewCard extends Component {
	constructor() {
	    super();
	    this.props = {
	      title: '',
	    };
	  }
  render() {
    return (
        <div className="card">
           <div className="card-cont">
              <span className="label">等待面试</span>
	           <h2>装配·检验·包装 普工</h2>
	           <p>飞利浦技术</p>
	           <p className="time">2017-01-16 09:00-12:00</p>
           </div>
           <div className="card-foot">
              <i className="icon icon-local"></i>上海市上海市嘉定区沪宜公路1805号<Icon type="right" />
           </div>
        </div>
    );
  }
}
export default InterViewCard;

import React, { Component } from 'react';


class HomeListItem extends Component {
	
  render() {
    return (
    	
	      <li>
		      <div className="homeListItem">
	            <img src={this.props.data.resource.thumbImageUrl} alt="aas" />
	            <div className="item-right">
		            <div className="comp"><p>{this.props.data.resource.description}-{this.props.data.resource.title}</p><span className="hot-label">{this.props.data.resource.label1}</span></div>
			        <p className="welfare">{this.props.data.resource.resourceValue}</p>
			        <p className="salary">{this.props.data.resource.subtitle}<span className="address">{this.props.data.resource.label2}</span></p>
	            </div>
			  </div>
	      </li>
        
    );
  }
}
export default HomeListItem;

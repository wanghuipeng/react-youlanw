import React, { Component } from 'react';


class CompListItem extends Component {
	
  render() {
    return (
    	
	      <li>
		      <div className="homeListItem">
	            <img src={this.props.data.logo} alt="aas" />
	            <div className="item-right">
		            <div className="comp"><p>{this.props.data.description}-{this.props.data.enterpriseName}</p><span className="hot-label">{this.props.data.labels}</span></div>
			        <p className="welfare">{this.props.data.enterpriseNature}</p>
			        <p className="salary">{this.props.data.welfare}<span className="address">{this.props.data.provinceName+this.props.data.districtName}</span></p>
	            </div>
			  </div>
	      </li>
        
    );
  }
}
export default CompListItem;

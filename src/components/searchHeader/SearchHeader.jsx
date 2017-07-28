import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import SearchInput from './SearchInput';
import { Icon} from 'antd-mobile';


class SearchHeader extends Component {
  render() {
  	
    return (
      <div>
		    <div className="searchHeader clearfix">
		      <div className="left" onClick={this.props.changeCity}>{this.props.city}<Icon type="down" /></div>
		      <div className="center"><Link to="/searchComp"><SearchInput /></Link></div>
		      <div className="right"><Link to="/notice"><Icon type="ellipsis" /></Link></div>
		    </div>  

      </div>
    );
  }
}
export default SearchHeader;


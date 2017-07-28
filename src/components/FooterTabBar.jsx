import React, { Component } from 'react';
import {  Icon ,Flex} from 'antd-mobile';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import App from '../pages/App';
import Mine from '../pages/Mine';
class FooterTabBar extends Component {
	constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
 
  render() {
    return (
    	<div>
    	    <Flex className="tabBar">
		      <Flex.Item className={this.props.active0}><Link to="/"><i className="icon icon-work"></i><p>工作</p></Link></Flex.Item>
		      <Flex.Item className={this.props.active1}><Link to="/life"><i className="icon icon-life"></i><p>生活</p></Link></Flex.Item>
		      <Flex.Item className={this.props.active2}><Link to="/chat"><i className="icon icon-chat"></i><p>说说</p></Link></Flex.Item>
		      <Flex.Item className={this.props.active3}><Link to="/mine"><i className="icon icon-mine"></i><p>我的</p></Link></Flex.Item>
		    </Flex>
         </div>
    );
  }
}
export default FooterTabBar;

import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {Flex,Icon} from 'antd-mobile';

class Classify extends Component {
	
  render() {
  	
    return (
      <div>
			<Flex className="classify">
		      <Flex.Item><Link to="/demo"><div className="item active"><i className="icon icon-work"></i></div><p className="text">一键求职</p></Link></Flex.Item>
		      <Flex.Item><Link to="/interview"><div className="item active"><i className="icon icon-life"></i></div><p className="text">面试安排</p></Link></Flex.Item>
		      <Flex.Item><Link to="/comp"><div className="item active"><i className="icon icon-chat"></i></div><p className="text">本地名企</p></Link></Flex.Item>
		      <Flex.Item><a href="http://m.youlanw.com/sh_zhaopin/?companyType=1"><div className="item active"><i className="icon icon-mine"></i></div><p className="text">全部职位</p></a></Flex.Item>
		    </Flex>
      </div>
    );
  }
}
export default Classify;

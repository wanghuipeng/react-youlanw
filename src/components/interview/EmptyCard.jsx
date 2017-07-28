import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { Button } from 'antd-mobile';

class EmptyCard extends Component {
	constructor() {
	    super();
	    this.props = {
	      title: '',
	    };
	  }
  render() {
    return (
        <div className="emptyCard">

           <p>暂无相关面试信息</p>
           <Button type="primary" inline className="findJob" >帮我找工作</Button>
           <Link to="/comp"><p className="blue">查看本地优选职位</p></Link>
        </div>
    );
  }
}
export default EmptyCard;

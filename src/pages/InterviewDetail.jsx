import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {  NavBar, Icon, List,InputItem,Picker,Tabs,Card} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import personImg from '../images/person.jpg';

const TabPane = Tabs.TabPane;
class InterviewDetail extends Component {
	
  render() {
    return (
      <div className="InterviewDetail">
        <NavBar className="header" mode="light" onLeftClick={() => hashHistory.goBack()}>
           <p className="title">面试详情</p>
	    </NavBar>
         
        <div className="card" style={{"marginTop":"1.2rem"}}>
		    <Card>
		      <Card.Header title="注意事项" />
		      <Card.Body>
		        <div>
		           <h2>面试提示</h2>
		           <p>需要体验</p>
		        </div>
		      </Card.Body>
		      <Card.Footer content="优蓝网预祝您面试成功"/>
		    </Card>
		</div>
      </div>
    );
  }
}

export default InterviewDetail;

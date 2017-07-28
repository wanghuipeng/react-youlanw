import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {  NavBar, Icon, List,InputItem,Picker,Tabs} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import personImg from '../images/person.jpg';
import InterViewCard from '../components/interview/InterViewCard';
import EmptyCard from '../components/interview/EmptyCard';

const TabPane = Tabs.TabPane;
class Interview extends Component {
	
  render() {
    return (
      <div className="interview">
        <NavBar className="header" mode="light" onLeftClick={() => hashHistory.goBack()}
		      rightContent={[
		      	<span>已结束</span>
		      ]}
		    ><p className="title">面试安排</p>
	    </NavBar>
	    
	    <Tabs defaultActiveKey="1" animated={false} className="interview-tab">
	      <TabPane tab="待面试2" key="1">
	        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
	           <Link to="/interviewDetail"><InterViewCard /></Link>
	           <Link to="/interviewDetail"><InterViewCard /></Link>
	           <Link to="/interviewDetail"><InterViewCard /></Link>
	        </div>
	      </TabPane>
	      <TabPane tab="待入职0" key="2">
	        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
	           <EmptyCard />
	        </div>
	      </TabPane>
	      <TabPane tab="待点评0" key="3">
	        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
	           <InterViewCard />
	        </div>
	      </TabPane>
	    </Tabs>
        
      </div>
    );
  }
}

export default Interview;

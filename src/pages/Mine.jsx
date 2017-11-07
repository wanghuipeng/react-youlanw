import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {  NavBar, Icon,Flex} from 'antd-mobile';
import LineBar from '../components/common/LineBar';
import FooterTabBar from '../components/FooterTabBar';
import '../style/App.css';

class Mine extends Component {
	constructor() {
	    super();
	    this.state = {
	      user: [],
	      name:[],
	    };
	  }
	
	getData = () => {
        fetch("/api/v1/account/profile?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=e9505a27cfcf487a8760b8ad5963db8f&uid=56741ada71d03f4122b9f5a6&limit=10&limit=&province_id=&city_id=&area_id=&address=&sign=",
        {
        	mode: 'cors',
        	cache: 'default'
        	
        })
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	this.setState({user:data.entity,name:data.entity.userSecurity.fullName}); 
            }).catch((e) => { console.log(e.message);});
    }    
    
	componentDidMount() {
	  this.getData();
	}
	
  render() {
    return (
    	<div className="pb1">
		    <NavBar className="header header-noleft"
		      rightContent={[
		        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
		        <Icon key="1" type="ellipsis" />,
		      ]}><p className="title">我的</p></NavBar>
		      
		      <Link to="/person">
			    <ul className="user clearfix" style={{"marginTop":"0.9rem"}}>
			      <li><img src={this.state.user.icon} /></li>
			      <li>{this.state.name}</li>
			      <li className="right"><Icon type="right" /></li>
			    </ul>  
              </Link>
		    
            <Flex className="user-list">
		      <Flex.Item><Icon type="koubei" className="home" /><p>个人主页</p></Flex.Item>
		      <Flex.Item><Icon type="koubei" className="collect" /><Link to="/collection" ><p>收藏</p></Link></Flex.Item>
		      <Flex.Item><Icon type="koubei" className="set" /><p>设置</p></Flex.Item>
		    </Flex>
		    
		    
		    <LineBar />
		    <div className="mine-item"><Icon type="koubei" className="coin" />我的金币</div>
		    <div className="mine-item"><Icon type="koubei" className="day" />每日任务</div>
		    <div className="mine-item"><Icon type="koubei" className="gift" />兑换礼包</div>
		    <LineBar />
		    <div className="mine-item"><Icon type="koubei" className="need" />我要找人</div>
		    <LineBar />
		    <div className="mine-item"><Icon type="koubei" className="about" />关于优蓝</div>
		    <div className="mine-item"><Icon type="koubei" className="edit" />意见反馈</div>

		    <FooterTabBar active3="active" />
		    
		</div>
    );
  }
}
export default Mine;

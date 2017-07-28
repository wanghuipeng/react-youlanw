import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {  NavBar, Icon} from 'antd-mobile';

const notices = [{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png",
    "title" : "我的客服",
    "desc" : "呵呵",
  },{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/k/a9a28c/50.png",
    "title" : "社区活动",
    "desc" : "呵呵",
  },{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/q/9de0a6/50.png",
    "title" : "工作通知",
    "desc" : "呵呵",
  },{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/g/f05b48/50.png",
    "title" : "借贷互动",
    "desc" : "呵呵",
  }];
class Notice extends Component {
	
  render() {
    return (
    	<div>
		    <NavBar className="header" mode="light" onLeftClick={() => hashHistory.goBack()}
		      rightContent={[
		        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
		        <Icon key="1" type="ellipsis" />,
		      ]}
		    ><p className="title">消息</p></NavBar>
    	  <ul className="noticeList" style={{"marginTop":"0.9rem"}}>
	        {notices.map(function(notice,index) {
	           return <li key={index} data={notice}>
					      <img src={notice.img} />
					      <div className="right">
					         <h2>{notice.title}</h2>
					         <p>{notice.desc}</p>
					      </div>
				      </li>;
	        })}
	      </ul>
    	</div>
      
    );
  }
}
export default Notice;

import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {  NavBar, Icon} from 'antd-mobile';

const  collections= [{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png",
    "title" : "我收藏的职位",
  },{
    "img" : "http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/k/a9a28c/50.png",
    "title" : "我关注的企业",
  }];
class Collection extends Component {
	
  render() {
    return (
    	<div>
		      <NavBar className="header" mode="light" onLeftClick={() => hashHistory.goBack()}><p className="title">收藏</p></NavBar>
	    	  <ul className="collectList" style={{"marginTop":"0.9rem"}}>
		        {collections.map(function(collection,index) {
		           return <li key={index}>
						      <img src={collection.img} />
						      <span>{collection.title}</span>
					      </li>;
		        })}
		      </ul>
    	</div>
      
    );
  }
}
export default Collection;

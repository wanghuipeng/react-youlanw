import React, { Component } from 'react';
import {Icon} from 'antd-mobile';
import ChatItem from '../components/chat/ChatItem';
import FooterTabBar from '../components/FooterTabBar';

var arr= [];
class Chat extends Component {
	constructor() {
	    super();
	    this.state = {
	      visible:false,
	      datas: [],
	      datas1:[]
	    };
	  }
	
	
	getData = () => {
        fetch("http://10.12.1.44:8080/api/v6/article/ramble?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=e9505a27cfcf487a8760b8ad5963db8f&uid=56741ada71d03f4122b9f5a6&page=1&limit=15",
        {
        	mode: 'cors',
        	cache: 'default'
        	
        })
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	this.setState({
            		visible:true,
            		datas:data.ramble.data,
            	});

            	for(var index in this.state.datas) {
				    arr.push(this.state.datas[index].comments);
				} 

            })
            .catch((e) => { console.log(e.message);});
    }    
    
    
	componentDidMount() {
		this.getData();
	    console.log(this.state.visible)
	}
	
  render() {
    return (
      <div className="pb1">
       {this.state.visible == true ?  <ChatItem datas={this.state.datas}  />:<Icon type="loading" style={{ "position":"fixed","marginTop": "50%","width": "1rem","display": "block","left":"50%","marginLeft":"-0.5rem"}}/>}
       <FooterTabBar active2="active" />
      </div>
    );
  }
}
export default Chat;

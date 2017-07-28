import React, { Component } from 'react';
import Comments from './Comments';
import './chatItem.css';
var arr =  [];
var timestamp4 = new Date(1472048779952);
var time = timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8);
class ChatItem extends Component {
	constructor() {
	    super();
	    this.state = {
	    	click:true,
	        praiseCount: "",

	    };

	  }
	
	praise = (id,count) => {
        fetch("http://10.12.1.44:8080/api/v6/article/ramble?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=e9505a27cfcf487a8760b8ad5963db8f&article_id="+id,
        {method: "POST",mode: 'cors',
        	cache: 'default'})
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	count++;
            	this.setState({
            		praiseCount:count,
            		click:false
            	})
            	arr.push(this.state.praiseCount);
            	console.log("数据"+arr);
            })
            .catch((e) => { console.log(e.message);});
    }  
    

	
  render() {
    return (
        <div>
         {this.props.datas.map((data,index) => (
	      	<div className="chatItem" key={index}>
	             <img className="left" src={data.thumbImage} />
			         <div className="right">
			            <ul>
			               <li className="title">
			                  <span className="name blue">{data.title}</span>
			                  <span className="time">{new Date(data.publishTime).toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8)}</span>
			               </li>
			               <li className="cont">
			                  <div className="txt">{data.content}</div>
			                  <div className="imgs">
			                     <img src={data.createUser.icon} />
			                  </div>
			               </li>
			               <li className="commu clearfix">
			                  <p className="left yellow">{data.circle.name}</p>
			                  <p className="right">
			                  {this.state.click?
			                  	<span className="zan" onClick={() => this.praise(data.id,data.praiseCount)}><i></i>{data.praiseCount}</span>
			                     :
			                    <span className="zan" onClick={() => this.praise(data.id,data.praiseCount)}><i></i>{this.state.praiseCount}</span>
			                    }
			                  <span className="shuo"><i></i>{data.commentCount}</span>
			                  </p>
			               </li>
			                   {
			                   	(data.commentCount==0)? null:
			                   	<li className="comment">

			                   		
			                   		 <Comments results= {data} />


			                   	   
			                   	</li>
			                   }
			            </ul>
			         </div>
			    </div>
	        ))}
          
      </div>
    );
  }
}
export default ChatItem;

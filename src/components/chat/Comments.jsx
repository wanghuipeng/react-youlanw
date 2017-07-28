import React, { Component } from 'react';
import './chatItem.css';
var datas = [
 {
     "comments" : [ 
     {
        "userId" : "566034a9c4aa6f883affe5c6",
        "userName" : "半心酸",
        "userAvatar" : "http://img.youlanw.com/o/img/robot_head/(3347).jpg",
        "content" : "萨达飒飒大萨达所撒多所多所多所",
        "atUser" : {
          "id" : "5660307cc4aa6f883affe29f",
          "name" : "美阿姨i",
          "icon" : "http://img.youlanw.com/o/img/robot_head/(2542).jpg",
          "age" : "33",
          "gender" : "女",
          "easemobName" : "YL_robot_2542_7wD"
        },
        "publishTime" : 1492590953657,
        "clientVersion" : "cms"
      }, 
      {
        "userId" : "5660307cc4aa6f883affe29f",
        "userName" : "美阿姨i",
        "userAvatar" : "http://img.youlanw.com/o/img/robot_head/(2542).jpg",
        "content" : "萨达是倒萨大",
        "atUser" : null,
        "publishTime" : 1492590926593,
        "clientVersion" : "cms"
      }, 
      {
        "userId" : "566034a8c4aa6f883affe5c5",
        "userName" : "无字情书",
        "userAvatar" : "http://img.youlanw.com/o/img/robot_head/(3346).jpg",
        "content" : "千万千万群无群无群",
        "atUser" : {
          "id" : "5673fbdb71d03f3eabcd37e5",
          "name" : "说自己帅的宝宝",
          "icon" : "http://img.youlanw.com/o/img/head/iOS1450441864801.jpg",
          "age" : null,
          "gender" : "男",
          "easemobName" : "yl_13817121806_no0"
        },
        "publishTime" : 1492509543051,
        "clientVersion" : "cms"
      } 
     ],
  	"comments" : [ 
  	{
        "userId" : "566034aac4aa6f883affe5c8",
        "userName" : "够了",
        "userAvatar" : "http://img.youlanw.com/o/img/robot_head/(3349).jpg",
        "content" : "12121212121",
        "atUser" : {
          "id" : "56bebe4871d03f0b6fbb7daf",
          "name" : "测试",
          "icon" : "http://img.youlanw.com/o/img/head/yyyymm/201701/20170105_045024_android.jpg",
          "age" : null,
          "gender" : "男",
          "easemobName" : "yl_13588624179_a7g"
        },
        "publishTime" : 1492498711835,
        "clientVersion" : "cms"
      } 
  	]
  }
];
var arr=[];
class Comments extends Component {
	constructor() {
	    super();
	    this.state = {
	      datas: [],
	    };
	}
	
	componentDidMount() {
	 this.setState({
	  	datas:this.props.results
	  })

	  console.log(this.props.results.comments);
	   
	}
	
  render() {
    return (
    	<ul className="chat-cont">

		  <li><span className="name">{this.props.results.comments[0].userName}: </span>{this.props.results.comments[0].content}</li>
          {
	       	(this.props.results.commentCount>1)? <li><span className="name">{this.props.results.comments[1].userName}: </span>{this.props.results.comments[1].content}</li>:null
	       }
          <li><span className="name">{this.props.results.commentCount}</span></li>
      </ul>
    );
  }
}
export default Comments;

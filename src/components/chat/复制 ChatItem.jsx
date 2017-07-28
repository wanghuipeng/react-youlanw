import React, { Component } from 'react';
import './chatItem.css';

class ChatItem extends Component {
  render() {
    return (
      <div className="chatItem">
         <img className="left" src="http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png" />
         <div className="right">
            <ul>
               <li className="title">
                  <span className="name blue">王会鹏</span>
                  <span className="time">18分钟前</span>
               </li>
               <li className="cont">
                  <div className="txt">今天天气不错,我再人民广场吃着炸鸡喝着可乐</div>
                  <div className="imgs">
                     <img src="http://reactchina.sxlcdn.com/letter_avatar_proxy/v2/letter/b/8e8cbc/50.png" />
                  </div>
               </li>
               <li className="commu clearfix">
                  <p className="left yellow">我的打工生活</p>
                  <p className="right">
                     <span className="zan"><i></i>4</span>
                     <span className="shuo"><i></i>2</span>
                  </p>
               </li>
               <li className="comment">
                  <ul className="chat-cont">
                     <li><span className="name">半心酸:</span>你真棒！</li>
                     <li><span className="name">呵呵哒:</span>哇哦！</li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
    );
  }
}
export default ChatItem;

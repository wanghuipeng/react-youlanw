import React, { Component } from 'react';
import './commonList.css';

class CommonList extends Component {
	
  render() {
    return (
      <ul className="commonList clearfix">
         {this.props.datas.map((data,index) => (
            <li key={index}>
               <a href={data.resource.linkUrl}>
	           <img src={data.resource.thumbImageUrl} />
	           <h2>{data.resource.title}</h2>
	           <p>{data.resource.subtitle}</p>
	           </a>
	        </li>
        ))}
      </ul>
    );
  }
}
export default CommonList;

import React, { Component } from 'react';
import {Flex,Icon} from 'antd-mobile';
import './proService.css';
class ProService extends Component {
  render() {
    return (
      <Flex className="proService">
       {this.props.datas.map((data,index) => (
         	  <Flex.Item key={index}>
	         	  <a href={data.resource.linkUrl}>
	         	  <img src={data.resource.thumbImageUrl} /><p className="text">{data.resource.title}</p>
	         	  </a>
         	  </Flex.Item>
         	
		    ))}
		  </Flex>
    );
  }
}
export default ProService;

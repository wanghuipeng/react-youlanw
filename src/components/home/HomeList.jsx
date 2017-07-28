import React, { Component } from 'react';

import HomeListItem from './HomeListItem';

class HomeList extends Component {
	 
  render() {

    return (

			<ul>
		        {this.props.results.map((result,index) => (
		           <a href={"http://m.youlanw.com/zhaopin_"+result.resource.resourceValue+".html"} ><HomeListItem key={index} data={result}/></a>
		        ))}
		      </ul>
		      

    );
  }
}
export default HomeList;

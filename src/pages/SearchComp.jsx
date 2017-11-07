import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { Icon,SearchBar} from 'antd-mobile';
import SearchInput from '../components/searchHeader/SearchInput';
var replace_text = "";
class SearchComp extends Component {
	constructor() {
	    super();
	    this.state = {
	      compMessis:[],
	      keyword:"",
	    };
	  }
	
	getData = () => {
        fetch("/api/v5/enterprise/findByKeyword?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=&baidu_city_id=289&keyword="+this.state.keyword+"&longitude=121.478416&latitude=31.236256&limit=15&page=1",
        {
        	mode: 'cors',
        	cache: 'default'
        	
        })
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { this.setState({compMessis:data.data}); })
            .catch((e) => { console.log(e.message);});
    }    
    
    change(event){
		var val = event.target.value;
        console.log(val);
        this.setState({
    		keyword:val,
        });
    }
   
    search(){
        this.getData();
        console.log("最终的值："+this.state.keyword);
        
        /*replace_text = (<span className='yellow'>{this.state.keyword}</span>);*/
    }
    
	componentDidMount() {
		console.log("sadsa"+this.refs.node+"sadad");
	}
	
  render() {
    return (
    	<div>
		    <div className="searchHeader clearfix">
		      <div className="left"><Icon type="left" onClick={() => hashHistory.goBack()} /></div>
		      <div className="center"><SearchBar placeholder="输入您想查找的企业" onChange={() => this.change(event)} /></div>
		      <div className="right"><span onClick={() => this.search()}>搜索</span></div>
		    </div>  
		    
		    <ul className="result-list">
		     {this.state.compMessis.map(compMess => (
	          	<a href={"http://m.youlanw.com/qiye_"+compMess.ylCompanyId+".html"}  key={compMess.id}>
	               <li>
			         <p>{compMess.enterpriseName}</p>
			         <p className="address">{compMess.address}</p>
			       </li>
	            </a>
	          ))}
		    </ul>
    	</div>
    );
  }
}
export default SearchComp;

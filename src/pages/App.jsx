import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import SearchHeader from '../components/searchHeader/SearchHeader';
import Banner from '../components/banner/Banner';
import Classify from '../components/Classify';
import CenterTitle from '../components/common/CenterTitle';
import HomeList from '../components/home/HomeList';
import FooterTabBar from '../components/FooterTabBar';
import ChangeCity from '../components/changeCity/ChangeCity';
import {Icon ,Flex} from 'antd-mobile';
import '../style/App.css';

const myCity = new BMap.LocalCity();
class App extends Component {
	
	constructor() {
	    super();
	    this.state = {
	      visible:false,
	      results: [],
	      city:"",
	      showCity:true,
	      branch_id:"1",
	    };
	  }
	
	changeCity(event){
		this.setState({
			city:event.target.value?event.target.value:this.state.city,   //判断当什么城市都不选择，直接点击返回按钮时默认显示已定位好的城市
			showCity:!this.state.showCity,
			branch_id:event.target.id?event.target.id:this.state.branch_id,
		});
		this.getData(event.target.id);
	}
	
	//百度地图定位
	localCity = (result) => {
		this.setState({
			city:result.name
		});
		map.setCenter(this.state.city);
		console.log("当前定位城市:"+this.state.city);
	}
   

    getData = (id) => {
        fetch("/api/v5/adv/homePageByBranchId?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=08f0faadaf5343729c7beb003fa08840&branch_id="+id,
        {
        	mode: 'cors',
        	cache: 'default'
        	
        })
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { this.setState({visible:true,results:data.data}); })
            .catch((e) => { console.log(e.message);});
           
    }    
    
	componentDidMount() {
	  this.getData(this.state.branch_id);
	  //百度地图定位
	  myCity.get(this.localCity);
	}
	
  render() {

    return (
    	
    	<div className="pb1">
    	{this.state.visible == true ?  
    		<div>
	      <SearchHeader city={this.state.city} changeCity={this.changeCity.bind(this)} />
	      {this.state.showCity ? null : <ChangeCity branch_id={this.state.branch_id} city={this.state.city} changeCity={this.changeCity.bind(this)} />}
	      <Banner  />
	      <Classify />
	      <CenterTitle centerTitle="优选职位" />
	      <HomeList results={this.state.results} />
	      </div>
	      :<Icon type="loading" style={{ "position":"fixed","marginTop": "50%","width": "1rem","display": "block","left":"50%","marginLeft":"-0.5rem"}}/> }
	      <FooterTabBar active0="active" />
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import CompListItem from '../components/compList/CompListItem';
import SelectMenu from '../components/selectMenu/SelectMenu';
import { Tabs, ListView, List, SearchBar, NavBar, Icon } from 'antd-mobile';
const TabPane = Tabs.TabPane;
class CompList extends Component {
	constructor() {
		super();
		this.state = {
			compsAll: [],
			compsLocal: [],
			district:"",
			sort:"",
			nature:"",
		}
	}
     
	getDataAll = (district,nature,sort) => {
		fetch("/api/v5/enterprise/findByKeyword?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=&baidu_city_id=1&keyword=&city_no=310100&district_no="+district+"&nature="+nature+"&server=&page=1&sort="+sort+"&limit=25",
		{
        	mode: 'cors',
        	cache: 'default'
        	
        })
			.then((res) => { console.log(res.status); return res.json(); })
			.then((data) => { this.setState({compsAll: data.data}); })
			.catch((e) => { console.log(e.message); });
	}
	
	getDataLocal = () => {
		fetch("/api/v5/enterprise/findByLocation?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&branch_id=1&token=33b7274b7b1b4ecb971c20a63a888251&longitude=121.478416&latitude=31.236256&page=1&limit=15",
		{
        	mode: 'cors',
        	cache: 'default'
        	
        })
			.then((res) => { console.log(res.status); return res.json(); })
			.then((data) => { this.setState({compsLocal: data.data}); })
			.catch((e) => { console.log(e.message); });
	}

    
    /* 筛选---区域 */
    selectDistrict(district){
    	this.setState({
    		district:district
    	})
    	this.getDataAll(district,this.state.nature,this.state.sort);
    }
    /* 筛选---智能排序 */
    selectSort(sort){
    	this.setState({
    		sort:sort
    	})
    	this.getDataAll(this.state.district,this.state.nature,sort);
    }
    /* 筛选---筛选 */
    selectNature(nature){
    	this.setState({
    		nature:nature
    	})
    	this.getDataAll(this.state.district,nature,this.state.sort);
    }
    
	componentDidMount() {
		this.getDataAll(this.state.district,this.state.nature,this.state.sort);
		this.getDataLocal();
	}

	render() {

		return(
			<div>
	            <NavBar className="header" mode="light" onLeftClick={() => hashHistory.goBack()}
			      rightContent={[
			        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
			        <Icon key="1" type="ellipsis" />,
			      ]}
			    ><p className="title">本地名企</p></NavBar>
				
		        <Tabs defaultActiveKey="1" animated={false} className="local-tab">
			      <TabPane tab="全部" key="1" >

			           <SelectMenu district={this.state.district} sort={this.state.sort} nature={this.state.nature} selectDistrict = {this.selectDistrict.bind(this)} selectSort = {this.selectSort.bind(this)} selectNature = {this.selectNature.bind(this)} />
			           <ul>
			           {this.state.compsAll.map(comp => (
				           <a href={"http://m.youlanw.com/qiye_"+comp.ylCompanyId+".html"}  key={comp.id}>
				              <li>
							      <div className="homeListItem">
						            <img src={comp.logo} alt="aas" />
						            <div className="item-right">
							            <div className="comp"><p>{comp.enterpriseName}-{comp.aliasKeys}</p><span className="hot-label">聘</span></div>
								        <p className="welfare">{comp.description}</p>
								        <p className="salary">{comp.welfare}<span className="address">{comp.provinceName+comp.districtName}</span></p>
						            </div>
								  </div>
						      </li>
				           </a>
				        ))}
				      </ul>

			      </TabPane>
			      <TabPane tab="附近" key="2" >
			      
                       <SelectMenu district={this.state.district} sort={this.state.sort} nature={this.state.nature} selectDistrict = {this.selectDistrict.bind(this)} selectSort = {this.selectSort.bind(this)} selectNature = {this.selectNature.bind(this)} />
			           <ul>
			           {this.state.compsLocal.map(comp => (
				           <a href={"http://m.youlanw.com/qiye_"+comp.ylCompanyId+".html"}  key={comp.id}>
				              <li>
							      <div className="homeListItem">
						            <img src={comp.logo} alt="aas" />
						            <div className="item-right">
							            <div className="comp"><p>{comp.enterpriseName}-{comp.aliasKeys}</p><span className="hot-label">聘</span></div>
								        <p className="welfare">{comp.enterpriseScale}</p>
								        <p className="salary">{comp.welfare}<span className="address">{comp.address}</span></p>
						            </div>
								  </div>
						      </li>
				           </a>
				        ))}
				      </ul>

			      </TabPane>
			    </Tabs>
            </div>

		);
	}
}
export default CompList;
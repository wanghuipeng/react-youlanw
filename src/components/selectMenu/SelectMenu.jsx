import React, { Component } from 'react';
import { Icon,Button} from 'antd-mobile';
import './index.css';
class SelectMenu extends Component {
	constructor() {
	    super();
	    this.state = {
	      cityItem: true,
	      sortItem: true,
	      checkItem: true,
	      mask:true,
	      cities:[],
	      districts:[],
	      active:true,
	      city_id:"",
	    };
	  }
	
	selectCity(){
		this.setState({
			cityItem:!this.state.cityItem,
			sortItem:true,
			checkItem:true,
			mask:false,
		});
	}
	selectSorting(){
		this.setState({
			cityItem:true,
			sortItem:!this.state.sortItem,
			checkItem:true,
			mask:false,
		});
	}
	selectCheck(){
		this.setState({
			cityItem:true,
			sortItem:true,
			checkItem:!this.state.checkItem,
			mask:false,
		});
	}
	hideMask(){
		this.setState({
			cityItem:true,
			sortItem:true,
			checkItem:true,
			mask:true,
		});
	}
	addActive(id){
		this.setState({
			active:false,
			city_id:id,
		});
		this.getDistrict(id);
	}
	
	getCity = () => {
		fetch("/api/v4/branch/findCityByBranch?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&branch_id=1",
		{
        	mode: 'cors',
        	cache: 'default'
        	
        })
			.then((res) => { console.log(res.status); return res.json(); })
			.then((data) => { this.setState({cities: data.data}); })
			.catch((e) => { console.log(e.message); });
	}
    getDistrict = (id) => {
		fetch("/api/v4/branch/findDistrictByCity?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&city_id="+id,
		{
        	mode: 'cors',
        	cache: 'default'
        	
        })
			.then((res) => { console.log(res.status); return res.json(); })
			.then((data) => { this.setState({districts: data.data});})
			.catch((e) => { console.log(e.message); });
	}

    getData = (id) => {
		fetch("/api/v4/branch/findDistrictByDistrict?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&district_id="+719,
		{
        	mode: 'cors',
        	cache: 'default'
        	
        })
			.then((res) => { console.log(res.status); return res.json(); })
			.then((data) => { this.setState({districts: data.data}); })
			.catch((e) => { console.log(e.message); });
	}

	componentDidMount() {
		this.getCity();
	}
	
  render() {
  	const cityItem = (<div><div className="mask-layer" onClick={()=>this.hideMask()}></div><div className="item clearfix">
               <ul className="left">
		           {this.state.cities.map(city => (
		              <li ref={"li_"+city.id} key={city.id} onClick={() => this.addActive(city.id)} className={this.state.city_id == city.id ? "active" : null }>{city.cityName}</li>
			        ))}
			   </ul>
               <ul className="right">
                    {this.state.districts.map(district => (
		              <li key={district.id} onClick={() => {this.props.selectDistrict(district.divisionsNo);this.hideMask()}}>{district.districtName}</li>
			        ))}
               </ul>
            </div></div>);
    const sortItem = (<div><div className="mask-layer" onClick={()=>this.hideMask()}></div><div className="item clearfix">
           <ul>
              <li className="active" onClick={() => {this.props.selectSort("sorting");this.hideMask()}}>智能排序</li>
              <li onClick={() => {this.props.selectSort("follow");this.hideMask()}}>最受关注</li>
              <li onClick={() => {this.props.selectSort("praise");this.hideMask()}}>口碑最好</li>
           </ul>
        </div></div>);
    const checkItem = (<div><div className="mask-layer" onClick={()=>this.hideMask()}></div><div className="item clearfix">
           <div className="form-item">
               <h2>企业类型</h2>
               <ul className="clearfix">
                  <li><p onClick={() => {this.props.selectNature("国企");this.hideMask()}}>国企</p></li>
                  <li><p onClick={() => {this.props.selectNature("民营");this.hideMask()}}>民营</p></li>
                  <li><p onClick={() => {this.props.selectNature("外资");this.hideMask()}}>外资</p></li>
                  <li><p onClick={() => {this.props.selectNature("合资");this.hideMask()}}>合资</p></li>
               </ul>
           </div>
           <div className="form-item">
               <h2>企业服务</h2>
               <ul className="clearfix">
                  <li><p onClick={() => {this.props.selectNature("recruit");this.hideMask()}}>在招</p></li>
                  <li><p onClick={() => {this.props.selectNature("loan");this.hideMask()}}>借贷</p></li>
                  <li><p onClick={() => {this.props.selectNature("kickback");this.hideMask()}}>返现</p></li>
               </ul>
           </div>
           <ul className="btn-group clearfix">
              <li><Button className="btn" inline >重置</Button></li>
              <li><Button className="btn" type="primary" inline >确认</Button></li>
           </ul>
        </div></div>);
    return (
      
      <div>
         <ul className="navTop clearfix">
            <li onClick={()=>this.selectCity()}>上海市<Icon type="down" /></li>
            <li onClick={()=>this.selectSorting()}>智能排序<Icon type="down" /></li>
            <li onClick={()=>this.selectCheck()}>筛选<Icon type="down" /></li>
         </ul>
         
         <div className="navCont">
            {this.state.cityItem ? null : cityItem}
            {this.state.sortItem ? null : sortItem}
            {this.state.checkItem ? null : checkItem}
         </div>
      </div>
    );
  }
}
export default SelectMenu;

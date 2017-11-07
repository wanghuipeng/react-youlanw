import React, { Component } from 'react';
import {  NavBar, Icon,Flex} from 'antd-mobile';
import LifeTitle from '../components/life/LifeTitle';
import SalaWelfare from '../components/life/SalaWelfare';
import YoulanMall from '../components/life/YoulanMall';
import ProService from '../components/life/ProService';
import CommonList from '../components/life/CommonList';
import LineBar from '../components/common/LineBar';
import FooterTabBar from '../components/FooterTabBar';
class Life extends Component {
	constructor() {
	    super();
	    this.state = {
	    	visible:false,
	      data1: [],
	      data2: [],
	      data3: [],
	      data4: [],
	      data5: [],
	      data6: [],
	      data7: [],
	      data8: [],
	    };
	  }
	
	getData = () => {
        fetch("/api/v5/adv/life/findTogether?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=33b7274b7b1b4ecb971c20a63a888251&type=1&page=1&limit=10",
        {
        	mode: 'cors',
        	cache: 'default'
        	
        })
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	this.setState({
            		visible:true,
            		data1:data.welfare[0].resource,
            		data2:data.mall[0].resource,
            		data3:data.carreerService,
            		data4:data.tool5,
            		data5:data.tool1,
            		data6:data.tool2,
            		data7:data.tool3,
            		data8:data.tool4,
            	});
            })
            .catch((e) => { console.log(e.message);});
    }    
    
    componentDidMount(){
    	this.getData();
    }
    
  render() {
    return (
    	<div className="pb1" style={{backgroudColor:"#fff"}}>
    	<NavBar className="header header-noleft"
		      rightContent={[
		        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
		        <Icon key="1" type="ellipsis" />,
		      ]}><p className="title">生活</p></NavBar>
		  <div  style={{marginTop:"0.9rem"}} ></div>
		  <LineBar />
		  {this.state.visible == true ?  
		    <div>
		      <LifeTitle lifeTitle="薪资福利"/>
		      <SalaWelfare datas={this.state.data1}  />
		      <LineBar />
		      <YoulanMall datas={this.state.data2} />
		      <LineBar />
		      <LifeTitle lifeTitle="职业服务" />
		      <ProService datas={this.state.data3} />
		      <LineBar />
		      <LifeTitle lifeTitle="在线购物" />
		      <CommonList datas={this.state.data4} />
		      <LineBar />
		      <LifeTitle lifeTitle="常用工具" />
		      <CommonList datas={this.state.data5} />
		      <LineBar />
		      <LifeTitle lifeTitle="本地生活" />
		      <CommonList datas={this.state.data6} />
		      <LineBar />
		      <LifeTitle lifeTitle="休闲娱乐" />
		      <CommonList datas={this.state.data7} />
		      <LineBar />
		      <LifeTitle lifeTitle="趣味咨询" />
		      <CommonList datas={this.state.data8} />
		      <LineBar />
		    </div>
		    :<Icon type="loading" style={{ "position":"fixed","marginTop": "50%","width": "1rem","display": "block","left":"50%","marginLeft":"-0.5rem"}}/> }
	      <FooterTabBar active1="active" />
    	</div>
    );
  }
}
export default Life;

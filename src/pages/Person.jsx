import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {  NavBar, Icon, List,InputItem,Picker,ImagePicker} from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';


import { createForm } from 'rc-form';
// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', padding: '0 0.3rem' }}
  >
    <div style={{ display: 'flex', height: '0.9rem', lineHeight: '0.9rem' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888' }}>{props.extra}</div>
    </div>
  </div>
);
const Item = List.Item;
const seasons = [
  [
    {
      label: '男',
      value: '1',
    },
    {
      label: '女',
      value: '2',
    },
  ]
];
const data = [];
class PersonList extends Component {
	
	
	constructor() {
	    super();
	    this.state = {
	      sValue: ['1'],
	      pickerValue: ['340000','341500','341522'],
	      files:data,
	      user: [],
	      name:[],
	    };
	  }

   getData = () => {
        fetch("http://10.12.1.44:8080/api/v1/account/profile?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=e9505a27cfcf487a8760b8ad5963db8f&uid=56741ada71d03f4122b9f5a6&limit=10&limit=&province_id=&city_id=&area_id=&address=&sign=",
        {
        	mode: 'cors',
        	cache: 'default'
        	
        })
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { 
            	this.setState({user:data.entity,name:data.entity.userSecurity.fullName}); 
            }).catch((e) => { console.log(e.message);});
    }    
    
	componentDidMount() {
	  this.getData();
	}
	
  onChange = (files, type, index) => {
    this.setState({
      user_img:files[0].url,
    });
    console.log(files);
  }
  render() {
  	const { files } = this.state;
  	 const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar className="header" mode="light" onLeftClick={() => hashHistory.goBack()}
		      rightContent={[
		      	<span>保存</span>
		      ]}
		    ><p className="title">消个人资料</p>
	      </NavBar>
	    
	     <List className="person-list" style={{"marginTop":"0.9rem"}}>
	        <Item extra={
						        	<div>
						        	   <img src={this.state.user.icon} /> 
						        	   <ImagePicker files={files} onChange={this.onChange}  onImageClick={(index, fs) => console.log(index, fs)} />
						          </div>
	        	          }
	        	multipleLine className="head">头像</Item>
		     
            <InputItem
	            {...getFieldProps('inputclear')}
	            clear
	            placeholder=""
	            value={this.state.name}
	          >昵称</InputItem>
	          
            <Picker
	          data={seasons}
	          title="选择性别"
	          cascade={false}
	          value={this.state.sValue}
	          onChange={v => this.setState({ sValue: v })}
	        >
	          <List.Item arrow="horizontal">性别</List.Item>
	        </Picker>
		        
		        <div className="district">
	          <Picker
		          data={district}
		          title="家乡"
		          value={this.state.pickerValue}
		          onChange={v => this.setState({ pickerValue: v })}
		        >
		          <CustomChildren>家乡</CustomChildren>
		        </Picker>
            </div>
            
	          <InputItem
	            {...getFieldProps('inputclear')}
	            clear
	            placeholder=""
	            value="普工"
	          >职业</InputItem>
	         </List>
      </div>
    );
  }
}

const Person = createForm()(PersonList);
export default Person;

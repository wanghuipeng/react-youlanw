import React, { Component } from 'react';
import LineBar from '../common/LineBar';
import './salaWelfare.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';

class SalaWelfare extends Component {
  render() {
    return (
      <div>
         <ul className="table1 clearfix">
            
            <li className="tr-l">
                <a href={this.props.datas.linkUrl} style={{display:"block"}}>
	                 <h2>{this.props.datas.title}</h2>
	                 <p>{this.props.datas.subtitle}</p>
	                 <img src={this.props.datas.thumbImageUrl} />
                </a>
            </li>
            
            <li className="tr-r">
                  <a href="http://m.tkinghr.com/MobileSalary/salary/SalaryServices">
                  <ul className="clearfix">
                     <li><img src={img1} /></li>
                     <li>
                        <h2>预借工资</h2>
                        <p>免息24小时到账</p>
                     </li>
                  </ul>
                  </a>
                  <a href="http://m.tkinghr.com/MobileSalary/salary/SalaryServices">
                  <ul className="clearfix">
                     <li><img src={img2} /></li>
                     <li>
                        <h2>查工资单</h2>
                        <p>提前5天看工资</p>
                     </li>
                  </ul>
                  </a>
            </li>
         </ul>
      </div>
    );
  }
}
export default SalaWelfare;

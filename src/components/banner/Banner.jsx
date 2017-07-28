import React, { Component } from 'react';
import { Carousel} from 'antd-mobile';

class Banner extends Component {
    constructor() {
	    super();
	    this.state = {
	      banners:[],
	    }
	  }
  getData = () => {
        fetch("http://10.12.1.44:8080/api/v5/adv/homeBannerByBranchId?appkey=145FB9D1-2643-4B18-B9EA-8CD2C44FAC00&client_id=test&token=08f0faadaf5343729c7beb003fa08840&branch_id=1",
        {
        	mode: 'cors',
        	cache: 'default'
        	
        })
            .then((res) => { console.log(res.status);return res.json(); })
            .then((data) => { this.setState({banners:data.data}); })
            .catch((e) => { console.log(e.message);});
    }    
	componentDidMount() {
	  this.getData();
	}
  render() {
  	const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
    	<Carousel
          className="my-carousel" autoplay={true} infinite selectedIndex={1}
        >
         
          {this.state.banners.map(banner => (
          	<a href={"http://m.youlanw.com/zhaopin_"+banner.resource.resourceValue+".html"}  key={banner.id} style={hProp}>
              <img className="banner-item"
                src={banner.resource.thumbImageUrl}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>

	
    );
  }
}
export default Banner;

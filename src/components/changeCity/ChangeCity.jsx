import React, { Component } from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { ListView, List, SearchBar ,NavBar, Icon} from 'antd-mobile';

const { Item } = List;
const myCity = new BMap.LocalCity();
const data = {
    "A": [
        {
            "id": "155",
            "name": "阿坝州"
        },
        {
            "id": "35",
            "name": "安康"
        },
        {
            "id": "138",
            "name": "安庆"
        },
        {
            "id": "157",
            "name": "安顺"
        },
        {
            "id": "77",
            "name": "安阳"
        },
        {
            "id": "250",
            "name": "鞍山"
        }
    ],
    "B": [
        {
            "id": "200",
            "name": "百色"
        },
        {
            "id": "174",
            "name": "版纳"
        },
        {
            "id": "96",
            "name": "宝鸡"
        },
        {
            "id": "168",
            "name": "保山"
        },
        {
            "id": "143",
            "name": "巴中"
        },
        {
            "id": "274",
            "name": "白城"
        },
        {
            "id": "233",
            "name": "保定"
        },
        {
            "id": "134",
            "name": "蚌埠"
        },
        {
            "id": "207",
            "name": "北海"
        },
        {
            "id": "159",
            "name": "毕节"
        },
        {
            "id": "14",
            "name": "北京"
        },
        {
            "id": "272",
            "name": "白山"
        },
        {
            "id": "248",
            "name": "本溪"
        },
        {
            "id": "284",
            "name": "白银"
        },
        {
          "id": "129",
          "name": "亳州"
        },
        {
          "id": "212",
          "name": "滨州"
        }
    ],
    "C": [
        {
            "id": "232",
            "name": "沧州"
        },
        {
            "id": "65",
            "name": "长春"
        },
        {
            "id": "8",
            "name": "成都"
        },
        {
            "id": "125",
            "name": "常德"
        },
        {
            "id": "244",
            "name": "长治"
        },
        {
            "id": "135",
            "name": "巢湖"
        },
        {
            "id": "187",
            "name": "潮州"
        },
        {
            "id": "226",
            "name": "承德"
        },
        {
            "id": "122",
            "name": "郴州"
        },
        {
            "id": "137",
            "name": "池州"
        },
        {
            "id": "204",
            "name": "崇左"
        },
        {
            "id": "172",
            "name": "楚雄"
        },
        {
            "id": "132",
            "name": "滁州"
        },
        {
            "id": "9",
            "name": "重庆"
        },
        {
            "id": "39",
            "name": "长沙"
        },
        {
            "id": "256",
            "name": "朝阳"
        },
        {
            "id": "24",
            "name": "常州"
        }
    ],
    "D": [
        {
            "id": "167",
            "name": "大理"
        },
        {
            "id": "142",
            "name": "达州"
        },
        {
            "id": "252",
            "name": "丹东"
        },
        {
            "id": "175",
            "name": "德宏"
        },
        {
            "id": "52",
            "name": "东莞"
        },
        {
            "id": "58",
            "name": "大连"
        },
        {
            "id": "217",
            "name": "东营"
        },
        {
            "id": "262",
            "name": "大庆"
        },
        {
            "id": "235",
            "name": "大同"
        },
        {
            "id": "287",
            "name": "定西"
        },
        {
            "id": "44",
            "name": "德阳"
        },
        {
            "id": "211",
            "name": "德州"
        }
    ],
    "E": [
        {
            "id": "114",
            "name": "鄂州"
        }
    ],
    "F": [
        {
            "id": "206",
            "name": "防城港"
        },
        {
            "id": "51",
            "name": "佛山"
        },
        {
            "id": "246",
            "name": "抚顺"
        },
        {
            "id": "128",
            "name": "阜阳"
        },
        {
            "id": "105",
            "name": "抚州"
        },
        {
            "id": "247",
            "name": "阜新"
        },
        {
            "id": "47",
            "name": "福州"
        }
    ],
    "G": [
        {
            "id": "106",
            "name": "赣州"
        },
        {
            "id": "202",
            "name": "贵港"
        },
        {
            "id": "152",
            "name": "广安"
        },
        {
            "id": "146",
            "name": "广元"
        },
        {
            "id": "198",
            "name": "桂林"
        },
        {
            "id": "19",
            "name": "贵阳"
        },
        {
            "id": "11",
            "name": "广州"
        },
        {
            "id": "154",
            "name": "甘孜州"
        }
    ],
    "H": [
        {
            "id": "17",
            "name": "海口"
        },
        {
            "id": "95",
            "name": "汉中"
        },
        {
            "id": "208",
            "name": "河池"
        },
        {
            "id": "231",
            "name": "邯郸"
        },
        {
            "id": "64",
            "name": "哈尔滨"
        },
        {
            "id": "83",
            "name": "鹤壁"
        },
        {
            "id": "121",
            "name": "衡阳"
        },
        {
            "id": "185",
            "name": "河源"
        },
        {
            "id": "219",
            "name": "菏泽"
        },
        {
            "id": "199",
            "name": "贺州"
        },
        {
            "id": "40",
            "name": "合肥"
        },
        {
            "id": "260",
            "name": "鹤岗"
        },
        {
            "id": "258",
            "name": "黑河"
        },
        {
            "id": "276",
            "name": "呼和浩特"
        },
        {
            "id": "255",
            "name": "葫芦岛"
        },
        {
            "id": "173",
            "name": "红河"
        },
        {
            "id": "229",
            "name": "衡水"
        },
        {
            "id": "68",
            "name": "淮安"
        },
        {
            "id": "127",
            "name": "淮北"
        },
        {
            "id": "124",
            "name": "怀化"
        },
        {
            "id": "131",
            "name": "淮南"
        },
        {
            "id": "111",
            "name": "黄冈"
        },
        {
            "id": "139",
            "name": "黄山"
        },
        {
            "id": "113",
            "name": "黄石"
        },
        {
            "id": "54",
            "name": "惠州"
        },
        {
            "id": "29",
            "name": "湖州"
        },
        {
            "id": "3",
            "name": "杭州"
        },
        {
            "id": "291",
            "name": "哈密"
        }
    ],
    "J": [
        {
            "id": "282",
            "name": "金昌"
        },
        {
            "id": "104",
            "name": "吉安"
        },
        {
            "id": "195",
            "name": "江门"
        },
        {
            "id": "81",
            "name": "焦作"
        },
        {
            "id": "188",
            "name": "揭阳"
        },
        {
            "id": "242",
            "name": "晋城"
        },
        {
            "id": "98",
            "name": "景德镇"
        },
        {
            "id": "108",
            "name": "荆州"
        },
        {
            "id": "293",
            "name": "荆门"
        },
        {
            "id": "70",
            "name": "金华"
        },
        {
            "id": "222",
            "name": "济宁"
        },
        {
            "id": "239",
            "name": "晋中"
        },
        {
            "id": "97",
            "name": "九江"
        },
        {
            "id": "263",
            "name": "鸡西"
        },
        {
            "id": "269",
            "name": "吉林"
        },
        {
            "id": "261",
            "name": "佳木斯"
        },
        {
            "id": "59",
            "name": "济南"
        },
        {
            "id": "279",
            "name": "酒泉"
        },
        {
            "id": "31",
            "name": "嘉兴"
        },
        {
            "id": "280",
            "name": "嘉峪关"
        },
        {
            "id": "251",
            "name": "锦州"
        }
    ],
    "K": [
        {
            "id": "78",
            "name": "开封"
        },
        {
            "id": "46",
            "name": "昆明"
        },
        {
            "id": "6",
            "name": "昆山"
        }
    ],
    "L": [
        {
            "id": "228",
            "name": "廊坊"
        },
        {
            "id": "178",
            "name": "拉萨"
        },
        {
            "id": "209",
            "name": "来宾"
        },
        {
            "id": "216",
            "name": "聊城"
        },
        {
            "id": "151",
            "name": "乐山"
        },
        {
            "id": "241",
            "name": "临汾"
        },
        {
            "id": "249",
            "name": "辽阳"
        },
        {
            "id": "166",
            "name": "丽江"
        },
        {
            "id": "169",
            "name": "临沧"
        },
        {
            "id": "221",
            "name": "临沂"
        },
        {
            "id": "71",
            "name": "丽水"
        },
        {
            "id": "133",
            "name": "六安"
        },
        {
            "id": "210",
            "name": "柳州"
        },
        {
            "id": "240",
            "name": "吕梁"
        },
        {
            "id": "288",
            "name": "陇南"
        },
        {
            "id": "182",
            "name": "龙岩"
        },
        {
            "id": "119",
            "name": "娄底"
        },
        {
            "id": "164",
            "name": "六盘水"
        },
        {
            "id": "156",
            "name": "凉山州"
        },
        {
            "id": "82",
            "name": "漯河"
        },
        {
            "id": "74",
            "name": "洛阳"
        },
        {
            "id": "153",
            "name": "泸州"
        },
        {
            "id": "215",
            "name": "莱芜"
        },
        {
            "id": "273",
            "name": "辽源"
        },
        {
            "id": "66",
            "name": "连云港"
        },
        {
            "id": "277",
            "name": "兰州"
        }
    ],
    "M": [
        {
            "id": "141",
            "name": "马鞍山"
        },
        {
            "id": "194",
            "name": "茂名"
        },
        {
            "id": "264",
            "name": "牡丹江"
        },
        {
            "id": "150",
            "name": "眉山"
        },
        {
            "id": "184",
            "name": "梅州"
        },
        {
            "id": "45",
            "name": "绵阳"
        }
    ],
    "N": [
        {
            "id": "147",
            "name": "南充"
        },
        {
            "id": "180",
            "name": "南平"
        },
        {
            "id": "89",
            "name": "南阳"
        },
        {
            "id": "5",
            "name": "宁波"
        },
        {
            "id": "15",
            "name": "南昌"
        },
        {
            "id": "48",
            "name": "宁德"
        },
        {
            "id": "41",
            "name": "内江"
        },
        {
            "id": "4",
            "name": "南京"
        },
        {
            "id": "57",
            "name": "南宁"
        },
        {
            "id": "22",
            "name": "南通"
        },
        {
            "id": "176",
            "name": "怒江"
        }
    ],
    "P": [
        {
            "id": "85",
            "name": "平顶山"
        },
        {
            "id": "100",
            "name": "萍乡"
        },
        {
            "id": "254",
            "name": "盘锦"
        },
        {
            "id": "286",
            "name": "平凉"
        },
        {
            "id": "179",
            "name": "莆田"
        },
        {
            "id": "87",
            "name": "濮阳"
        },
        {
            "id": "148",
            "name": "攀枝花"
        }
    ],
    "Q": [
        {
            "id": "20",
            "name": "青岛"
        },
        {
            "id": "161",
            "name": "黔东南"
        },
        {
            "id": "234",
            "name": "秦皇岛"
        },
        {
            "id": "162",
            "name": "黔南"
        },
        {
            "id": "186",
            "name": "清远"
        },
        {
            "id": "205",
            "name": "钦州"
        },
        {
            "id": "268",
            "name": "齐齐哈尔"
        },
        {
            "id": "267",
            "name": "七台河"
        },
        {
            "id": "170",
            "name": "曲靖"
        },
        {
            "id": "73",
            "name": "衢州"
        },
        {
            "id": "163",
            "name": "黔西南"
        },
        {
            "id": "285",
            "name": "庆阳"
        },
        {
            "id": "49",
            "name": "泉州"
        }
    ],
    "R": [
        {
            "id": "218",
            "name": "日照"
        }
    ],
    "S": [
        {
            "id": "181",
            "name": "三明"
        },
        {
            "id": "56",
            "name": "三亚"
        },
        {
            "id": "1",
            "name": "上海"
        },
        {
            "id": "79",
            "name": "商丘"
        },
        {
            "id": "99",
            "name": "上饶"
        },
        {
            "id": "197",
            "name": "汕头"
        },
        {
            "id": "191",
            "name": "汕尾"
        },
        {
            "id": "189",
            "name": "韶关"
        },
        {
            "id": "120",
            "name": "邵阳"
        },
        {
            "id": "63",
            "name": "沈阳"
        },
        {
            "id": "236",
            "name": "朔州"
        },
        {
            "id": "61",
            "name": "石家庄"
        },
        {
            "id": "33",
            "name": "商洛"
        },
        {
            "id": "76",
            "name": "三门峡"
        },
        {
            "id": "271",
            "name": "松原"
        },
        {
            "id": "270",
            "name": "四平"
        },
        {
            "id": "2",
            "name": "苏州"
        },
        {
            "id": "266",
            "name": "绥化"
        },
        {
            "id": "144",
            "name": "遂宁"
        },
        {
            "id": "107",
            "name": "随州"
        },
        {
            "id": "67",
            "name": "宿迁"
        },
        {
            "id": "130",
            "name": "宿州"
        },
        {
            "id": "32",
            "name": "绍兴"
        },
        {
            "id": "37",
            "name": "十堰"
        },
        {
            "id": "265",
            "name": "双鸭山"
        },
        {
            "id": "50",
            "name": "深圳"
        }
    ],
    "T": [
        {
            "id": "214",
            "name": "泰安"
        },
        {
            "id": "28",
            "name": "台州"
        },
        {
            "id": "227",
            "name": "唐山"
        },
        {
            "id": "275",
            "name": "通化"
        },
        {
            "id": "13",
            "name": "天津"
        },
        {
            "id": "245",
            "name": "铁岭"
        },
        {
            "id": "92",
            "name": "铜川"
        },
        {
            "id": "140",
            "name": "铜陵"
        },
        {
            "id": "160",
            "name": "铜仁"
        },
        {
            "id": "278",
            "name": "天水"
        },
        {
            "id": "62",
            "name": "太原"
        },
        {
            "id": "26",
            "name": "泰州"
        }
    ],
    "W": [
        {
            "id": "224",
            "name": "威海"
        },
        {
            "id": "90",
            "name": "渭南"
        },
        {
            "id": "177",
            "name": "文山"
        },
        {
            "id": "223",
            "name": "潍坊"
        },
        {
            "id": "16",
            "name": "武汉"
        },
        {
            "id": "18",
            "name": "芜湖"
        },
        {
            "id": "201",
            "name": "梧州"
        },
        {
            "id": "283",
            "name": "武威"
        },
        {
            "id": "12",
            "name": "无锡"
        },
        {
            "id": "30",
            "name": "温州"
        },
        {
            "id": "289",
            "name": "乌鲁木齐"
        }
    ],
    "X": [
        {
            "id": "34",
            "name": "西安"
        },
        {
            "id": "117",
            "name": "湘潭"
        },
        {
            "id": "112",
            "name": "咸宁"
        },
        {
            "id": "93",
            "name": "咸阳"
        },
        {
            "id": "109",
            "name": "孝感"
        },
        {
            "id": "230",
            "name": "邢台"
        },
        {
            "id": "84",
            "name": "新乡"
        },
        {
            "id": "88",
            "name": "信阳"
        },
        {
            "id": "102",
            "name": "新余"
        },
        {
            "id": "237",
            "name": "忻州"
        },
        {
            "id": "10",
            "name": "厦门"
        },
        {
            "id": "36",
            "name": "仙桃"
        },
        {
            "id": "136",
            "name": "宣城"
        },
        {
            "id": "80",
            "name": "许昌"
        },
        {
            "id": "38",
            "name": "襄阳"
        },
        {
            "id": "69",
            "name": "徐州"
        }
    ],
    "Y": [
        {
            "id": "149",
            "name": "雅安"
        },
        {
            "id": "94",
            "name": "延安"
        },
        {
            "id": "192",
            "name": "阳江"
        },
        {
            "id": "42",
            "name": "宜宾"
        },
        {
            "id": "25",
            "name": "盐城"
        },
        {
            "id": "259",
            "name": "伊春"
        },
        {
            "id": "110",
            "name": "宜昌"
        },
        {
            "id": "101",
            "name": "宜春"
        },
        {
            "id": "103",
            "name": "鹰潭"
        },
        {
            "id": "126",
            "name": "益阳"
        },
        {
            "id": "253",
            "name": "营口"
        },
        {
            "id": "203",
            "name": "玉林"
        },
        {
            "id": "123",
            "name": "永州"
        },
        {
            "id": "238",
            "name": "阳泉"
        },
        {
            "id": "60",
            "name": "烟台"
        },
        {
            "id": "115",
            "name": "岳阳"
        },
        {
            "id": "91",
            "name": "榆林"
        },
        {
            "id": "243",
            "name": "运城"
        },
        {
            "id": "196",
            "name": "云浮"
        },
        {
            "id": "171",
            "name": "玉溪"
        },
        {
            "id": "23",
            "name": "扬州"
        },
        {
            "id": "290",
            "name": "伊犁"
        }
    ],
    "Z": [
        {
            "id": "220",
            "name": "枣庄"
        },
        {
            "id": "213",
            "name": "淄博"
        },
        {
            "id": "43",
            "name": "自贡"
        },
        {
            "id": "53",
            "name": "珠海"
        },
        {
            "id": "183",
            "name": "漳州"
        },
        {
            "id": "193",
            "name": "湛江"
        },
        {
            "id": "190",
            "name": "肇庆"
        },
        {
            "id": "75",
            "name": "周口"
        },
        {
            "id": "72",
            "name": "舟山"
        },
        {
            "id": "86",
            "name": "驻马店"
        },
        {
            "id": "118",
            "name": "株洲"
        },
        {
            "id": "145",
            "name": "资阳"
        },
        {
            "id": "27",
            "name": "镇江"
        },
        {
            "id": "116",
            "name": "张家界"
        },
        {
            "id": "225",
            "name": "张家口"
        },
        {
          "id": "165",
          "name": "昭通"
        },
        {
            "id": "55",
            "name": "中山"
        },
        {
            "id": "158",
            "name": "遵义"
        },
        {
            "id": "281",
            "name": "张掖"
        },
        {
            "id": "7",
            "name": "郑州"
        }
    ]
};
const hotBranch = [
    {
        "id": "1",
        "name": "上海"
    },
    {
        "id": "2",
        "name": "苏州"
    },
    {
        "id": "4",
        "name": "南京"
    },
    {
        "id": "9",
        "name": "重庆"
    },
    {
        "id": "8",
        "name": "成都"
    },
    {
        "id": "3",
        "name": "杭州"
    },
    {
        "id": "13",
        "name": "天津"
    },
    {
        "id": "16",
        "name": "武汉"
    },
    {
        "id": "10",
        "name": "厦门"
    },
    {
        "id": "5",
        "name": "宁波"
    },
    {
        "id": "12",
        "name": "无锡"
    },
    {
        "id": "40",
        "name": "合肥"
    },
    {
        "id": "15",
        "name": "南昌"
    },
    {
        "id": "14",
        "name": "北京"
    },
    {
        "id": "34",
        "name": "西安"
    }
];
const cities_A = data.A;	
const cities_B = data.B;	
const cities_C = data.C;	

class ChangeCity extends Component {
	 constructor(props) {
	    super(props);
	    
	    
	    this.state = {
	      city:"",
	      all_cities:[{"name":"A"},{"name":"B"},{"name":"C"},{"name":"D"},{"name":"E"},{"name":"F"},{"name":"G"},{"name":"H"},{"name":"I"}
	      ,{"name":"G"},{"name":"K"},{"name":"L"},{"name":"M"},{"name":"N"},{"name":"O"},{"name":"P"},{"name":"Q"}
	      ,{"name":"R"},{"name":"S"},{"name":"T"},{"name":"U"},{"name":"V"},{"name":"W"},{"name":"X"},{"name":"Y"}
	      ,{"name":"Z"}],
	      inputValue: '',
	    };
	  }

 
    
    //百度地图定位
	localCity = (result) => {
		this.setState({
			city:result.name
		});
		map.setCenter(this.state.city);
	}
	
	componentDidMount() {
		
	  //百度地图定位
	  myCity.get(this.localCity);
	}

	 onSearch = (val) => {
	    this.setState({
	      inputValue: val,
	    });
	 }
	 
	  render() {
	    return (
	    <div className="city">
	    	<div style={{position:"relative"}}>
	    	    <NavBar className="header" mode="light" onLeftClick={() => this.props.changeCity(event)}
			      rightContent={[
			        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
			        <Icon key="1" type="ellipsis" />,
			      ]}
			    ><p className="title">城市选择</p></NavBar>
	    	    <div style={{ paddingTop: '0.88rem', position: 'relative' }}>
			      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
			        <SearchBar
			          value={this.state.inputValue}
			          placeholder="搜索"
			          onChange={this.onSearch}
			          onClear={() => { alert('onClear'); }}
			          onCancel={() => { console.log	('onCancel'); }}
			        />
			      </div>
			      
			      <div className="letter-bar">当前城市</div>
			      <ul className="cur-city-list clearfix">
			        <li>
				         <p>{this.state.city}</p>
				         <input onClick={() => this.props.changeCity(event)} type="text" id="1" value={this.state.city} />
				    </li>
			      </ul>
			      
			      <div className="letter-bar">热门城市</div>
			      <ul className="hot-city-list clearfix">
		          {hotBranch.map(city => (
		            <li>
		               <p>{city.name}</p>
		               <input onClick={() => this.props.changeCity(event)} type="text" id={city.id} value={city.name} />
			        </li>
		          ))}
			      </ul>
			     
			      <div className="letter-bar">所有城市</div>
			      <ul className="hot-city-list clearfix">
		          {this.state.all_cities.map(city => (
		            <li>
		               <p><a href={"#"+city.name}>{city.name}</a></p>
			          </li>
		          ))}
			      </ul>
			     
				    <div className="letter-bar" id="A">A</div>
			      <ul className="hot-city-list clearfix">
		          {cities_A.map((city,index) => (
		            <li key={index} >
		               <p>{city.name}</p>
		               <input onClick={() => this.props.changeCity(event)} type="text" id={city.id} value={city.name} />
			          </li>
		          ))}
			      </ul>
			      
			      <div className="letter-bar" id="B">B</div>
			      <ul className="hot-city-list clearfix">
		          {cities_B.map((city,index) => (
		            <li key={index} >
		               <p>{city.name}</p> 
		               <input onClick={() => this.props.changeCity(event)} type="text" id={city.id} value={city.name} />
			          </li>
		          ))}
			      </ul>
			      
			      <div className="letter-bar" id="C">C</div>
			      <ul className="hot-city-list clearfix">
		          {cities_C.map((city,index) => (
		            <li key={index} >
		               <p>{city.name}</p>
		               <input onClick={() => this.props.changeCity(event)} type="text" id={city.id} value={city.name} />
			          </li>
		          ))}
			      </ul>
			      
			    </div>
			</div>
	    </div>
		);
	  }
  
}
export default ChangeCity;
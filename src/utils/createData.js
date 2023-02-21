/*
 * @Author: lxj
 * @Date: 2021/10/2/17:09
 */
const a = [
  { label: '子网一号', value: '子网一号' },
  { label: '子网二号', value: '子网二号' },
  { label: '子网三号', value: '子网三号' },
  { label: '子网四号', value: '子网四号' },
  { label: '子网五号', value: '子网五号' },
  { label: '子网六号', value: '子网六号' },
  { label: '子网七号', value: '子网七号' },
  { label: '子网八号', value: '子网八号' },
  { label: '子网九号', value: '子网九号' }
]

// 通信网数据
const txw = {
  name: [
    '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
  ],
  value: [
    500, 640, 750, 820, 860, 910, 990, 1200, 1350, 1750, 1970, 3000
  ]
}
const year = {
  name: '通信网数量',
  xArr: [
    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ],
  yArr: [
    5000, 6400, 7500, 8200, 8060, 9100, 9090, 10200, 13050, 17050, 19070, 30000
  ]
}

const tx_j = {
  name: '通信网数量',
  xArr: [
    '2019-春', '2019-夏', '2019-秋', '2019-冬', '2020-春', '2020-夏', '2020-秋', '2020-冬', '2021-春', '2021-夏', '2021-秋'
  ],
  yArr: [
    2000, 4400, 5500, 6200, 6500, 7100, 8090, 9200, 10500, 12050
  ]
}
const userNum = {
  name: '通信网用户流量合计',
  xArr: [
    '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
  ],
  yArr: [
    800, 700, 750, 820, 860, 1010, 1090, 1200, 1350, 1750, 1970, 2200
  ]
}
const lx_type = {
  name: [
    '极重要', '重要', '一般', '黑名单', '未知'
  ],
  value: [
    9, 15, 7, 18, 22
  ]
}

const yh_type = {
  // name: '用户重要级别',
  name: [
    '极重要', '重要', '一般', '黑名单', '未知'
  ],
  value: [
    9000, 15000, 7000, 10000, 5000
  ]
}

const zb_type = {
  name: '载波类型统计',
  xArr: [
    '载波1', '载波2', '载波3', '载波4', '载波5'
  ],
  yArr: [
    670, 150, 520, 330, 740
  ]
}
// 国家地区
const contryies = [{
  name: '美国',
  value: 11231
},
  {
    name: '日本',
    value: 22673
  },
  {
    name: '韩国',
    value: 6123
  },
  {
    name: '朝鲜',
    value: 8989
  },
  {
    name: '英国',
    value: 6700
  },
  {
    name: '德国',
    value: 300
  },
  {
    name: '古巴',
    value: 202
  },
  {
    name: '印度',
    value: 500
  },
  {
    name: '新西兰',
    value: 8989
  },
  {
    name: '澳大利亚',
    value: 6700
  }
]
// 系统类型
const sys_type = [{
  name: '54W',
  value: 11231
},
  {
    name: '120E',
    value: 6673
  },
  {
    name: '122E',
    value: 6123
  },
  {
    name: '不明',
    value: 8989
  }
]
// 用户性质
const user_type = [{
  name: '军事',
  value: 11231
},
  {
    name: '民用',
    value: 6673
  },
  {
    name: '不明',
    value: 350
  }
]
// 各类目标占比

const mb_type = [{
  name: '语音',
  value: 11231
},
  {
    name: '互联网',
    value: 22673
  },
  {
    name: '视频',
    value: 6123
  },
  {
    name: '传真',
    value: 8989
  },
  {
    name: '不明',
    value: 300
  }
]

// 应用层协议
const yyxy = [{
  name: 'HTTP',
  value: 11231
},
  {
    name: 'HTTPS',
    value: 22673
  },
  {
    name: 'SMTP',
    value: 6123
  },
  {
    name: 'DNS',
    value: 8989
  },
  {
    name: 'SNMP',
    value: 6700
  },
  {
    name: 'Telnet',
    value: 300
  }
]

const wl_xy = [{
  name: 'TCP/IP',
  value: 213
},
  {
    name: 'ARP',
    value: 105
  },
  {
    name: 'ICMP',
    value: 23
  },
  {
    name: 'IGMP',
    value: 89
  },
  {
    name: 'NetBEUI',
    value: 67
  },
  {
    name: 'IPX/SPX',
    value: 19
  }
]
// 业务类型
const yw_type = [{
  value: 40,
  name: 'ros 1'
},
  {
    value: 38,
    name: 'ros 2'
  },
  {
    value: 32,
    name: 'ros 3'
  },
  {
    value: 30,
    name: 'ros 4'
  },
  {
    value: 28,
    name: 'ros 5'
  },
  {
    value: 26,
    name: 'ros 6'
  },
  {
    value: 22,
    name: 'ros 7'
  },
  {
    value: 18,
    name: 'ros 8'
  }
]
// 载波调试方式  载波类型
const zb_ts = [{
  name: 'BPSK',
  value: 11231
},
  {
    name: 'QPSK',
    value: 22673
  },
  {
    name: '8PSK',
    value: 6123
  },
  {
    name: '16PSK',
    value: 8989
  },
  {
    name: '32PSK',
    value: 6700
  },
  {
    name: 'OPSK',
    value: 300
  },
  {
    name: '8APSK',
    value: 300
  }
]

const dz_list = [{
  name: 'FDMA',
  value: 11231
},
  {
    name: 'TDMA',
    value: 22673
  },
  {
    name: 'TCDMA',
    value: 6123
  },
  {
    name: 'DVB-S2X',
    value: 8989
  },
  {
    name: 'DVB-S2EX',
    value: 6700
  },
  {
    name: 'TAPCMA',
    value: 300
  },
  {
    name: 'TPCMA',
    value: 300
  }
]

// 编码类型
const bm_type = [{
  value: 40,
  name: 'NONE'
},
  {
    value: 38,
    name: 'DVB-S'
  },
  {
    value: 32,
    name: 'DVB-S2X'
  },
  {
    value: 30,
    name: 'DVB-S2'
  },
  {
    value: 28,
    name: 'DVB-S2EX'
  },
  {
    value: 26,
    name: 'SCPC'
  },
  {
    value: 22,
    name: '突发'
  }

]
// 调制方式
const tz_type = [{
  name: 'SIMO',
  value: 11231
},
  {
    name: 'MISO',
    value: 22673
  },
  {
    name: 'OFDM',
    value: 6123
  },
  {
    name: 'MIMO',
    value: 8989
  }
]

const drag = {
  name: [
    '2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12', '2021-1', '2021-2', '2021-3', '2021-4', '2021-5', '2021-6', '2021-7', '2021-8', '2021-9'
  ],
  value: [
    3000, 640, 750, 820, 860, 1010, 1750, 1970, 3000, 300, 640, 750, 820, 860, 1010, 1090, 1200, 1090, 1200, 1350, 1350
  ]
}

const user_current = {
  // name: '用户时隙数量统计',
  name: [
    '用户1', '用户2', '用户3', '用户4', '用户5', '用户6', '用户7', '用户8', '用户9', '用户10', '用户11', '用户12', '用户13', '用户14', '用户15', '用户16'
  ],
  value: [
    800, 700, 750, 1010, 1090, 1200, 1350, 820, 860, 1010, 1090, 1200, 1350, 1750, 1970, 2200, 1350, 820, 860, 1010
  ]
}

const user_history = {
  name: '用户历史时隙数量统计',
  legend: {
    data: ['当前时隙数量', '历史时隙数量']
  },
  xArr: [
    '用户1', '用户2', '用户3', '用户4', '用户5', '用户6', '用户7', '用户8', '用户9', '用户10', '用户11', '用户12', '用户13', '用户14', '用户15', '用户16'
  ],
  yArr: [],
  yArrs: [
    [
      800, 700, 750, 1010, 1090, 1200, 1350, 820, 860, 1010, 1090, 1200, 1350, 1750, 1970, 2200, 1350, 820, 860, 1010
    ],
    [
      1200, 800, 950, 1310, 1590, 1400, 1650, 1020, 1026, 1350, 1490, 800, 900, 1500, 1400, 1500, 1800, 1500, 500, 1369
    ]
  ],
  // 关系
  relationship: 'sum',
  relationshipName: '数量总计',
  lineArr: [
    2000, 1500, 1700, 2320, 2680, 2600, 3000, 1840, 1886, 2460, 2580, 2000, 2250, 3250, 3370, 3700, 3150, 2320, 1360, 2379
  ]

}

const warning_data = [{
  warn_type: '新载波',
  warn_message: '发现新载波，载波标识：xxx',
  warn_time: '2021-09-08 12:10',
  warn_status: '未处理',
  warn_net: '',
  handle_res: '',
  handle_time: '',
  handle_status: ''
},
  {
    warn_type: '新载波',
    warn_message: '发现新载波，载波标识：xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '已处理',
    warn_net: 'net1',
    handle_res: '划入通信网net1',
    handle_time: '2021-09-08 14:10',
    handle_status: ''
  },
  {
    warn_type: '新载波',
    warn_message: '发现新载波，载波标识：xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '已处理',
    warn_net: '-',
    handle_res: '不明',
    handle_time: '2021-09-08 14:10',
    handle_status: 'disabled'
  },
  {
    warn_type: '载波消失',
    warn_message: '载波消失时间 2021-09-08 12:10 载波标识：xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net2',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '载波变化',
    warn_message: '载波加密（小站，目标，业务，协议）情况由xxx变为xxx，载波标识xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net2',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '载波异常',
    warn_message: '载波流量由xxx变化为xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net2',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '载波异常',
    warn_message: '载波通联时间持续100分钟，载波标识xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net2',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '发现通信网',
    warn_message: '发现新通信网，通信网标识net-5',
    warn_time: '2021-09-08 12:10',
    warn_status: '未处理',
    warn_net: 'net2',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '发现通信网',
    warn_message: '发现新通信网，通信网标识net-5',
    warn_time: '2021-09-08 12:10',
    warn_status: '已处理',
    warn_net: 'net2',
    handle_res: '已入库',
    handle_time: '2021-09-08 14:10',
    handle_status: ''
  },
  {
    warn_type: '发现通信网',
    warn_message: '发现新通信网，通信网标识net-5',
    warn_time: '2021-09-08 12:10',
    warn_status: '已处理',
    warn_net: 'net2',
    handle_res: '判定错误',
    handle_time: '2021-09-08 14:10',
    handle_status: 'disabled'
  },
  {
    warn_type: '发现通信网',
    warn_message: '发现新通信网，通信网标识net-5',
    warn_time: '2021-09-08 12:10',
    warn_status: '处理中',
    warn_net: 'net2',
    handle_res: '待定（继续跟踪）',
    handle_time: '2021-09-08 14:10',
    handle_status: ''
  },
  {
    warn_type: '通信网变化',
    warn_message: '通信网net6，载波数量由[4]变成[5]，新增载波xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net6',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '通信网变化',
    warn_message: '通信网net2，网络结构发生变化',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net2',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '通信网变化',
    warn_message: '通信网net6，卫星数量由[4]变成[5]，新增卫星xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net6',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '通信网变化',
    warn_message: '通信网net6，目标数量由[4]变成[5]，新增目标xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net6',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  },
  {
    warn_type: '通信网变化',
    warn_message: '通信网net6，小站数量由[4]变成[5]，新增小站xxx',
    warn_time: '2021-09-08 12:10',
    warn_status: '-',
    warn_net: 'net6',
    handle_res: '-',
    handle_time: '-',
    handle_status: ''
  }

]

const zb_data = {
  name: '信噪比',
  xArr: [
    '300kHz', '300kHz', '500kHz', '800kHz', '300MHz', '500MHz', '800MHz', '900MHz', '300GHz'
  ],
  yArr: [
    60, 65, 70, 75, 80, 85, 95, 98, 100, 105, 110, 115, 120
  ]
}

const carrier_table_config = [
  { colName: '', colNameCN: '' }
]

export default {
  install(Vue, options) {
    Vue.prototype.myData = {
      txw,
      userNum,
      lx_type,
      yh_type,
      zb_type,
      contryies,
      sys_type,
      user_type,
      mb_type,
      yw_type,
      yyxy,
      zb_ts,
      dz_list,
      bm_type,
      tz_type,
      drag,
      wl_xy,
      user_history,
      user_current,
      warning_data,
      tx_j,
      year,
      zb_data,
      carrier_table_config
    }
  }
}

const Mock = require('mockjs')

let login = Mock.mock({
  user: [
    {
      userName: 'admin',
      password: 'admin',
      token: /[17689]{1}[0-9]{8}/,
      headImg: "@image('100x100')",
    },
    {
      userName: 'xionghui',
      password: '123456',
      token: /[17689]{1}[0-9]{8}/,
      headImg: "@image('100x100')",
    },
  ],
  'usersData|100-200': [
    {
      'id|+1': 1000,
      name: '@first',
      nickName: '@cname',
      email: '@email',
      address: '@city(true)',
      'sex|1': ['男', '女'],
      'class|1-4': () => {
        let arr = []
        let classArr = ['食品', '家居', '旅行', '电子']
        for (let i = 0; i <= Math.floor(Math.random() * 4); i++) {
          let j = Math.floor(Math.random() * classArr.length)
          arr.push(classArr[j])
          classArr.splice(j, 1)
        }
        return arr
      },
    },
  ],
  'qqUsersData|100-200': [
    {
      'id|+1': 1000,
      name: '@first',
      nickName: '@cname',
      qq: /[17689]{1}[0-9]{8}/,
      'sex|1': ['男', '女'],
      'age|18-50': 18,
    },
  ],
})
module.exports = login

// 导入bcrypt
const bcrypt = require('bcrypt')

async function run() {
    // 生成随机字符串
    // gensalt方法接受一个数组作为参数
    // 数值越小 生成的随机字符串复杂度越低
    // 默认值是 10
    // 返回生成的随机字符串
    const salt =  await bcrypt.genSalt(10)
    // 对密码进行加密
    // 1. 要进行加密的明文
    // 2. 随机字符串
    // 返回值是加密后的密码
    const result =  await bcrypt.hash('123456', salt)
    console.log(salt)
    console.log(result)
}
run()
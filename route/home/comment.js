// 将评论构造函数进行导入
const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    // 接受客户端传递过来的请求参数
    const { uid, aid, content } = req.body

    // 将评论信息存储到评论集合中
    await Comment.create({
        content: content,
        uid: uid,
        aid: aid,
        time: new Date()
    })

    // 将页面重定向回文章详情页面
    res.redirect('/home/article?id='+ aid)
} 
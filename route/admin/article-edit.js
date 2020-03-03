const { Article } = require('../../model/article')
module.exports = async (req, res) => {

    // 标识当天访问的是文章管理页面
    req.app.locals.currentLink = 'article'

    // 获取到地址栏中的id参数
    const { message, id } = req.query

    // 如果传递了id参数, 说明是修改caoz
    if (id) {
        let article = await Article.findOne({_id: id})

        // res.send(article)
        // return

        // 渲染用户编辑页面(修改)
        res.render('admin/article-edit', {
            message: message,
            article: article,
            link: '/admin/article-modify?id=' + id,
            button: '修改'
        })
    }else {
        // 添加操作
        res.render('admin/article-edit', {
            message: message,
            link: '/admin/article-edit',
            button: '添加'
        })
    }
} 
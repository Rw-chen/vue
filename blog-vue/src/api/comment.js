import request from '@/utils/request'

// 发送文章评论
export function sendComment(type,articleId,rootId,toCommentId,toCommentUserId,content) {
    return request({
        url: '/comment',
        method: 'post',
        data: {"articleId":articleId,"type":type,"rootId":rootId,"toCommentId":toCommentId,"toCommentUserId":toCommentUserId,"content":content}
    })
}

// 获取文章是否可评论
export function canComment(articleId) {
    return request({
        url: '/comment/canComment/' + articleId,
        method: 'get',
    })
}

export function getArticleComment(query) {
    return request({
        url: '/comment/commentList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}


export function getLinkComment(query) {
    return request({
        url: '/comment/linkCommentList',
        method: 'get',
        params: query
    })
}
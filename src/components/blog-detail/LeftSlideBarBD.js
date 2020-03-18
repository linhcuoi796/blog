import React, { Component } from 'react';
import ContentBlog from './ContentBlog';
import PrevAndNextPost from './PrevAndNextPost';
import ListComment from './ListComment';
import WriteComment from './WriteComment';


class LeftSlideBarBD extends Component {
    
    showPostDetail = (postDetail) => {
        if (postDetail)
            return <ContentBlog cover={postDetail.cover} content={postDetail.content} category={postDetail.category} date={postDetail.date} title={postDetail.title} author={postDetail.author}/>
    }
    getComments = (comments) => {
        console.log(this.props);
        if (comments)
            return comments;
        return [];
    }
    render() {    
        const {postDetail} = this.props;
        return (
            <div className="left-slide-bar-blog-detail-wrapper bg-white p-tb-50 col-lg-8 col">
                {this.showPostDetail(postDetail)}
                <PrevAndNextPost/>
                <ListComment comments={this.getComments(postDetail.comments)}/>
                <WriteComment/>
             </div>
        );
    }
}

export default LeftSlideBarBD;
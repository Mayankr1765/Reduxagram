import React from 'react';
import Photo from './photo';
import Comment from './Comment';

const Single = React.createClass({
    render(){
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.Comment[postId] || [];
        return(
            <div className = "single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comment postComments={postComments}  {...this.params}/>
            </div>
        )
    }
});
export default Single;
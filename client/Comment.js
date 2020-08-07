import React from 'react';

const Comment = React.createClass({
    renderComment(comment,i){

        <div className = "comment" key = {i}>
        <p>
            <strong>
                {comment.user}
            </strong>
            {comment.text}
            <button className="remove-comment" onClick={this.props.removeComment(null,this.props.params.postId,i)}>&times;</button>

        </p>
        </div>
    },

    handleSubmit(e){
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId,author,comment);
        this.refs.commentForm.reset();

        console.log("Submitting the Form!");


    },
    render(){
        return(
            <div className="comments">
            {this.props.postComments.map(this.renderComment)}
            <form ref="commentForm" className="commentForm" onClick={this.handleSubmit}>
            <input type="text" ref="author" placeholder="author" />
            <input type="text" ref="comment" placeholder="comment" />
            <input type ="submit" hidden />

            
            </form>
            </div>

        )

    }
});

export default Comment;
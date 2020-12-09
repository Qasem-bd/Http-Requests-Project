import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post 
        if (!this.props.toDisplayPostId){

             post = <div className="FullPost" >
                        <p>Please select a Post!</p>
                    </div>;
        }
        else {
            post = (
                <div className="FullPost">
                    <h1>{this.props.toDisplayPostTitle}</h1>
                    <p>{this.props.toDisplayPostBody}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;
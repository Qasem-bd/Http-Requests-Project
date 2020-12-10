import Axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    }


    componentDidUpdate () {
        if ( this.props.toDisplayPostId ) {
            if(!this.state.post || (this.state.post && (this.state.post.id != this.props.toDisplayPostId)))
            Axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.toDisplayPostId).
            then((response) => {
                this.setState({post : response.data})
            } )
        }
        
    }
    render () {
        let post 
        if (!this.props.toDisplayPostId){

             post = <div className="FullPost" >
                        <p>Please select a Post!</p>
                    </div>;
        }
        else {
            if (!this.state.post) {
                post = <div className="FullPost" >
                <p>Loading post...</p>
            </div>;
            }else {

                post = (
                    <div className="FullPost">
                        <h1>{this.state.post.title}</h1>
                        <p>{this.state.post.body}</p>
                        <div className="Edit">
                            <button className="Delete">Delete</button>
                        </div>
                    </div>
        
                );
            }

            
        }
        
        return post;
    }
}

export default FullPost;
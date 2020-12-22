import Axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    }


    componentDidMount () {
        this.loadData()
        
    }

    componentDidUpdate () {
        this.loadData();

    }

    loadData = () => {
        if ( this.props.match.params.postId ) {
            
           
            if(!this.state.post || (this.state.post && (this.state.post.id !== +this.props.match.params.postId ))) {
               
                Axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.postId)
                .then((response) => {
                    this.setState({post : response.data})
                } )

            }
                            
        }
    }

    deletePostHandler = () => {
        Axios.delete('https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.postId)
        .then (response => {
            console.log(response)
        })
    }

    render () {
        let post 
        if (! this.props.match.params.postId){

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
                            <button className="Delete" 
                                    onClick = {this.deletePostHandler}
                             >Delete</button>
                        </div>
                    </div>
        
                );
            }

            
        }
        
        return post;
    }
}

export default FullPost;
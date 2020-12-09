import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
 
    state = {
        posts:[],
        clickedPostId : null
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
            
            let posts = response.data.slice(0,4);
            let updatetPosts = posts.map(post => {
                return {
                    ...post,
                    author : 'Qasem'
                }
            })
            this.setState({posts : updatetPosts})
        } )
    }

    postClickedHandler = (id) => {
        console.log('Hallo I am Clicked Handler',id);
        this.setState({clickedPostId : id})

        
    }

    render () {
        let posts = this.state.posts.map(post => {
            return (
                <Post
                    key = {post.id}
                    title = {post.title}
                    author = {post.author}
                    clicked = {() => this.postClickedHandler(post.id)}
                     />
            )
    
        })
        
        let toDisplayPostId = this.state.clickedPostId
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                             toDisplayPostId= {this.state.clickedPostId}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
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
    prepareFullPost = () => {
        let toDisplayPostId = this.state.clickedPostId
        let fullPost 

        if (toDisplayPostId) {
            let selectedPost = this.state.posts.find((post) => {
                return (post.id == toDisplayPostId)
            })
            return (
                <FullPost 
                             toDisplayPostId= {toDisplayPostId}
                             toDisplayPostTitle={selectedPost.title}
                             toDisplayPostBody = {selectedPost.body}
                    />
            )
            
        } 
        else {
            return <FullPost toDisplayPostId= {toDisplayPostId}/>
        }
        

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
        console.log(this.prepareFullPost())
        
        
        
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                  { this.prepareFullPost() }
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
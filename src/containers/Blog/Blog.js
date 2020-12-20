import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
 
    state = {
        posts:[],
        clickedPostId : null,
        error: false
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
        } ).catch(error => {
            console.log(error)
            this.setState({error : true})
        })
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
        let posts = <p style = {{textAlign:"center"}}>Something went wrong! </p>
        if (!this.state.error){
             posts = this.state.posts.map(post => {
        
                return (
                    <Post
                        key = {post.id}
                        title = {post.title}
                        author = {post.author}
                        clicked = {() => this.postClickedHandler(post.id)}
                         />
                )
        
            })
        }else {

        }
        
    
        
        return (
            <div>
                <header className = 'Blog'>
                    <nav>
                        <ul>
                            <li><a href = '/'>Home</a></li>
                            <li><a href = '/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                  {/* { this.prepareFullPost() } */}
                  <FullPost toDisplayPostId= {this.state.clickedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
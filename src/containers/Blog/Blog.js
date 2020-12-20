import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import FullPost from './FullPost/FullPost';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'

class Blog extends Component {
 
    
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
              {/* <Route path = '/' exact render = {() => <h1>Home1</h1>} />
              <Route path = '/'  render = {() => <h1>Home2</h1>} /> */}
              <Route path = '/' exact component = {Posts}/>
              <Route path = '/new-post' exact component = {NewPost}/>
               
            </div>
        );
    }
}

export default Blog;
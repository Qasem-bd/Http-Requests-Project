import React, { Component } from 'react';

import FullPost from './FullPost/FullPost';
import './Blog.css';
import Posts from './Posts/Posts'

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
              <Posts/>
            </div>
        );
    }
}

export default Blog;
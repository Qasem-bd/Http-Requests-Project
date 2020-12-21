import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

class Blog extends Component {
 
    
    prepareFullPost = () => {
        let toDisplayPostId = this.state.clickedPostId

        if (toDisplayPostId) {
            let selectedPost = this.state.posts.find((post) => {
                return (post.id === toDisplayPostId)
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
                            <li><NavLink exact 
                                 to = '/'
                                 activeClassName = 'my-active' >Home</NavLink></li>
                            <li><NavLink activeStyle = {{
                                color:'orange',
                                textDecoration: 'underline'
                            }} 
                                to = {{
                                pathname : '/new-post',
                                hash : '#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
              {/* <Route path = '/' exact render = {() => <h1>Home1</h1>} />
              <Route path = '/'  render = {() => <h1>Home2</h1>} /> */}
              <Route path = '/' exact component = {Posts}/>
              <Route path = '/:postId' exact component = {FullPost}/>
              <Route path = '/new-post' exact  component = {NewPost}/>
               
            </div>
        );
    }
}

export default Blog ;
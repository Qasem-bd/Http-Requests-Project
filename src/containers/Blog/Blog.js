import React, { Component } from 'react';
import {Route,NavLink,Switch} from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

class Blog extends Component {
 
    

    render () {
        
        return (
            <div>
                <header className = 'Blog'>
                    <nav>
                        <ul>
                            <li><NavLink exact
                                 to = '/'
                                 activeClassName = 'my-active' >Posts</NavLink></li>
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
             
              <Switch>
                    <Route path = '/new-post' exact  component = {NewPost}/>  
                     <Route path = '/'  component = {Posts}/>     
                   
              </Switch>

               
            </div>
        );
    }
}

export default Blog ;
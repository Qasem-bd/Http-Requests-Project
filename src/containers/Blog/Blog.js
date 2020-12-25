import React, { Component } from 'react';
import {Route,NavLink,Switch,Redirect,withRouter} from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts'
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
}); 

class Blog extends Component {
    
    state = {
        auth : true
    }
        
    componentDidMount () {
       
    }

    render () {
        
        return (
            <div>
                <header className = 'Blog'>
                    <nav>
                        <ul>
                            <li><NavLink exact
                                 to = '/posts'
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
                   { (this.state.auth) ?  <Route path = '/new-post' exact  component = {AsyncNewPost}/> : null } 
                    <Route path = '/posts' component = {Posts} />
                    <Redirect from = '/'  to = 'posts'/>     
                    <Route render = {() => <h1>This Page is not Found </h1> }/>
                     {/* <Route path = '/'  component = {Posts}/>      */}
              </Switch>

               
            </div>
        );
    }
}

export default withRouter(Blog)  ;
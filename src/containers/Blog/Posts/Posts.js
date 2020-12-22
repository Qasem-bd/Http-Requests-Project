import React,{Component} from 'react'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'
import axios from 'axios'
import {Link,Route} from 'react-router-dom'


class Posts extends Component {
    state = {
        posts:[],
        error: false
    }

    
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
            
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

    
    postClickedHandler = (postId) => {
        
        this.props.history.push('/posts/' + postId )
        
    }

    render() {
        let posts = <p style = {{textAlign:"center"}}>Something went wrong! </p>
        if (!this.state.error){
             posts = this.state.posts.map(post => {
        
                return (
                //   <Link to = {'/' + post.id}  key = {post.id}>
                          <Post
                            key = {post.id}
                            title = {post.title}
                            author = {post.author}
                            clicked = {() => this.postClickedHandler(post.id)}
                          />
                       
                         

                   /* </Link>  */
                 
                )
        
            })
        }else {

        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path ={this.props.match.url + '/:postId' }  exact component = {FullPost}/>  
            </div>

        )
    }

}


export default Posts
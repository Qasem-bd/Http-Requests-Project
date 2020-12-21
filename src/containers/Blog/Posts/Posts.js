import React,{Component} from 'react'
import Post from '../../../components/Post/Post'
import './Posts.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Posts extends Component {
    state = {
        posts:[],
        error: false
    }

    
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) =>{
            
            let posts = response.data.slice(0,15);
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
        this.setState({clickedPostId : id})

        
    }

    render() {
        let posts = <p style = {{textAlign:"center"}}>Something went wrong! </p>
        if (!this.state.error){
             posts = this.state.posts.map(post => {
        
                return (
                   <Link to = {'/' + post.id}  key = {post.id}>
                          <Post
                       
                        title = {post.title}
                        author = {post.author}
                        
                         />
                   </Link> 
                 
                )
        
            })
        }else {

        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }

}


export default Posts
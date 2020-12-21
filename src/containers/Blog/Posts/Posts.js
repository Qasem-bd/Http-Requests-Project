import React,{Component} from 'react'
import Post from '../../../components/Post/Post'
import './Posts.css'
import axios from 'axios'


class Posts extends Component {
    state = {
        posts:[],
        clickedPostId : null,
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

    
    postClickedHandler = (id) => {
        console.log('Hallo I am Clicked Handler',id);
        this.setState({clickedPostId : id})

        
    }

    render() {
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
            <section className="Posts">
                {posts}
            </section>
        )
    }

}


export default Posts
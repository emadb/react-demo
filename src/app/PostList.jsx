import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {

  constructor(){
    super()
    this.state = {posts: []}
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({posts: res.data})
      })
  }

  render() {
    console.log(this.state.posts)
    return (
      <div>
        <h2>Elenco post</h2>
        <ul>
          {this.state.posts.map(p => <Post key={p.id} post={p} />)}
        </ul>
      </div>
    );
  }
}

function Post({post}) {
  return (
    <li>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </li>)
}


export default PostList;
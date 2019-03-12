import React, { Component } from 'react'
import PostForm from './PostForm'
import AllPost from './AllPost'
class App extends Component {
  render() {
    return (
    <div className={"container"}>
      <div className={"flex-row"}>
        <div className={"flex-large"}>
            <PostForm/>
        </div>
        <div className={"flex-large"}>
          <AllPost/>
        </div>
      </div>
      
    </div>
    );
  }
}
export default App
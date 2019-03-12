import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
class AllPost extends Component {
  render() {
    return (
    <div>
    <table>
      <thead>
        <tr className={"active"}>
          <th>Id</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Action</th>
        </tr>
      </thead>
      {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
    </table>
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return  {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost)
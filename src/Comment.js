// add Comment component here
import React, { Component } from 'react'

class Comment extends Component {

render() {
  return (
    <div className ="comment">
      {this.props.commentText}
    </div>
  )
}

} // end Comment Component

export default Comment;

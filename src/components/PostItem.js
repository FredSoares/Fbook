import React from 'react'
import './PostItem.css'

function PostItem(props) {
  
  return(
    <div className= "post">
      <div className="perfil">
        <img src={props.data.author.avatar} alt="Avatar"/>
        <div className="info">
          <strong>{props.data.author.name}</strong>
          <span>{props.data.date}</span>
        </div>
      </div>
      <div className="title">
        <p>{props.data.content}</p>
      </div>
      <div className="comments">
        {props.data.comments.map( cmt =>
          <div className="comment" key = {cmt.id} >
            <img src={cmt.author.avatar} alt="Avatar"/>
            <p>{cmt.content}</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default PostItem
import React, { Component } from 'react'
import PostItem from './PostItem'
import './PostList.css'

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://localhost:3000/static/media/avatar.2288ae6c.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:3000/static/media/avatar2.d939f401.png",
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          },
          {
            id: 7,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:3000/static/media/avatar.2288ae6c.png"
            },
            content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Maria Luisa",
          avatar: "http://localhost:3000/static/media/avatar3.036bfc3c.png"
        },
        date: "05 Nov 2019",
        content: "Estou fazendo o curso e está sendo muito massa!",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:3000/static/media/avatar.2288ae6c.png"
            },
            content: "Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Miguel Oliveira",
          avatar: "http://localhost:3000/static/media/avatar2.d939f401.png"
        },
        date: "17 Fev 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:3000/static/media/avatar.2288ae6c.png"
            },
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Conteúdo do comentário"
          }
        ]
      },{
        id: 8,
        author: {
          name: "Maria Luisa",
          avatar: "http://localhost:3000/static/media/avatar3.036bfc3c.png"
        },
        date: "05 Nov 2019",
        content: "Estou fazendo o curso e está sendo muito massa!",
        comments: [
          {
            id: 7,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:3000/static/media/avatar.2288ae6c.png"
            },
            content: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Miguel Oliveira",
          avatar: "http://localhost:3000/static/media/avatar2.d939f401.png"
        },
        date: "17 Fev 2019",
        content: "Pessoal, alguém sabe se estão contratando programadores Web?",
        comments: [
          {
            id: 5,
            author: {
              name: "Diego Fernandes",
              avatar: "http://localhost:3000/static/media/avatar.2288ae6c.png"
            },
            content: "Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repeti"
          }
        ]
      }
    ]
  }

  render(){
    return(
      <div className= "list">
        {this.state.posts.map(post => <PostItem key = {post.id} data = {post}/>)}
      </div>
    )
  }
}

export default PostList
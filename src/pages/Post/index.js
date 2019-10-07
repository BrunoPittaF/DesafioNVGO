//Página de cada Usuário individualmente
import React, {Component} from 'react';
import api from '../../services/api';
import "./styles.css";
import {Link} from 'react-router-dom';


export default class User extends Component{
  state = {
    post: {},
       
         }
         

  async componentDidMount( ) {
    const { id } = this.props.match.params;

    const response = await api.get(`/posts/${id}`);

    const { data} = response;
  

    this.setState({ post: data});



  }

    
    render() {

        const {post} = this.state;
       return (
           
           <div className="user-info">
             <h1>{post.title}</h1>
             <p>ID:<a>{post.id}</a></p> <br></br>
             <p>UserID:<a>{post.userId}</a></p> <br></br>
             <p>Postagem:<a>{post.body}</a></p><br></br>             
              <div className="Botao">
             <Link className="Voltar" to={`../`}>Retornar</Link>
           </div>
                   
           </div>
         
        )
       }

}



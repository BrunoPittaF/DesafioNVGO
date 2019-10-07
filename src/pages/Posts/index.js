//Informação da página inicial vem aqui
import React, { Component } from 'react';
import api from '../../services/api';
import  "./styles.css";
import {Link} from 'react-router-dom';





export default class Posts extends Component {
  
state = {
    //aqui vem as informações de cada heroi/etc
    posts: [],
      
  }
  
  
  componentDidMount () {
    this.loadPerson();
  }

  loadPerson = async () => {
    const response = await api.get(`/posts`);
  
    this.setState({posts: response.data });
  };



  render() {

    const { posts } = this.state;
    
   

    return (
            <div className='user-list'>
         <h1>Página de Postagem</h1> <br></br>
        {posts.map (post => (
          <article key={post.id}>
        <strong>{post.title }</strong>
        <p>{post.id}</p>
        <Link to={`/posts/${post.id}`}>Acessar</Link>
              
        </article> 
      ) )}
      <div className="Botao" > 
        <Link to={`/posts`}>Página de Postagem</Link> 
        </div>        
      
      </div>
       
     
      
    )
  
  
  
}
}
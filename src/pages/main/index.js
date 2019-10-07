//Informação da página inicial vem aqui
import React, { Component } from 'react';
import api from '../../services/api';
import  "./styles.css";
import {Link} from 'react-router-dom';





export default class main extends Component {
  
state = {
    //aqui vem as informações de cada heroi/etc
    users: [],
    posts: [],
      
  }
  
  
  componentDidMount () {
    this.loadPerson();
  }

  loadPerson = async () => {
    const response = await api.get(`/users`);
    

    
    this.setState({users : response.data});
    this.setState({posts: response.data });
  };



  render() {

    const { users, posts} = this.state;
    
   

    return (
            <div className='user-list'>
         <h1>Página de Usuários</h1> <br></br>
        {users.map (user => (
          <article key={user.id}>
        <strong>{user.name}</strong>
        <p>{user.id}</p>
        <p>{user.email}</p>
        <Link to={`/users/${user.id}`}>Acessar</Link>
       
        
        </article> 
            
        ) )}        
        <div className="Botao" > 
        <Link to={`/posts`}>Página de Postagem</Link> 
        </div>            
      </div>
       
     
      
    )
  
  
  
}
}
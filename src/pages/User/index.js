//Aqui vem os detalhes de cada herói  a tela personalizada dele e etc
// # = ID
//. = Class

import React, {Component} from 'react';
import api from '../../services/api';
import "./styles.css";
import main from '../main/index';
import {Link} from 'react-router-dom';


export default class User extends Component{
  state = {
       user:{},
               
         }

  async componentDidMount( ) {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/${id}`);

    const { data, ...info} = response;
  

    this.setState({ user: data,info});



  }

 
    
    
    render() {

        const {user} = this.state;
       return (
           
           <div className="user-info">
             <h1>Nome: {user.name}</h1>
             <p>ID:{user.id}</p>
             <p>Nick: {user.username}</p>
             <p>Email {user.email}</p> 
             <p>Telefone: {user.phone}</p>
             
             { /* <p>{user.address { {street}, {suite}, {city} ,{zipcode} } </p> */ }              
           <p>
               WebSite: <a href={user.website}>{user.website}</a>
           </p>
           <div className="Botao">
             <Link className="Voltar" to={`../`}>Retornar</Link>
           </div>
        
           </div>
           /* Botao de retornar aqui*/
        )
       }

}



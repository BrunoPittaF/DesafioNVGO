//Aqui vem os detalhes de cada herói  a tela personalizada dele e etc
// # = ID
//. = Class

import React, {Component} from 'react';
import api from '../../services/api';
import "./styles.css";
import {Link} from 'react-router-dom';


export default class User extends Component{
  state = {
       user:{
        id : 0,
        name: 0,
        username: 0,
        email: 0,
        address: {
            street: 0,
            city: 0,
            suite: 0,
            zipcode: 0,
            geo: {
              lat: 0 ,
              lng: 0,
            } 
       }
               
         }
         }

  async componentDidMount( ) {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/${id}`);

    const { data} = response;
  

    this.setState({ user: data});



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
             <p>Street: {user.address.street}</p>
             <p>City: {user.address.city}</p>
             <p>Suite: {user.address.suite}</p>
             <p>Zipcode: {user.address.zipcode}</p>
             <p>Lat: {user.address.geo.lat}</p>
             <p>Lng: {user.address.geo.lng}</p>
           
                 
           <p>
               WebSite: <a href={user.website}>{user.website}</a>
           </p>
           <div className="Botao">
             <Link className="Voltar" to={`../`}>Retornar</Link>
           </div>
        
           </div>
         
        )
       }

}



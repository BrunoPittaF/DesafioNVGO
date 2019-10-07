//Página de cada Usuário individualmente
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
             <h1>{user.name}</h1>
             <p>ID:<a>{user.id}</a></p> <br></br>
             <p>Nick:<a>{user.username}</a></p><br></br>
             <p>Email:<a>{user.email}</a></p> <br></br>
             <p>Telefone:<a>{user.phone}</a></p><br></br>
             <p>Street:<a>{user.address.street}</a></p><br></br>
             <p>City:<a>{user.address.city}</a></p><br></br>
             <p>Suite:<a>{user.address.suite} </a></p><br></br>
             <p>Zipcode:<a>{user.address.zipcode}</a></p><br></br>
             <p>Lat:<a>{user.address.geo.lat}</a></p><br></br>
             <p>Lng:<a>{user.address.geo.lng}</a></p><br></br>
             <p>WebSite: <a href={user.website}>{user.website}</a></p><br></br>
           <div className="Botao">
             <Link to={`../`}>Retornar</Link>
           </div>
                   
           </div>
         
        )
       }

}



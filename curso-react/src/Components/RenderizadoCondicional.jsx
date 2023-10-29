import React, { Component } from "react";

const Login = () => {
   return (
      <div>
         <h3>Login</h3>
      </div>
   )
}

const Logout = () => {
   return (
      <div>
         <h3>Logout</h3>
      </div>
   )
}

class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session:true
    }
  }
  render() {
    return (
      <div>
         <h2>Renderizado Condicional</h2>
         {this.state.session === true ? <Login /> : <Logout />}
      </div>
    )
  }
}

export default RenderizadoCondicional;

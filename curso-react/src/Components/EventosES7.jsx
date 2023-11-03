import React,{Component} from "react";

export default class EventosES7 extends Component {
   state = {
      counter:0
   }
 
   sumar = () => {
     this.setState({
       counter: this.state.counter + 1,
     });
   }
   restar = () => {
     this.setState({
       counter: this.state.counter - 1,
     });
   }
 
   render() {
     return (
       <div>
         <h2>Eventos en componentes de clase ES7</h2>
         <nav>
           <button onClick={this.sumar}>+</button>
           <button onClick={this.restar}>-</button>
         </nav>
         <h3>{"Counter: " + this.state.counter}</h3>
       </div>
     );
   }
 }
import  React, { Component } from "react";
import Velo from "./Velo";


export default  class Velos extends Component {


  state = {

  velos : [
   {name :"btwin", price:150},
   {name :"rock", price:250},
   {name :"mahindra", price:300},

  ]
  };

 title = "list des velos ";


handlePrice = () => {

const newState = this.state.velos.map((velo) => {
 const theVelo = velo ;
 theVelo.price -= 10 ;
return  theVelo;


});
this.setState({
newState

})
}

  render() {

  return (

   <div>

<button style={{color:"red"}} onClick={this.handlePrice} > click to change price </button>
                 <h1>{this.state.title}</h1>
    <Velo name={this.state.velos[0].name}>{this.state.velos[0].price}</Velo>
    <Velo name={this.state.velos[1].name}>{this.state.velos[1].price}</Velo>
    <Velo name={this.state.velos[2].name}>{this.state.velos[2].price}</Velo>4


    <Velo name="scott">vitesse 500km </Velo>

  
   </div> 

   )


}


}
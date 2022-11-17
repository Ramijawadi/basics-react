import React from "react";

const Voiture = (props) => {

 
let vitesse = props.vitesse ? props.vitesse : 'no vitesse displayed';


if (props.children) {
    return (
        <div>
          <h1> categories : {props.children}  and speed is {vitesse}</h1>
        </div>
      );}
      else {

        return (
        <div>
        <h1>Invalid Entry</h1>
        </div>)
      }
}





export default Voiture;

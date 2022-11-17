import React from "react";
import Voiture from "./Voiture";

const Voitures = (props) => {

return (
<div>

    <h1>{props.title}</h1>

    
<Voiture></Voiture>
<Voiture > bmw</Voiture>
<Voiture vitesse = "300"> renauld</Voiture>


</div>

)

};
 export default Voitures ;
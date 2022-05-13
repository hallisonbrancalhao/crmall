import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

const Card2 = ({ valorAntigo }) => {

  return (
   <div>
     <h1>CARD 2</h1>
     <p>{valorAntigo}</p>
   </div>
  );
} 

export default Card2
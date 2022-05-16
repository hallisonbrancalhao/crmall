import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useStateMachine } from "little-state-machine";

const Card2 = () => {
  const { pesoAntigo } = useParams();

  return (
   <div>
     <h1>CARD 2</h1>
     <p>{pesoAntigo}</p>
   </div>
  );
} 

export default Card2
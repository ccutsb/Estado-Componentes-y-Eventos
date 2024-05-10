import React from 'react'
import Formulario from "./Formulario.jsx"
import {useState} from "react"
import SocialButton from './SocialButton.jsx'

export default function Registro(){
  const [alert,setAlert] = useState({mensaje:"",color:"", bg:""})
  return(
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton/>
      <p>O usa tu email para registrarte</p>
      <Formulario setAlert={setAlert}/>
      
    </>
  )
}


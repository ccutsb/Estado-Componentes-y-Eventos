import React from 'react'
import Formulario from "./Formulario.jsx"
import "../App.css"

export default function Alert() {
  const [alert,setAlert] = useState({mensaje:"",color:"", bg:""})
  return (
    <>
      <Formulario setAlert={setAlert}/>
      {
        alert.mensaje && <h3 className= {alert.bg} style={{color:alert.color}}>{alert.mensaje}</h3>
      }
    </>
  )
}

import React from 'react'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {limpiar} from './Limpiar.jsx'

export default function Formulario() {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPw, setConfirmPw] = useState("")
    const [alert,setAlert] = useState({mensaje:"",color:"", bg:""})

    const validarDatos = (e) => {
        e.preventDefault()
    

        if (user === '' || email === '' || password === '' || confirmPw === '')
            {
                setAlert({mensaje:"Debes completar todos los campos!",color:"red", bg:"red"})
                return; 
            }

        if(password !== confirmPw){
                setAlert({mensaje:"Las contraseñas deben coincidir!",color:"red",bg:"red"})
                return;
        }else{   
                setAlert({mensaje:"Registración Completada!",color:"green",bg:"green"})
                limpiar(setUser,setEmail, setPassword, setConfirmPw)
                return;
              }
};

  return (
    <>
    <Form onSubmit={validarDatos}>

    <div className="form-group">
    <input
        type="text"
        name="user"
        className="form-control"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder='Nombre'/>
    </div>

    <div className="form-group">
    <input
        type="email"
        name="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Tu-email@ejemplo.com'/>
    </div>

    <div className="form-group">
    <input
        type="text"
        name="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Contraseña'/>
    </div>

    <div className="form-group">
    <input
        type="text"
        name="confirmPw"
        className="form-control"
        value={confirmPw}
        onChange={(e) => setConfirmPw(e.target.value)}
        placeholder='Confirma tu Contraseña'/>
    </div>

    <button className="btn btn-dark" type="submit">
        Registrarse
    </button>

    {alert.mensaje && <h3 className={alert.bg} style={{color:alert.color}}>{alert.mensaje}</h3>}
    </Form>
    </>
  )
}

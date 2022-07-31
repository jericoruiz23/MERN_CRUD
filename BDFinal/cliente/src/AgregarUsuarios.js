import React, {useState} from 'react'
import uniquid from 'uniquid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarUsuarios() {

    //Hooks
    const[nombre,setNombre] = useState('')
    const[email,setEmail] = useState('')
    const[telefono,setTelefono] = useState('')

    
    function agregarUsuario() {
        var usuario = {
            nombre:nombre,
            email:email,
            telefono:telefono,
            idusuario:uniquid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res =>{
            //alert(res.data)
            Swal.fire('Felicidades','El usuario se creo con éxito')
        })
        .then(err =>{ console.log(err)})

    }

    return (
        <div className='container'>
            <div className='row'>
                <h2 className='mt-4'>Crear nuevo Usuario </h2>
            </div>
            <div>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'>NOMBRE</label>
                        <input type='text' className='form-control' value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>EMAIL</label>
                        <input type='email' className='form-control'value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='telefono' className='form-label'>TELEFONO</label>
                        <input type='text' className='form-control' value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                    </div>
                    <button onClick={agregarUsuario} className='btn btn-success'>Guardar Usuario</button>
                </div>
            </div>
        </div>
    )
}export default AgregarUsuarios
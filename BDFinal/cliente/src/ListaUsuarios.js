import axios from 'axios'
import React, {useState,useEffect}from 'react'
import UsuarioIndividual from './UsuarioIndividual'


function ListaUsuarios(){
    const[datausuarios,setdatausuario] = useState([])

    useEffect(()=>{
        axios.get('api/usuario/obtenerusuarios').then(res =>{
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err=>{
            console.log(err);
        })
    },[])

    //Mapear listadeusuario en objetousuario
    const listausuarios = datausuarios.map(usuario =>{
        return(
            <div>
                <UsuarioIndividual usuario = {usuario}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Lista de Directores </h2>
            {listausuarios}
        </div>
    )
}
export default ListaUsuarios
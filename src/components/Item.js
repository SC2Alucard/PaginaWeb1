import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component{

    render(){

        let user = this.props.user

    

        return(
            <li>
                Matricula => {user.matricula},  Nombre => {user.nombre},  Apellido => {user.apellido},  
                Carrera => {user.carrera},  Sexo => {user.gender},  Color favorito => {user.color}
                
                <button onClick={() => this.props.deleteOp(this.props.id)}>Borrar</button>
                 
            </li>
        )
    }
}

Item.propTypes = {

    user: PropTypes.shape({

    matricula: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    carrera: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,

    }).isRequired,
    
    deleteOp: PropTypes.func.isRequired



    
}

export default Item
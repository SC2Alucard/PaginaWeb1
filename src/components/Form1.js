import React, { Component } from 'react'
import './Item'
import Item from './Item'




class App extends  Component{

    constructor(args){
        super(args)
        this.state = {

            matricula:"",
            nombre:"",
            name:"",
            apellido:"",
            sexo:"",
            carrera:"",
            color:"",
            message:"",
            gender:"",
            
            users:[

            ]
        }
    }

    validate(){
        if(
           this.state.matricula === '' || 
           this.state.nombre === '' ||
           this.state.apellido === '' ||
           this.state.carrera === '' ||
           this.state.color === ''
           ){

            this.setState({
                message:"Favor completar campos faltantes"
            })
            console.log("no hay datos")
            return false
            
        }
        return true
    }

    add(e){

        if(this.validate()){
            
        
            const matriculaInput = document.getElementById("matricula")
            const nombreInput = document.getElementById("nombre")
            const apellidoInput = document.getElementById("apellido")
            const carreraInput = document.getElementById("carrera")
            const colorInput = document.getElementById("color")

           var x='NA';
           document.getElementsByName("gender").
            forEach(radio => {
                if(radio.checked){
                    x = radio.value;
                    console.log(radio.value)
                }
            })

            const genderInput=x;
            
    
            
            let newUser = {

                id: new Date().getTime(),
                matricula: matriculaInput.value,
                nombre: nombreInput.value,
                apellido: apellidoInput.value,
                carrera: carreraInput.value,
                color: colorInput.value,
                gender: genderInput

            }

            let users = this.state.users
            users.unshift(newUser)

            this.setState({
                users : users
            })

            
            this.setState({
                message:"Datos guardados correctamente!"
            })
            
            localStorage.setItem("matricula", matriculaInput.value);
            localStorage.setItem("nombre", nombreInput.value);
            localStorage.setItem("apellido", apellidoInput.value);
            localStorage.setItem("carrera", carreraInput.value);
            localStorage.setItem("color favorito", colorInput.value);
            localStorage.setItem("Sexo", genderInput.value);
            

            this.setState({
                matricula:"",
                nombre:"",
                apellido:"",
                carrera:"",
                color:""

            })
            
         
        }
        
        

    }
    

    delete(id){

        console.log("Usuario elimindado");

        let userIndex = this.state.users.map( x =>{return x.id}).indexOf(id)

        let users = this.state.users

        users.splice(userIndex, 1)

        this.setState({

            users: users
        })



    }

onChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

    render() {
        return(
            <div>

                <div>
                <label htmlFor="matricula">Matricula</label>
                <br></br>
                    <input 
                    value={this.state.matricula} 
                    onChange = {this.onChange.bind(this)} 
                    name="matricula"  id="matricula" type="text" >                        
                    </input>
                </div>

                <div>
                <label htmlFor="nombre">Nombre</label>
                <br></br>
                    <input
                    value={this.state.nombre}
                    onChange = {this.onChange.bind(this)}
                    name="nombre" id="nombre" type="text" >
                    </input>
                </div>

                <div>
                <label htmlFor='apellido'>Apellido</label>
                <br></br>
                <input 
                    value={this.state.apellido}
                    onChange = {this.onChange.bind(this)}
                    name="apellido" id="apellido" type="text" 
                    ></input>
                </div>

                <div>
                <label htmlFor='carrera'>Carrera</label>
                <br></br>
                <input 
                    value={this.state.carrera}
                    onChange = {this.onChange.bind(this)}
                    name="carrera" id="carrera" type="text" ></input>
                </div>

                <div>
                <label htmlFor="color">Color Favorito</label>
                <br></br>
                <input 
                value={this.state.color}
                onChange = {this.onChange.bind(this)}
                name="color" id="color" type="text" ></input>
                </div>

                <div>
                <label htmlFor='gender'>Sexo</label>
                <input id='hombre' type="radio" name="gender" value='h' onChange={this.onChange.bind(this)}></input>Hombre
                <input id='mujer' type="radio" name="gender" value='m' onChange={this.onChange.bind(this)}></input>Mujer
                </div>
             
                <div>
                <button onClick={this.add.bind(this)} id='btn_salvar'>Salvar</button>
                <br></br>
                <span >{this.state.message}</span>
                </div>

                <ul>
                    {this.state.users.map(user => {
                        return <Item

                            key ={user.id}
                            user = {user}
                            deleteOp={this.delete.bind(this)}


                         />
                    })}
                </ul>
            </div>


        )
    }
} 


export default App



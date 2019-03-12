import React, { Component } from 'react'
import {connect} from 'react-redux'

class PostForm extends Component{
    
    constructor() {
        super()
        this.state = {
            nb: 0,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
         nb : this.state.nb + 1
        })
        
        const nom = this.getNom.value;
        const prenom = this.getPrenom.value;
        const data = {
            id: new Date(),            
            nb : this.state.nb,
            nom,
            prenom
        }
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getNom.value = '';
        this.getPrenom.value = '';
    }
    render(){
        return(
            <center className={"form"} >
                <form onSubmit={this.handleSubmit} className={'nom'}>
                            <label>Nom</label>
                            <input required type='text' ref={(input)=>this.getNom = input} />
                                <label>Prénom</label>
                                <input required type='text' ref={(input)=>this.getPrenom = input} />
                                <button className={'ajout btn btn-primary'}  >Ajouter</button>
                </form>
            </center>
        )
    }
}
export default connect()(PostForm)
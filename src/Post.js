import React, { Component } from 'react'
import {connect} from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
class Post extends Component {

  submit = () => (
		confirmAlert({
			title: '',
			message: 'Confirmation de suppression',
			buttons: [
			  {
				label: 'oui',
				onClick: () =>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})
			  },
			  {
				label: 'Non',
				onClick: () => console.log("blabla")
			  }
			]
		  })
	)
  render() {
  return (

		<tbody>
      <tr>
        <td>{this.props.post.nb}</td>
        <td>{this.props.post.nom}</td>
        <td>{this.props.post.prenom}</td>
        <td> 
					<button onClick={()=>this.submit() } className={"btn btn-danger"} >X</button></td>        
      </tr>
		</tbody>
     

  
  );
 }
}
export default connect()(Post);
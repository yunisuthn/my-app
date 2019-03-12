import React, {Component} from 'react'
import Popup from 'reactjs-popup'

class Pop extends Component {

  render(){
       return(
    <Popup trigger={<button className="btn btn-danger button"> X </button>} modal >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="content">
          {' '}
          confirmation de suppression
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              kjljfsld
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('non ')
              close()
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
    </Popup>
       )}
    

}
export default Pop
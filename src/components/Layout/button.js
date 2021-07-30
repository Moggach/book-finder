import Radium from 'radium';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

class Button extends React.Component {
    render() {
      return (
         <>
          <button> 
          <FontAwesomeIcon className="icons" icon={faSearch} size = '1.8x' color = "white"/> </button>
          
        </>
      );
    }
  }


  
  
      
  

  export default Radium(Button);

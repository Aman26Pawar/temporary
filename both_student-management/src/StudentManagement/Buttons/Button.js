import React from 'react';
import './Button.css';

class Button extends React.Component
{
    constructor (props) 
    {
      super(props); 
      this.handleOnClick=this.handleOnClick.bind(this); 
    }
    handleOnClick()
    {
        this.props.handleOnClick();
    } 
    render()
    {
      return(
          <div>
             <label className="label"> {this.props.error} </label>
            <input type="button"  className="buttonProp" onClick={this.handleOnClick} value={this.props.buttonName} 
            disabled={this.props.disabled} ></input>
          </div>
      );
    }
    
}
export default Button;
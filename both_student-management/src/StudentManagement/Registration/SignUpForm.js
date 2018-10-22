import React, { Component } from 'react';
import {FormErrors} from '../ErrorHandling/FormErrors.js'
import { Redirect } from 'react-router-dom';
import Button from '../Buttons/Button.js';
import './SignUP.css'

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        FirstName:'',
        LastName:'',
        userNm:'',
        passWord:'',
        FirstNmValid: false,
        LastNameValid:false,
        UserNameValid:false,
        PasswordValid:false,
        formErrors:{FirstName:'',LastName:'',userNm:'',passWord:''},
        formValid:false,
        referrer:null
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleBack=this.handleBack.bind(this);
  }

handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
                () => { this.validateField(name, value) });
}

validateField(fieldName,value){
  let fieldValidationErrors = this.state.formErrors;
  let FirstNmValid = this.state.FirstNmValid;
  let LastNameValid = this.state.LastNameValid;
  let UserNameValid = this.state.UserNameValid;
  let PasswordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'First Name':
          FirstNmValid = value.match(/^[a-zA-Z'.-]+$/);
          fieldValidationErrors.FirstName = FirstNmValid ? '' : ' is invalid';
        break;
      
      case 'Last Name':
          LastNameValid = value.match(/^[a-zA-Z]+$/);
          fieldValidationErrors.LastName = LastNameValid ? '' : ' is invalid';
        break;
      
      case 'user Name':
        UserNameValid = value.match(/^[a-zA-Z0-9]+$/);
        fieldValidationErrors.userNm = UserNameValid ? '' : ' is invalid';
      break;
      
      case 'passWord':
        PasswordValid = value.length >= 6;
        fieldValidationErrors.passWord = PasswordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    FirstNmValid: FirstNmValid,
                    LastNameValid:LastNameValid,
                    UserNameValid:UserNameValid,
                    PasswordValid:PasswordValid
                  }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.FirstNmValid && this.state.LastNameValid && this.state.UserNameValid &&this.state.PasswordValid});
}
errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}
handleBack()
{
    console.log("back");
    this.setState({referrer:'/'})
}

      render(){
        const {referrer} = this.state;
        if (referrer) return (<Redirect to={referrer} />)
        return(
            <div className="SignUpPage">
                 <form className="SignUpForm">
                 <h2>Register here</h2>
                 <div>
                     <FormErrors formErrors={this.state.formErrors} />
                </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.FirstName)}`}>
                        <input id="name" type="text" size="15" placeholder="First Name" name="First Name"  required
                        value={this.state.value}
                        onChange={this.handleUserInput}/><br/><br/>                         
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.LastName)}`}>
                            <input id="lastName" type="text" size="15" placeholder="last name" name="Last Name" required
                            value={this.state.value}
                            onChange={this.handleUserInput} /><br/><br/> 
                    </div>
                    <div className={`form-group ${this.errorClass (this.state.formErrors.userNm)}`}>
                            <input id="user" type="text" size="15" placeholder="User Name" name="user Name" required
                            value={this.state.value}
                            onChange={this.handleUserInput}/><br/><br/> 
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.passWord)}`}>     
                            <input id="pass_word" type="password" size="15" placeholder="password" name="passWord" required
                            value={this.state.value}
                            onChange={this.handleUserInput}/><br/><br/> 
                    </div>
                    <Button buttonName="Home" handleOnClick={this.handleBack}/>
                    <Button buttonName="Sign Up" handleOnClick={this.props.onSubmitClick} disabled={!this.state.formValid}></Button>                   
                </form>
            </div>
        )
    }
}

export default SignUpForm;
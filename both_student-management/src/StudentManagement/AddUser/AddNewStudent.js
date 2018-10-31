import React from 'react';
import { connect } from 'react-redux'
import Button from '../Buttons/Button.js';
import { Redirect } from 'react-router-dom';
import {FormErrors} from '../ErrorHandling/FormErrors.js'
import '../Buttons/Button.css';
import './AddNewStudent.css'



class AddNewStudent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={FirstName:"",
                    LastName:" ",
                    Class:" ",
                    Division:" ",
                    AddressLine1:" ",
                    AddressLine2:" ",
                    pincode:"",
                    teacherId: this.props.teachers.teacherID,
                    firstNameValid:false,
                    lastNameValid:false,
                    classNameValid:false,
                    divisionNmValid: false,
                    addressLine1Valid:false,
                    pincodeValid:false,
                    formValid:false,
                    AddFormError:'',
                    formErrors:{FirstName:'',LastName:'',Class:'',Division:'',Address:'',PINcode:''},
                    referrer:null
                    }
                    this.handleAddStudent=this.handleAddStudent.bind(this);
                    this.handleUserInput = this.handleUserInput.bind(this);
        this.handleBack=this.handleBack.bind(this);
    }
    handleUserInput = (e) => 
    {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                  () => { this.validateField(name, value) });
    }
    validateField(fieldName,value)
    {
        let fieldValidationErrors = this.state.formErrors;
        let FirstNmValid = this.state.firstNameValid;
        let LastNmValid = this.state.lastNameValid;
        let classValid = this.state.classNameValid;
        let divisionValid = this.state.divisionNmValid;
        let addressValid=this.state.addressLine1Valid;
        let pinValid=this.state.pincodeValid;
        switch(fieldName) 
        {
            case 'FirstName':
                FirstNmValid = value.match(/^[a-zA-Z]+$/);
                fieldValidationErrors.FirstName = FirstNmValid ? '' : ' is invalid';
            break;
            
            case 'LastName':
                LastNmValid = value.match(/^[a-zA-Z]+$/);
                fieldValidationErrors.LastName = LastNmValid ? '' : ' is invalid';
            break;
            
            case 'Class':
                classValid = value.match(/^[a-zA-Z0-9'.-]+$/);
                fieldValidationErrors.Class = classValid ? '' : ' is invalid';
            break;

            case 'Division':
                divisionValid = value.match(/^[a-zA-Z]$/) && value.length===1;
                fieldValidationErrors.Division = divisionValid ? '': ' Single Character';
            break;

            case 'AddressLine1':
                addressValid = value.length <= 100;
                fieldValidationErrors.Address = addressValid ? '' : ' Too long use AddressLine2';
            break;

            case 'PIN':
                pinValid = value.length === 6 && value.match(/^[0-9]+$/) ;
                fieldValidationErrors.PINcode= pinValid ? '': 'should be 6 digits only';
            break;
            
            default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        firstNameValid: FirstNmValid,
                        lastNameValid: LastNmValid,
                        classNameValid:classValid,
                        divisionNmValid:divisionValid,
                        addressLine1Valid:addressValid,
                        pincodeValid:pinValid
                        }, this.validateForm);
    }
    validateForm() 
    {
        this.setState({formValid: (this.state.firstNameValid  && this.state.lastNameValid  &&
             this.state.classNameValid  &&this.state.divisionNmValid && this.state.addressLine1Valid &&
             this.state.pincodeValid.length===1)});    
        if(this.state.formValid !== true)
        {
            this.setState({AddFormError:'please fill complete form'})
        } 
        else
        {
            this.setState({AddFormError:''})
        }   
    }
    errorClass(error) 
    {
        return(error.length === 0 ? '' : 'has-error');
    }

      handleAddStudent()
    { 
        const newStudent= {
        teacherId : this.state.teacherId,
        firstName : this.state.FirstName,
        lastName : this.state.LastName,
        studentClass : this.state.Class,
        division : this.state.Division,
        addressLine1 : this.state.AddressLine1,
        addressLine2 : this.state.AddressLine2,
        pincode : document.getElementById("pincode").value
        }
           
     fetch('http://localhost:8080/addStudents',{
                   method:'POST',
                   headers: {
                    'content-type': 'application/json'
                  },
                    body: JSON.stringify(newStudent)
                })
                .then(res=>res)
                .then(row =>{
                    if(row.status === 200)
                    {
                        alert("Added "+ this.state.FirstName);  
                        this.setState({referrer:'/TeacherHome/ListOfStudents'})
                    }
                    else
                    {
                        alert("please fill all details carefully")
                    }
                })        
         
    }
    handleBack()
    {
        this.setState({referrer:'/TeacherHome'})
    }
    render()
    {
        const {referrer} = this.state;
        if (referrer) return (<Redirect to={referrer} />)
        
        return(
            <div className="Add-Student">
                <div>
                <form>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div><br/>
                        <div className={`col-3 ${this.errorClass(this.state.formErrors.FirstName)}`}>
                            <input id="firstname" type="text" placeholder="First Name" name="FirstName"  required
                                value={this.state.value} onChange={this.handleUserInput}/>                           
                        </div><br/>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.LastName)}`}>
                            <input id="lastName" type="text" placeholder="last name" name="LastName" required
                                value={this.state.value} onChange={this.handleUserInput} />
                        </div><br/>
                        <div className={`form-group ${this.errorClass (this.state.formErrors.Class)}`}>
                            <input id="class" type="text" placeholder="Class" name="Class" required
                                value={this.state.value} onChange={this.handleUserInput}/>
                        </div><br/>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.Division)}`}>      
                            <input id="division" type="text" placeholder="Division" name="Division" required
                                value={this.state.value} onChange={this.handleUserInput}/>
                        </div><br/>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.Address)}`}>      
                            <input id="address1" type="text" placeholder="Address Line1" name="AddressLine1" required
                                value={this.state.value} onChange={this.handleUserInput}/>
                        </div><br/>
                        <div>      
                            <input id="address2" type="text" placeholder="Address Line2" name="AddressLine2" required
                                value={this.state.value} onChange={this.handleUserInput}/>
                        </div><br/>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.PINcode)}`}>      
                            <input id="pincode" type="text" placeholder="PIN code" name="PIN" required
                                value={this.state.value} onChange={this.handleUserInput}/>
                        </div><br/>
                        <Button buttonName="Add Student" handleOnClick={this.handleAddStudent} disabled={!this.state.formValid} error={this.state.AddFormError}/>
                        <Button buttonName="Back" handleOnClick={this.handleBack}/>
                    </form>
                </div>
            </div>
        );
    }
  
}
const mapStateToProps = (state) => {
    return{
        teachers:state.loginReducer[state.loginReducer.length-1]
    }
}
export default connect (mapStateToProps) (AddNewStudent);
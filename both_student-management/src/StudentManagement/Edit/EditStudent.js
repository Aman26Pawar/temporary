import React from 'react';
import InputBox from '../InputBox';
import Button from '../Buttons/Button';
import { Redirect } from 'react-router-dom';
import ListOfStudents from '../ListDisplay/ListOfStudents';
//import Axios from 'axios';
class EditStudent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={studentId:'',FirstName:'',
                    LastName:'',Class:'',
                    Division:'',AddressLine1:'',
                    AddressLine2:'',pincode:'',
                    firstNameValid:false,
                    lastNameValid:false,
                    divisionValid: false,
                    addressLine1Valid:false,handleEditcalled:false,
                    pincodeValid:false,handlebackcalled:false,
                    ErrfirstName:" ",ErrlastName:" ",ErrClass:"",Errdivision:" ",
                    ErraddressLine1:" ",Errpincode:"",ErrButton:""
                    }
        this.handleEditStudent=this.handleEditStudent.bind(this);
        this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
        this.handleClassChange=this.handleClassChange.bind(this);
        this.handleDivisionChange=this.handleDivisionChange.bind(this);
        this.handleAddressLine1Change=this.handleAddressLine1Change.bind(this);
        this.handleAddressLine2Change=this.handleAddressLine2Change.bind(this); 
        this.handlePincodeChange=this.handlePincodeChange.bind(this);
        this.handleBack=this.handleBack.bind(this);
    }
    handleFirstNameChange(value)
    { 
        let FirstNmValid = this.state.firstNameValid;
        if(value!=="")
        {
            FirstNmValid = value.match(/^[a-zA-Z'.-]+$/);
            this.setState({ErrfirstName:FirstNmValid ? '' : 'Only alphabates allowed\' . -',});
            this.setState({FirstName: value});
        }
        else{
            this.setState({ErrfirstName:"*First Name is required"});
        }
    }
    handleLastNameChange(value)
    {
        let LastNmValid = this.state.lastNameValid;
        if(value!=="")
        {
            LastNmValid = value.match(/^[a-zA-Z'.-]+$/);
            this.setState({ErrlastName:LastNmValid ? '' : 'Only alphabates allowed\' . -'});
            this.setState({LastName: value});
        }
        else{
            this.setState({ErrlastName:"*Last Name is required"});
        }
    }
    handleClassChange(value)
    { 
        let classNmValid=this.state.classNameValid;
        if(value!=="")
        {
            classNmValid=value.match(/^[a-zA-Z0-9'.-]+$/);
            this.setState({ErrClass:classNmValid? '' : 'space not allowed'});
            this.setState({Class: value});
        }
        else{
            this.setState({ErrClass:"*Class is required"});
        }
    }
    handleDivisionChange(value)
    {
        let divVlid=this.state.divisionValid;
        if(value!=="")
        {
            divVlid=value.match(/^[a-zA-Z]$/);
            this.setState({Errdivision:divVlid? '':'Only single character'});
            this.setState({Division: value});
            
        }
        else{
            this.setState({Errdivision:"*Division is required"});
        }
    }
    handleAddressLine1Change(value)
    {
        let addressLine1Valid=this.state.addressLine1Valid;
        if(value!==" " && value.length >= 100)
        {
            this.setState({ErraddressLine1:addressLine1Valid ? '' : ' Too long use Line2'});
            this.setState({AddressLine1: value});
        }
        else if(value === ""){
            this.setState({ErraddressLine1:"*Address is required"});
        }
    }
    handleAddressLine2Change(value)
    {
        this.setState({AddressLine2: value});
    }
    handlePincodeChange(value)
    {
        let pincodeValid = this.state.pincodeValid;
        if(value!=="")
        {
            pincodeValid = value.match(/^[0-9]+$/);
            this.setState({Errpincode:pincodeValid ? '' : 'Only numbers'});
            this.setState({pincode: value});
        }
        else{
            this.setState({Errpincode:"*PIN Code is required"});
        }
    }
    handleEditStudent()
    {
        const updatedStudent=
        {
            tid : this.props.studentToUpdate.teacherId,
            fname : this.state.FirstName,
            lname : this.state.LastName,
            classs : this.state.Class,
            division : this.state.Division,
            line1 : this.state.AddressLine1,
            line2 : this.state.AddressLine2,
            pin : this.state.pincode
        }
        /*tid : this.props.studentToUpdate.teacherId,
            fname : document.getElementById("fname").value,
            lname : document.getElementById("lname").value,
            classs : document.getElementById("class").value,
            division : document.getElementById("div").value,
            line1 : document.getElementById("address1").value,
            line2 : document.getElementById("address2").value,
            pin : document.getElementById("pin").value*/
        
           if(fetch('http://localhost:8080/updateStudent/'+this.props.studentToUpdate.studentId,{
               method:'PUT',
               headers: {
                'content-type': 'application/json'
              },
               body: JSON.stringify(updatedStudent)
            })
            .then(resp => resp)
            .then(findResp => this.setState({data:findResp}))
           )
           {
            //alert("Updated "+ fname+ " "+lname);
            this.setState({handleEditcalled:!this.state.handleEditcalled});
           }    
        else
        {
            this.setState({ErrButton:"Please fill the above fields"})
        }
    }
    handleBack()
    {
        this.setState({handlebackcalled:!this.state.handlebackcalled});
    }
    render()
    {
        const {referrer} = this.state;
        const {handlebackcalled}=this.state;
        const {handleEditcalled}=this.state
        if (referrer) 
            return (<Redirect to={referrer} />);
        if(handlebackcalled)
            return <ListOfStudents></ListOfStudents>
        if(handleEditcalled)
            return <ListOfStudents></ListOfStudents>
        return(
            <div className="Edit-Student">
            <div><h2> Student To be edit:  {this.props.studentToUpdate.firstName} </h2></div> 
                <form>
                    <InputBox id="fname" inputType="text"  placeholder="First Name"    value={this.props.studentToUpdate.firstName}    
                              handleChanges={this.handleFirstNameChange}    Name="firstName"   error={this.state.ErrfirstName} /><br/>
                    
                    <InputBox id="lname" inputType="text"  placeholder="Last Name"     value={this.props.studentToUpdate.lastName}     
                              handleChanges={this.handleLastNameChange}     Name="lastName"    error={this.state.ErrlastName} /><br/>          
                    <InputBox id="class" inputType="text"  placeholder="Class"         value={this.props.studentToUpdate.studentClass}        
                              handleChanges={this.handleClassChange}        Name="class"       error={this.state.ErrClass} /><br/>         
                    <InputBox id="div" inputType="text"  placeholder="Division"      value={this.props.studentToUpdate.division}     
                              handleChanges={this.handleDivisionChange}     Name="division"    error={this.state.Errdivision} /><br/>          
                    <InputBox id="address1" inputType="text"  placeholder="Address Line1" value={this.props.studentToUpdate.addressLine1} 
                              handleChanges={this.handleAddressLine1Change} Name="addressLine1"error={this.state.ErraddressLine1} /><br/>
                    <InputBox id="address2" inputType="text"  placeholder="Address Line2" value={this.props.studentToUpdate.addressLine2} 
                              handleChanges={this.handleAddressLine2Change} Name="addressLine2"                               /><br/>
                    <InputBox id="pin" inputType="text"  placeholder="PIN code"      value={this.props.studentToUpdate.pincode}      
                              handleChanges={this.handlePincodeChange}      Name="pincode"     error={this.state.Errpincode} /><br/>           
                </form>   
                <Button buttonName="Edit Student" handleOnClick={this.handleEditStudent} error={this.state.ErrButton}/>
                <Button buttonName="Back" handleOnClick={this.handleBack}/>
            </div>
        );
    }
}
export default EditStudent;
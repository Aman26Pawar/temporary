import React from 'react';
import InputBox from '../InputBox';
import Button from '../Buttons/Button.js';
import ListOfStudents from '../ListDisplay/ListOfStudents.js';

class EditStudent extends React.Component
{
   constructor(props)
    {
        super(props)
        this.state={studentId:this.props.studentToUpdate.id,
                    FirstName:this.props.studentToUpdate.firstName,
                    LastName:this.props.studentToUpdate.lastName,
                    Class:this.props.studentToUpdate.studentClass,
                    Division:this.props.studentToUpdate.division,
                    AddressLine1:this.props.studentToUpdate.addressLine1,
                    AddressLine2:this.props.studentToUpdate.addressLine2,
                    pincode:this.props.studentToUpdate.pincode,
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
    componentWillMount()
    {
        
    }
    handleFirstNameChange(value)
    { 
        let FirstNmValid = this.state.firstNameValid;
        if(value!=="")
        {
            FirstNmValid = value.match(/^[a-zA-Z'.-]+$/);
            this.setState({ErrfirstName:FirstNmValid ? '' : ' Only: letters\' . -',});
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
            this.setState({ErrlastName:LastNmValid ? '' : ' Only: letters\' . -'});
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
            this.setState({ErrClass:classNmValid? '' : 'Only: letters\' . - 0-9'});
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
        if(value!=="")
        {
            addressLine1Valid = value.length <= 22;
            this.setState({ErraddressLine1:addressLine1Valid ? '' : ' Too long use Line2'});
            this.setState({AddressLine1: value});
        }
        else{
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
            this.setState({Errpincode:pincodeValid ? '' : '  Only numbers'});
            this.setState({pincode: value});
        }
        else{
            this.setState({Errpincode:"*PIN Code is required"});
        }
    }
    handleEditStudent()
    {
        const id=this.props.studentToUpdate.studentId;
        const tid=this.props.studentToUpdate.teacherId;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const classs = document.getElementById("class").value;
        const division= document.getElementById("div").value;
        const line1 = document.getElementById("address1").value;
        const line2 = document.getElementById("address2").value;
        const pin = document.getElementById("pin").value;
           if(
               fetch('http://localhost:8080/updateStudent?id='+id+'&firstName='+fname+
            '&lastName='+lname+'&TeacherId='+tid+'&classs='+classs+'&division='+division+'&line1='+line1 +
            '&line2='+ line2+'&pinCode='+pin,
            {method:'POST',mode:"no-cors"})
            .then(resp => resp)
            .then(findResp => this.setState({data:findResp}))
           )
           {
            alert("Updated "+ fname);
            this.setState({editComplete:!this.state.editComplete})  
           }
    }

    handleBack()
    {
        this.setState({backPage:!this.state.backPage})
    }

    render()
    {
    
        const {editComplete}=this.state;
        const {backPage}=this.state;
        if(editComplete){
            return <ListOfStudents></ListOfStudents>
        }
        if(backPage){
            return <ListOfStudents></ListOfStudents>
        }
        return(
            <div className="col-75 ">
            <div className="center">
            <h4> Student To be edit:</h4>
                <div>
                <form>
                    <InputBox id="fname" inputType="text"  placeholder="First Name"    value={this.props.studentToUpdate.firstName}    
                              handleChanges={this.handleFirstNameChange}    Name="firstName"   error={this.state.ErrfirstName} />
                    <InputBox id="lname" inputType="text"  placeholder="Last Name"     value={this.props.studentToUpdate.lastName}     
                              handleChanges={this.handleLastNameChange}     Name="lastName"    error={this.state.ErrlastName} />          
                    <InputBox id="class" inputType="text"  placeholder="Class"         value={this.props.studentToUpdate.studentClass}        
                              handleChanges={this.handleClassChange}        Name="class"       error={this.state.ErrClass} />         
                    <InputBox id="div" inputType="text"  placeholder="Division"      value={this.props.studentToUpdate.division}     
                              handleChanges={this.handleDivisionChange}     Name="division"    error={this.state.Errdivision} />          
                    <InputBox id="address1" inputType="text"  placeholder="Address Line1" value={this.props.studentToUpdate.addressLine1} 
                              handleChanges={this.handleAddressLine1Change} Name="addressLine1"error={this.state.line1} />
                    <InputBox id="address2" inputType="text"  placeholder="Address Line2" value={this.props.studentToUpdate.addressLine2} 
                              handleChanges={this.handleAddressLine2Change} Name="addressLine2"                               />
                    <InputBox id="pin" inputType="text"  placeholder="PIN code"      value={this.props.studentToUpdate.pincode}     
                              handleChanges={this.handlePincodeChange}      Name="pincode"     error={this.state.Errpincode} />          
                    <Button buttonName="Edit Student" handleOnClick={this.handleEditStudent} error={this.state.ErrButton}/>
                    <Button buttonName="Back" handleOnClick={this.handleBack}/>
                </form>   
                </div>
            </div>

         </div>
        );
    }
}
export default EditStudent;
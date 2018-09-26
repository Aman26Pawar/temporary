import React from 'react';
import InputBox from './InputBox';
import Button from './Button';
import '../App.css';

class AddNewStudent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={FirstName:" ",LastName:" ",Class:" ",
                    Division:" ",AddressLine1:" ",
                    AddressLine2:" ",pincode:"",firstNameValid:false,
                    lastNameValid:false,
                    divisionValid: false,
                    addressLine1Valid:false,
                    pincodeValid:false,
                    ErrfirstName:" ",ErrlastName:" ",ErrClass:"",Errdivision:" ",
                    ErraddressLine1:" ",Errpincode:"",ErrButton:""
                    }
        this.handleAddStudent=this.handleAddStudent.bind(this);
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
        if(value!=="")
        {
            this.setState({FirstName: value});
            this.setState({ErrfirstName:""});
        }
        else{
            this.setState({ErrfirstName:"*First Name is required"});
        }

    }
    handleLastNameChange(value)
    {
        if(value!=="")
        {
            this.setState({LastName: value});
            this.setState({ErrlastName:""});
        }
        else{
            this.setState({ErrfirstName:"*Last Name is required"});
        }
    }
    handleClassChange(value)
    {
        if(value!=="")
        {
            this.setState({Class: value});
            this.setState({ErrClass:""});
        }
        else{
            this.setState({ErrClass:"*Class is required"});
        }
    }
    handleDivisionChange(value)
    {
        if(value!=="")
        {
            this.setState({Division: value});
            this.setState({Errdivision:""});
        }
        else{
            this.setState({Errdivision:"*Division is required"});
        }
    }
    handleAddressLine1Change(value)
    {
        if(value!=="")
        {
            this.setState({AddressLine1: value});
            this.setState({ErraddressLine1:""});
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
        if(value!=="")
        {
            this.setState({pincode: value});
            this.setState({Errpincode:""});
        }
        else{
            this.setState({Errpincode:"*PIN Code is required"});
        }
    }
    render()
    {
        return(
            <div className="col-75 ">
                <div className="center">
                    <form>
                        <InputBox inputType="text"  placeholder="First Name"    handleChanges={this.handleFirstNameChange}    Name="firstName"   error={this.state.ErrfirstName} /><br></br> 
                        <InputBox inputType="text"  placeholder="Last Name"     handleChanges={this.handleLastNameChange}     Name="lastName"    error={this.state.ErrlastName} /><br></br>           
                        <InputBox inputType="text"  placeholder="Class"         handleChanges={this.handleClassChange}        Name="class"       error={this.state.ErrClass} /><br></br>           
                        <InputBox inputType="text"  placeholder="Division"      handleChanges={this.handleDivisionChange}     Name="division"    error={this.state.Errdivision} /><br></br>           
                        <InputBox inputType="text"  placeholder="Address Line1" handleChanges={this.handleAddressLine1Change} Name="addressLine1"error={this.state.ErraddressLine1} /><br></br>           
                        <InputBox inputType="text"  placeholder="Address Line2" handleChanges={this.handleAddressLine2Change} Name="addressLine2"                                   /><br></br>           
                        <InputBox inputType="text"  placeholder="PIN code"      handleChanges={this.handlePincodeChange}      Name="pincode"     error={this.state.Errpincode} /><br></br>           
                        <Button buttonName="Add Student" handleOnClick={this.handleAddStudent } error={this.state.ErrButton} />
                        <Button buttonName="Back" handleOnClick={this.handleBack } />
                    </form>
                </div>
            </div>
        );
    }
    handleAddStudent()
    {
        const fname = this.state.FirstName;
        const lname = this.state.LastName;
        const classs = this.state.Class;
        const division= this.state.Division;
        const line1 = this.state.AddressLine1;
        const line2 = this.state.AddressLine2;
        const pin = this.state.pincode;

        if(this.state.FirstName!=="" && this.state.LastName!==""&&this.state.Class!=="" && this.state.Division!==""&&this.state.AddressLine1!=="" && this.state.pincode!=="")
        {
           if(
               fetch('http://localhost:8080/addStudent?firstName='+fname+
            '&lastName='+lname+'&TeacherID='+1+'&classs='+classs+'&division='+division+'&line1='+line1 +
            '&line2='+ line2+'&pinCode='+pin,
            {method:'GET',mode:"no-cors"})
            .then(resp => resp)
            .then(findResp => this.setState({data:findResp}))
           ){
            alert("Added "+ this.state.FirstName);
            this.props.history.push('/ListOfStudents');   
           }
            
        }
        else
        {
            this.setState({ErrButton:"Please fill the above fields"})
        }
    }
    handleBack()
    {
        this.props.history.push('/TeacherHome');
    }
}
export default AddNewStudent;
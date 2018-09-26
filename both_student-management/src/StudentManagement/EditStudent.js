import React from 'react';
import InputBox from './InputBox';
import Button from './Button';
import '../App.css';
import ListOfStudents from './ListOfStudents';

class EditStudent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
                studentData:{},
                    studentID:"",FirstName:" ",LastName:" ",Class:" ",
                    Division:" ",AddressLine1:" ",
                    AddressLine2:" ",pincode:"",firstNameValid:false,
                    lastNameValid:false,
                    divisionValid: false,
                    addressLine1Valid:false,
                    pincodeValid:false,
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
        //this.studentToUpdate=this.studentToUpdate.bind(this)
    }

    componentDidMount(){
        //  this.studentToUpdate()
    }
   /*studentToUpdate(student){
        this.setState({studentData:this.props.ListOfStudents.student})
        this.setState({studentID:this.state.student.studentID})
    }*/

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
            this.setState({ErrlastName:"*Last Name is required"});
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
        <ListOfStudents updateStudentIDinEditStudent={this.studentToUpdate}></ListOfStudents>
        return(
            <div className="col-75 ">
            <div className="center">
            <h4> Student To be edit:</h4>  <h2>{this.state.studentData.studentID} </h2>
            </div>
                <div className="center">
                    <form>
                        <InputBox inputType="text"  placeholder="First Name"    handleChanges={this.handleFirstNameChange}    Name="firstName"   error={this.state.ErrfirstName} /><br></br> 
                        <InputBox inputType="text"  placeholder="Last Name"     handleChanges={this.handleLastNameChange}     Name="lastName"    error={this.state.ErrlastName} /><br></br>           
                        <InputBox inputType="text"  placeholder="Class"         handleChanges={this.handleClassChange}        Name="class"       error={this.state.ErrClass} /><br></br>           
                        <InputBox inputType="text"  placeholder="Division"      handleChanges={this.handleDivisionChange}     Name="division"    error={this.state.Errdivision} /><br></br>           
                        <InputBox inputType="text"  placeholder="Address Line1" handleChanges={this.handleAddressLine1Change} Name="addressLine1"error={this.state.ErraddressLine1} /><br></br>           
                        <InputBox inputType="text"  placeholder="Address Line2" handleChanges={this.handleAddressLine2Change} Name="addressLine2"                                   /><br></br>           
                        <InputBox inputType="text"  placeholder="PIN code"      handleChanges={this.handlePincodeChange}      Name="pincode"     error={this.state.Errpincode} /><br></br>           
                        <Button buttonName="Edit Student" handleOnClick={this.handleEditStudent} error={this.state.ErrButton}/>
                        <Button buttonName="Back" handleOnClick={this.handleBack}/>
                    </form>
                </div>
            </div>
        );
    }
    handleEditStudent()
    {
        if(this.state.FirstName!=="" && this.state.LastName!==""&&this.state.Class!=="" && this.state.Division!==""&&this.state.AddressLine1!=="" && this.state.pincode!=="")
        {
            alert("Updated "+ this.state.FirstName);
            this.props.history.push('/ListOfStudents');
        }
        else
        {
            this.setState({ErrButton:"Please fill the above fields"})
        }
    }
    handleBack()
    {
        this.props.history.push('/ListOfStudents');
    }
}
export default EditStudent;
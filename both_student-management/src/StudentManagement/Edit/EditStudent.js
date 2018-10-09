import React from 'react';
import InputBox from '../InputBox';
import Button from '../Components/Button.js';
import ListOfStudents from '../ListOfStudents';
//import {connect} from 'react-redux'
//import ListOfStudents from './ListOfStudents';

class EditStudent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
                    studentID:this.props.studentToUpdate.studentID,
                    FirstName: this.props.studentToUpdate.firstName,
                    LastName: this.props.studentToUpdate.lastName,
                    Class:this.props.studentToUpdate.classs,
                    Division:this.props.studentToUpdate.division,
                    AddressLine1: this.props.studentToUpdate.line1,
                    AddressLine2: this.props.studentToUpdate.line2,
                    pincode: this.props.studentToUpdate.pinCode,
                    firstNameValid:false,
                    lastNameValid:false,
                    divisionValid: false,
                    addressLine1Valid:false,
                    pincodeValid:false,
                    ErrfirstName:" ",ErrlastName:" ",ErrClass:"",Errdivision:" ",
                    ErraddressLine1:" ",Errpincode:"",ErrButton:"",
                    editComplete:false,
                    backPage:false
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

    /*componentWillMount(){
        this.setState({
            studentID:this.props.studentToUpdate.studentID,
            FirstName:this.props.studentToUpdate.firstName
        })
    }*/

    componentDidMount(){
     
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
 
    handleEditStudent()
    {
        const studentForm = document.getSelection['studentEditForm'];
        console.log(studentForm)
        const stuID =this.props.studentToUpdate.studentID
        const tID = this.props.studentToUpdate.teacherID
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
               fetch('http://localhost:8080/updateStudent?id='+stuID+'&firstName='+fname+
            '&lastName='+lname+'&TeacherID='+tID+'&classs='+classs+'&division='+division+'&line1='+line1 +
            '&line2='+ line2+'&pinCode='+pin,
            {method:'POST',mode:"no-cors"})
            .then(resp => resp)
            .then(findResp => this.setState({data:findResp}))

           /* fetch('http://localhost:8080/updateStudent?id='+stuID+'&student='+studentForm,
            {method:'POST',mode:"no-cors"})
            .then(resp => resp)
            .then(findResp => this.setState({data:findResp}))*/
           )
           {
            alert("Updated "+ this.state.FirstName);
            this.setState({editComplete:!this.state.editComplete})  
           }
            
        }
        else
        {
            this.setState({ErrButton:"Please fill the above fields"})
        }
    }

    handleBack()
    {
        //this.props.history.push('/ListOfStudents');
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
            <h4> Student To be edit:</h4> <h2>{this.props.studentToUpdate.studentID} </h2>
            </div>
                <div className="center">
                <form>

                    <InputBox inputType="text"  placeholder="First Name"    value={this.props.studentToUpdate.firstName}    
                              handleChanges={this.handleFirstNameChange}    Name="firstName"   error={this.state.ErrfirstName} /><br></br> 
                    <InputBox inputType="text"  placeholder="Last Name"     value={this.props.studentToUpdate.lastName}     
                              handleChanges={this.handleLastNameChange}     Name="lastName"    error={this.state.ErrlastName} /><br></br>           
                    <InputBox inputType="text"  placeholder="Class"         value={this.props.studentToUpdate.classs}        
                              handleChanges={this.handleClassChange}        Name="class"       error={this.state.ErrClass} /><br></br>           
                    <InputBox inputType="text"  placeholder="Division"      value={this.props.studentToUpdate.divv}     
                              handleChanges={this.handleDivisionChange}     Name="division"    error={this.state.Errdivision} /><br></br>           
                    <InputBox inputType="text"  placeholder="Address Line1" value={this.props.studentToUpdate.line1} 
                              handleChanges={this.handleAddressLine1Change} Name="addressLine1"error={this.state.ErraddressLine1} /><br></br>           
                    <InputBox inputType="text"  placeholder="Address Line2" value={this.props.studentToUpdate.line2} 
                              handleChanges={this.handleAddressLine2Change} Name="addressLine2"                                   /><br></br>           
                    <InputBox inputType="text"  placeholder="PIN code"      value={this.props.studentToUpdate.pinCode}      
                              handleChanges={this.handlePincodeChange}      Name="pincode"     error={this.state.Errpincode} /><br></br>           
                    <Button buttonName="Edit Student"  handleOnClick={this.handleEditStudent} error={this.state.ErrButton}/>
                    <Button buttonName="Back" handleOnClick={this.handleBack}/>
                </form>   
                </div>
            </div>
        );
    }
}
export default EditStudent;
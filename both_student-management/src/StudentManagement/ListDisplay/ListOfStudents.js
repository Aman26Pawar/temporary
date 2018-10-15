import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import '../Buttons/Button.css'
import Button from '../Buttons/Button.js';
import EditStudent from '../Edit/EditStudent.js';
import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { Table } from 'react-bootstrap';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import TeacherHome from '../TeacherHome/TeacherHome';


//import axios from 'axios'

class ListOfStudents extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleBack=this.handleBack.bind(this);
        this.state={
            students:[],
            editClicked: false,
            studentToEdit:{},
            referrer:null,
            referrer1:null,
            studentData:{},
            backCalled:false
        }
    }
  
componentDidMount()
{
    this.setState({teacherId:this.props.teachers.teacherID})
    this.loadStudentsFromServer()
}

loadStudentsFromServer()
{
    fetch('http://localhost:8080/getAllStudent')
    .then(res => res.json())
    .then((rows=[]) => {
        this.setState({ students: rows })
    })
}

handleEditClicked(student){
    console.log("edit clicked....")
    const id = student.studentId;
    const stid=student.teacherId;
    if(this.state.teacherId===stid)
    {
    Axios.get('http://localhost:8080/viewStudentByID?id='+id)
    .then(res=>res)
    .then((dataById={})=>{
    this.setState({studentToEdit:dataById})
    this.setState({referrer:'/ListOfStudents/EditStudent'})
    this.setState({studentData:this.state.studentToEdit.data});
    })
    }
    else
    alert("You can't Edit this student");
}

handleDeleteClicked(student)
{  
    const id = student.studentId;
    const stid=student.teacherId;
    if(this.state.teacherId===stid)
    {
    confirmAlert(
    {
    title: 'Confirm to Delete',
    message: 'Are you sure to do this.',
    buttons: [
    {
    label: 'Yes',
    onClick: () => fetch('http://localhost:8080/deleteStudent?id='+id, {method:'DELETE'})
    .then(res=>this.loadStudentsFromServer())
    },
    {
    label: 'No'
    }
    ]
    })
    }
    else
    alert("You can't Edit this student");
}

handleBack()
{
    this.setState({backCalled:!this.state.backCalled})
}

render()
{
    const {referrer} = this.state;
    const{backCalled}=this.state;
    if (referrer)
    {
        return (<Redirect to={referrer} />,
            <EditStudent studentToUpdate={this.state.studentData}/>);
    }
    if(backCalled) return (<TeacherHome></TeacherHome>)
        return(  
        <div className="StudentList">
        <Table className="center">
        <tbody>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>TeacherID</th>
            <th>class</th>  
            <th>division</th>
            <th>line1</th>
            <th>line2</th>
            <th>pinCode</th>
            <th>operations</th>
        </tr>
        {
                    this.state.students.map((student,index)=>{
              return (
                 <tr key={index}>
                   <td>{student.studentId}</td>
                   <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.teacherId}</td>
                    <td>{student.studentClass}</td>
                    <td>{student.division}</td>
                    <td>{student.addressLine1}</td>
                    <td>{student.addressLine2}</td>
                    <td>{student.pincode}</td>
                    <td>
                    <button className="btn-btn-edit  btn-xs" onClick={() => this.handleEditClicked(student)}>Edit</button>
                    <button className="btn-btn-danger btn-sm" onClick={() => this.handleDeleteClicked(student)}>Delete</button>
                    </td>
                </tr>
                     ) 
                                            })    
         } 
         </tbody>
         </Table> 
        <Button buttonName="Back" handleOnClick={this.handleBack}/>
    </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        teachers:state.LoginReducer[0]
    }
}
export default connect (mapStateToProps) (ListOfStudents);  
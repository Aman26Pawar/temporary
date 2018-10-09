import React from 'react';
//import EditLink from './EditLink';
import { Redirect } from 'react-router-dom';
import '../Buttons/Button.css'
import Button from '../Buttons/Button.js';
import EditStudent from '../Edit/EditStudent.js';
import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 
//import '../App.css';
//import TeacherHome from './TeacherHome';


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
            studentData:{}
        }
    }
  
componentDidMount()
{
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
    const id = student.studentID;
    Axios.get('http://localhost:8080/viewStudentByID?id='+id)
    .then(res=>res)
    .then((dataById={})=>{
        this.setState({studentToEdit:dataById})
        this.setState({studentData:this.state.studentToEdit.data});
        this.setState({referrer:'/ListOfStudents/EditStudent'})
        console.log(this.state.studentToEdit)
        console.log(this.state.studentData)
    })
}

handleDeleteClicked(student)
{  
    const id = student.studentID;
    confirmAlert({
    title: 'Confirm to Delete',
    message: 'Are you sure to do this.',
    buttons: [
    {
        label: 'Yes',
        onClick: () => fetch('http://localhost:8080/deleteStudent?id='+id, {method:'POST'})
        .then(res=>this.loadStudentsFromServer())
    },
    {
        label: 'No'
    }
            ]
    })
}

handleBack()
{
    this.setState({referrer1:'/TeacherHome'})
}

render()
{
    const {referrer} = this.state;
    const{referrer1}=this.state;
    if (referrer)
    {
        return (<Redirect to={referrer} />,
            <EditStudent studentToUpdate={this.state.studentData}/>);
    }
    if(referrer1) return (<Redirect to={referrer1}/>)
        return(  
        <div className="StudentList">
            {/*<TeacherHome></TeacherHome>*/}
        <table className="center">
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
                   <td>{student.studentID}</td>
                   <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.teacherID}</td>
                    <td>{student.classs}</td>
                    <td>{student.divv}</td>
                    <td>{student.line1}</td>
                    <td>{student.line2}</td>
                    <td>{student.pin}</td>
                    <td>
                    <button className="btn-btn-edit  btn-xs" onClick={() => this.handleEditClicked(student)}>Edit</button>
                    <button className="btn-btn-danger btn-sm" onClick={() => this.handleDeleteClicked(student)}>Delete</button>
                    </td>
                </tr>
                     ) 
                                            })    
         } 
         </tbody>
         </table> 
        <Button buttonName="Back" handleOnClick={this.handleBack}/>
    </div>
        );
    }
}
export default ListOfStudents;  
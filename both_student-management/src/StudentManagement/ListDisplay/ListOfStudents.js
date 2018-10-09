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
      this.updateStudentIDinEditStudent=this.updateStudentIDinEditStudent.bind(this)
    }
    handleBack()
    {
        this.setState({referrer1:'/TeacherHome'})
        //this.props.history.push('/TeacherHome');
    }
    componentDidMount(){
        this.loadStudentsFromServer()
        
    }

    loadStudentsFromServer(){
        fetch('http://localhost:8080/getAllStudent')
        .then(res => res.json())
        .then((rows=[]) => {
          this.setState({ students: rows })
        })
       /*let studentsList=[];
        Axios.get('http://localhost:8080/getAllStudent') 
        .then(function (response) {
            studentsList=response.data
            console.log(studentsList)
            response.data.forEach(element => {
                console.log(element);
            });
        });   */    
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
        //this.updateStudentIDinEditStudent(this.state.studentToEdit)
    })
}
updateStudentIDinEditStudent(student){
    console.log(student)

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

   

    render()
    {
        const {referrer} = this.state;
        const{referrer1}=this.state;
    if (referrer) return (<Redirect to={referrer} />,
                 <EditStudent studentToUpdate={this.state.studentData}/>);
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
















/*
<EditStudent studentToUpdate={this.state.studentToEdit.data}/>);
<table className="center">
                     <tbody>           
                         <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>TeacherID</th>
                            <th>class</th>
                            <th>division</th>
                            <th>line1</th>
                            <th>line2</th>
                            <th>pinCode</th>
                        </tr>
                     </tbody>
                     </table> 
 */






    // constructor(props)
    // {
    //     super(props);
    //     this.handleList = this.handleList.bind(this);
    // }
    // handleList()
    // {
    //     var names = [['1','Venu','v c', '9','D','MP,Null stop','pune','780405'],
    //                 ['2','Veag','Kta', '9','A','hp,Swargate','pune','780404'],
    //                 ['3','ragha','Sha', '9','B','LK,Karve road','pune','780801']];
    //     return (
    //         <div >
                
    //         <table>
    //         {
                
    //             names.map(function(name, index) 
    //             {
    //                 return <div> 
    //                         <tr>
    //                             <td>{name[0]}</td>
    //                             <td>{name[1]}</td>
    //                             <td>{name[2]}</td>
    //                             <td>{name[3]}</td>
    //                             <td>{name[4]}</td>
    //                             <td>{name[5]}</td>
    //                             <td>{name[6]}</td>
    //                             <td>{name[7]}</td>
    //                             <td><EditLink></EditLink></td>
    //                             <td><DeleteLink></DeleteLink></td>
    //                         </tr>
    //                       </div>
    //             })
    //         }
    //         </table>
    //     </div>
    //     )
    // }
    // render() {
    // return (
    //         <div>
    //             <center> {this.handleList()} </center>
    //         </div>
    //         );
    //         }



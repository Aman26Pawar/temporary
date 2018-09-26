import React from 'react';
import EditLink from './EditLink';
import EditStudent from './EditStudent'
import { Redirect } from 'react-router-dom';
import './Button.css'
import Button from './Button';

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
            referrer:null
        }
      this.updateStudentIDinEditStudent=this.updateStudentIDinEditStudent.bind(this)
    }
    handleBack()
    {
        this.props.history.push('/TeacherHome');
    }


    componentDidMount(){
        this.loadStudentsFromServer()
    }

    loadStudentsFromServer(){

      fetch('http://localhost:8080/getAllStudent')
        .then(res => res.json())
        .then((rows=[]) => {
          this.setState({ students: rows })
          console.log(this.state.students)
        })

       /*let studentsList=[];
        axios.get('http://localhost:8080/getAllStudent') 
        .then(function (response) {
            studentsList=response.data
            console.log(studentsList)
            response.data.forEach(element => {
                console.log(element);
            });
        });   */    
    }




handleEditClicked(student){
    const id = student.studentID;
    fetch('http://localhost:8080/viewStudentByID?id='+id,{method:'GET'})
    .then(res=>res.json())
    .then((dataById={})=>{
        this.setState({studentToEdit:dataById})
        this.setState({referrer:'/ListOfStudents/EditStudent'})
        this.updateStudentIDinEditStudent(this.state.studentToEdit)
        console.log(this.state.studentToEdit.studentID)
    })
}
updateStudentIDinEditStudent(student){
    console.log(student)

}
handleDeleteClicked(student){
    const id = student.studentID;
    console.log("delete clicked")
    if(
        fetch('http://localhost:8080/deleteStudent?id='+id, {method:'POST',mode:'no-cors'})
    ){
        alert("want to delete " + id + " ????")
    }
}
   

    render()
    {
        const {referrer} = this.state;
        if (referrer) return <Redirect to={referrer} />;
        <EditStudent studentData={this.state.studentToEdit}></EditStudent>
        
        return( 
            <div>
        <table className="center">
        <tbody>
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
                    <button className="btn btn-primary btn-xs" onClick={() => this.handleEditClicked(student)}>Edit</button>
                    <button className="btn btn-primary btn-xs" onClick={() => this.handleDeleteClicked(student)}>Delete</button>
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



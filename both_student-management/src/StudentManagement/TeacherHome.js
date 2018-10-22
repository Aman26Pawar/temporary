import React from 'react';
import Button from "./Button";
import Home from "./Home";
import '../App.css';
//import axios from 'axios';
class TeacherHome extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
          Teachername:"",
          teacherData:[]
          
    };
      this.handleListOfStudents=this.handleListOfStudents.bind(this);
      this.handleNewStudent=this.handleNewStudent.bind(this);
      this.handleLogOut=this.handleLogOut.bind(this);
    }
    render()
    {
        return(
            <div id ="TeacherHome" className="col-75 ">
                <div className="right">  
                    <h2> Name:.... {this.props.teacherData} </h2>
                </div>
                <div className="center">
                    <Home/>
                </div>   
                <form>
                    <Button handleOnClick={this.handleListOfStudents} buttonName="List Of Students"> </Button>
                    <Button handleOnClick={this.handleNewStudent} buttonName="Add New Students"> </Button>
                    <Button handleOnClick={this.handleLogOut} buttonName="Log Out"> </Button>
                </form>
            </div>
        );
    }
    handleListOfStudents()
    {  
        console.log("ListOfStudents hit....")
        this.props.history.push("/ListOfStudents")
       
    }
    handleNewStudent()
    {
           this.props.history.push("/AddNewStudent")
    }
    handleLogOut()
    {
        this.props.history.push("/")
    }
}
export default TeacherHome;
import React from 'react';
import Button from "./Button";
import Home from "./Home";
import '../App.css';
/*import ListOfStudents from './ListOfStudents';
import AddNewStudent from './AddNewStudent'
import Login from './LoginPage';*/
import { Redirect } from 'react-router-dom';
//import axios from 'axios';
class TeacherHome extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
          Teachername:"",
          listOfStudentsCalled:false,
          addNewStudentCalled:false,
          logOutCalled:false,
          referrer:null          
    };
      this.handleListOfStudents=this.handleListOfStudents.bind(this);
      this.handleNewStudent=this.handleNewStudent.bind(this);
      this.handleLogOut=this.handleLogOut.bind(this);
    }

    handleListOfStudents()
    {  
        console.log("ListOfStudents hit....")
        //this.props.history.push("/ListOfStudents")
        //this.setState({listOfStudentsCalled:!this.state.listOfStudentsCalled})
        this.setState({referrer:'/ListOfStudents'})
    }
    handleNewStudent()
    {
        this.setState({referrer:'/AddNewStudent'})
        //this.setState({addNewStudentCalled:!this.state.addNewStudentCalled})
           //this.props.history.push("/AddNewStudent")
    }
    handleLogOut()
    {
        this.setState({referrer:'/'})
        this.setState({logOutCalled:!this.state.logOutCalled})
        //this.props.history.push("/")
    }


    render()
    {
        const{referrer}=this.state
        //const {listOfStudentsCalled}=this.state;
        //const {addNewStudentCalled}=this.state;
        //const {logOutCalled}=this.state;
        if(referrer)
        {
            return <Redirect to={referrer}></Redirect>
        }
        /*if(addNewStudentCalled){
            return <AddNewStudent></AddNewStudent>
        }
        if(logOutCalled){
            return <Login></Login>
        }*/
        return(
            <div id ="TeacherHome" className="col-75 ">
                <div className="right">  
                    <h2> Name:.... {this.props.teacherData.firstName} </h2>
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
  
}
export default TeacherHome;
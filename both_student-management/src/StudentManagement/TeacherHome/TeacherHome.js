import React from 'react';
import Button from "../Buttons/Button.js";
import Home from "./Home";
import AddNewStudent from '../AddUser/AddNewStudent'
import Login from '../Login/LoginPage';
import { Redirect } from 'react-router-dom';
import ListOfStudents from '../ListDisplay/ListOfStudents.js';
//import { Auth } from "aws-amplify";
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

    /*componentDidMount(key){
        this.setState({Teachername:this.props.teacherData.firstName})
        console.log("name is" +this.state.Teachername)
        localStorage.setItem(key,JSON.stringify(this.props.teacherData.firstName))
        console.log(key)
    }*/

    handleListOfStudents()
    {  
        console.log("ListOfStudents hit....")
        //this.props.history.push("/ListOfStudents")
        this.setState({listOfStudentsCalled:!this.state.listOfStudentsCalled})
        //this.setState({referrer:'/ListOfStudents'})
    }
    handleNewStudent()
    {
        //this.setState({referrer:'/AddNewStudent'})
        this.setState({addNewStudentCalled:!this.state.addNewStudentCalled})
           //this.props.history.push("/AddNewStudent")
    }
    handleLogOut = async event =>
    {
        this.setState({logOutCalled:!this.state.logOutCalled})
    }


    render()
    {
        //console.log(localStorage.getItem(validUser))
        const{referrer}=this.state
        const {listOfStudentsCalled}=this.state;
        const {addNewStudentCalled}=this.state;
        const {logOutCalled}=this.state;
        if(referrer)
        {
            return <Redirect to={referrer}></Redirect>
        }
        if(listOfStudentsCalled){
            return <ListOfStudents></ListOfStudents>
        }
        if(addNewStudentCalled){
            return <AddNewStudent teacherId={this.props.teacherData.teacherID}></AddNewStudent>
        }
        if(logOutCalled){
            return <Login></Login>
        }
        return(
            <div id ="TeacherHome" className="col-75 ">
                <div className="right">  
                    <h2> Teacher:{this.props.teacherData.firstName} </h2>
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
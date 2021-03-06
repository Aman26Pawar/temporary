import React from 'react';
import { connect } from 'react-redux'
import Button from "../Buttons/Button.js";
import { Redirect } from 'react-router-dom';

import './TeacherHome.css'

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
        this.setState({referrer:'/TeacherHome/ListOfStudents'})
    }
    handleNewStudent()
    {
        this.setState({referrer:'/AddNewStudent'})
    }
    handleLogOut = async event =>
    {
        const logout = this.props.teachers[0]
        this.props.dispatch({
            type:'LOGOUT',
            logout})
        this.setState({referrer:'/'})
    }

    render()
    {
        const{referrer}=this.state
        if(referrer)
        {
            return <Redirect to={referrer}></Redirect>
        }

        return(
            <div id ="TeacherHomeID" className="TeacherHome ">
                <div className="right">  
                    <h2> Teacher:{this.props.teachers.firstName} {this.props.teachers.lastName}</h2>
                </div>
                <div className="center">
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
const mapStateToProps = (state) => {
    return{
        teachers:state.loginReducer[state.loginReducer.length-1]
    }
}
export default connect (mapStateToProps) (TeacherHome);
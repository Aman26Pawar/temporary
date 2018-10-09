import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import TeacherHome from '../TeacherHome/TeacherHome';
//import {createStore} from 'redux'
//import { Auth } from "aws-amplify";
//import { Cookies } from 'react-cookie'

class Login extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
        validCredentials:false,
        loggedData:[],
        validUser:React.createContext([]),
        error:'',
        hits:null,
        isAuthenticated: false,
        isAuthenticating: true,
        
      }
      this.onLoginClick=this.onLoginClick.bind(this);
      this.checkLoginCredentials= this.checkLoginCredentials.bind(this)
      this.storeCredentials = this.storeCredentials.bind(this)
    }

onLoginClick()
{
    const uname = document.getElementById("userName").value
    const pw =document.getElementById("password").value
    axios.get("http://localhost:8080/viewTeacher",{mode:"no-cors"})
    .then(res=>res)
    .then(row => {
    this.checkLoginCredentials(row.data,uname,pw)
        }) 
}

checkLoginCredentials(fetchedData,uname,pw)
{
    for(let i=0;i<fetchedData.length;i++)
    {
        if(fetchedData[i].userName===uname && fetchedData[i].password===pw)
        {
            this.setState({loggedData:fetchedData[i]})
            this.storeCredentials(this.state.loggedData)
            break;
        }
        else{
            this.setState({error:'invalid user or password...'})
        }
    }
}

storeCredentials(dataTobeStore)
{
    if(dataTobeStore!==undefined){
        const loggedInData = dataTobeStore
        console.log(loggedInData)
        this.props.dispatch({
            type:'ADD_LOGIN',
            loggedInData})
        this.setState({validCredentials:!this.state.validCredentials})
    }
}

    render()
    {      
        if(this.state.validCredentials === true){
            return <TeacherHome />
        }
        return(
        <div id="LoginData" className="LoginPage">
            <label>User Name:</label>
            <input id="userName" type="text"  placeholder="User Name" required></input>
            <br/>
            <label>Password:</label>
            <input id="password" type="password" placeholder="New password" required></input>
            <br/>
            <button onClick={this.onLoginClick}>Login</button><br/><br/>
            <label className="loginError"> {this.state.error} </label> <br/><br/> 
            <a href="/"> Home </a><br/><br/>
            <a href="/Registration">Registration</a>      
        </div>
        )
    }
}

export default connect() (Login)
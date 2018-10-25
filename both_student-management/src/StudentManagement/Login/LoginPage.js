import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import TeacherHome from '../TeacherHome/TeacherHome';
import Button from '../Buttons/Button';
import '../Buttons/Button.css'
import './Login.css'

class Login extends React.Component
{
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
        isAuthenticating: true
      }
      this.onLoginClick=this.onLoginClick.bind(this);
      this.checkLoginCredentials= this.checkLoginCredentials.bind(this)
      this.storeCredentials = this.storeCredentials.bind(this)
      this.handleuserNameChange=this.handleuserNameChange.bind(this)
    }

    onLoginClick()
    {
       /* const userName = document.getElementById("userName").value
        const password = document.getElementById("password").value
        fetch('http://localhost:8080/loginTeacher?userName=' + userName + '&password=' +password,{
                   method:'GET',
                   headers: {
                    'content-type': 'application/json'
                   }
                }) 
            .then(res=>res)
            .then(row => {
                console.log(row.body)
                this.storeCredentials(row)
                })*/

    const loggedTeacher ={
                    userName : document.getElementById("userName").value,
                    password : document.getElementById("password").value
                }
                fetch('http://localhost:8080/login',{
                   method:'POST',
                   headers: {
                    'content-type': 'application/json'
                   },
                   body:JSON.stringify(loggedTeacher)
                }) 
            .then(res=>res)
            .then(row => {
                console.log(row.body)
                this.storeCredentials(row)
             })

       /*const uname = document.getElementById("userName").value
        const pw =document.getElementById("password").value
        axios.get("http://localhost:8080/getAllTeachers",{mode:"no-cors"})
        .then(res=>res)
        .then(row => {
        this.checkLoginCredentials(row.data,uname,pw)
            })*/
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
            else if(uname===''|| pw==='')
            {
                this.setState({error:'Enter username or password...'})
            }
            else
            {
                this.setState({error:'invalid user or password...'})
            }
        }
    }

    storeCredentials(dataTobeStore)
    {
        if(dataTobeStore!==undefined){
            const loggedInData = dataTobeStore
            this.props.dispatch({
                type:'ADD_LOGIN',
                loggedInData})
            this.setState({validCredentials:!this.state.validCredentials})
        }
    }
    handleuserNameChange(e)
    {
        this.setState({username:e.target.value});
    }
    render()
    {      
        if(this.state.validCredentials === true){
            return <TeacherHome />
        }
        return(
        <div id="LoginData" className="LoginPage"><br/>
            <input id="userName" type="text"  placeholder="User Name" required></input>
            <br/><br/>
            <input id="password" type="password" placeholder="Password" required></input>
            <Button buttonName="Log In" handleOnClick={this.onLoginClick} error={this.state.error} ></Button>
            <h4>Not Registered????... <a href="/Registration">Register Here</a>  </h4>   
        </div>
        )
    }
}

export default connect() (Login)
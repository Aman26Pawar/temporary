import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import TeacherHome from '../TeacherHome/TeacherHome';
import Button from '../Buttons/Button';
import '../Buttons/Button.css'
import LoginImg from '../Login/LoginImg'

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
<<<<<<< HEAD
        <div id="LoginData" className="LoginPage"><br/><br/>
            <LoginImg></LoginImg><br/><br/>
            <br/><br/>
=======
        <div id="LoginData" className="LoginPage">
        <form><br/><br/>
>>>>>>> 0f9dc40a765cad5891860e3488ded0a1937eb0a2
            <input id="userName" type="text"  placeholder="User Name" required></input>
            <br/><br/>
            <input id="password" type="password" placeholder="Password" required></input>
            <br/><br/>
            <Button buttonName="Login" handleOnClick={this.onLoginClick}></Button>
            <label className="label"> {this.state.error} </label> <br/><br/> 
<<<<<<< HEAD
            <a href="/Registration">Registration</a>      
=======
            <a href="/Registration">Registration</a>
        </form>      
>>>>>>> 0f9dc40a765cad5891860e3488ded0a1937eb0a2
        </div>
        )
    }
}

export default connect() (Login)
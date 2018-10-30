import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
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
        error:'',
        hits:null
      }
      this.onLoginClick=this.onLoginClick.bind(this);
      this.storeCredentials = this.storeCredentials.bind(this)
      this.handleuserNameChange=this.handleuserNameChange.bind(this)
    }

    onLoginClick()
    {
    const loggedTeacher ={
                    userName : document.getElementById("userName").value,
                    password : document.getElementById("password").value
                }

        if(loggedTeacher.userName !== "" && loggedTeacher.password!=="")        
        { 
            fetch('http://localhost:8080/loginTeacher',{
                method:'POST',
                headers: {
                 'content-type': 'application/json',
                 Authentication : Response,
                },
                body:JSON.stringify(loggedTeacher)
             }) 
         .then(res=>res.json())
         .then(row => {
                console.log(row)
                if(row.status !== 500)
                {
                    this.storeCredentials(row)
                }
                else
                {
                    alert("Invalid UserName or Password")
                }
             })
        }
        else
        {
            alert("please fill all credentials")
        }  
    }

  

    storeCredentials(dataTobeStore)
    {
        if(dataTobeStore!==undefined){
            const loggedInData = dataTobeStore
            this.props.dispatch({
                    type:'ADD_LOGIN',
                    loggedInData})
            window.localStorage.setItem('user',loggedInData)
            console.log(localStorage.getItem('user'))
            this.setState({referrer:'/TeacherHome'})
        }
    }
    handleuserNameChange(e)
    {
        this.setState({username:e.target.value});
    }
    render()
    {  
        const {referrer} = this.state;
        if (referrer) return (<Redirect to={referrer} />)    
        if(this.state.validCredentials === true){
            return <TeacherHome />
        }
        return(
        <div id="LoginData" className="LoginPage"><br/>
            <input id="userName" type="text" size="18"  placeholder="User Name" required></input>
            <br/><br/>
            <input id="password" type="password" size="18" placeholder="Password" required></input>
            <br/>
            <Button buttonName="Log In" handleOnClick={this.onLoginClick} error={this.state.error} ></Button>
            <h4>Not Registered????... <a href="/Registration">Register Here</a>  </h4>   
        </div>
        )
    }
}

export default connect() (Login)
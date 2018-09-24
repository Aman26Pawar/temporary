import React from 'react';

export default class Login extends React.Component{
    constructor(props)
    {
      super(props);
      this.onLoginClick=this.onLoginClick.bind(this);
    }
   
    render()
    {
        return(
        <div className="LoginPage">
                    <label>User Name:</label>
                    <input id="userName" type="text"  placeholder="User Name"></input>
                     <br/>
                    <label>Password:</label>
                    <input id="password" type="password" placeholder="New password"></input>
                    <br/>
                    <button onClick={this.onLoginClick}>Login</button><br/><br/>
                    <a href="/"> Home </a><br/><br/>
                    <a href="/Registration">Registration</a>
                  
        </div>
        )
    }
    onLoginClick()
    {
        if(
            fetch("http://localhost:8080/viewTeacher",{method:'POST', mode:'no-cors',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }})
            .then(res => res)
            .then((resJson)=>{
            return resJson.teachers;
                })
            ){ 
        this.props.history.push("/TeacherHome")
        }
    }
    onSignUpClick()
    {
        this.props.history.push("/Registration")
    }
}
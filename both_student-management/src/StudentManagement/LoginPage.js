import React from 'react';
import axios from 'axios'

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
        //const uname = document.getElementById("userName")
        //const pw =document.getElementById("password")
        axios.get("http://localhost:8080/viewTeacher",{method:'GET', mode:'no-cors',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }})
        .then(res=>res)
        /*.then(row => {
                    for(let i=0;i<row.data.length;i++)
                        {
                            console.log(i + " "+row.data[i])
                            for(let j=0;j<row.data[i].size;j++)
                            {
                                console.log((row.data[i]).get[2])
                                if(row.data[i][j]===uname && row.data[i][j]===pw)
                                 {
                                    console.log(row.data[i])
                                    this.props.history.push("/TeacherHome")
                                 }
                            }      
                        }
                        this.props.history.push("/TeacherHome")
                     console.log(row.data)
                     }
            )*/
            this.props.history.push("/TeacherHome")
      
    }
    onSignUpClick()
    {
        this.props.history.push("/Registration")
    }
}
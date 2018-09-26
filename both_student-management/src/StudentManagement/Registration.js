import React,{Component} from 'react'
import SignUpForm from './SignUpForm'
//import mysql from 'mysql'

export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            FirstName:'',
            LastName:'',
            userNm:'',
            passWord:'',
            msgErr:'Not registered???',
            fields:{},
            formErrors:{FirstName:'',LastName:'',userNm:'',passWord:''},
            formValid:false,
            data:[],
            
        
        }
    }
  

    onSubmitClick   =   ()  =>{
        const fname = document.getElementById("name").value;
        const lname = document.getElementById("lastName").value;
        const uname = document.getElementById("user").value;
        const pw = document.getElementById("pass_word").value;
       if(
        fetch("http://localhost:8080/addTeacher?firstName="+fname+"&lastName="+lname+
        "&userName="+uname+"&password="+pw)
       ){
           alert("New teacher added...")
       }
    }
    render(){
        return(
                <div>
                    <SignUpForm onSubmitClick={this.onSubmitClick}></SignUpForm>
                </div>
        )
    }
}

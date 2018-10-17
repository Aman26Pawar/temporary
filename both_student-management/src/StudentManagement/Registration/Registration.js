import React,{Component} from 'react'
import SignUpForm from './SignUpForm'

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
            validRegistration: false
        }
    }
  

    onSubmitClick   =   ()  =>{
        console.log("sign up clicked...")
        const newTeacher=
        {
            fname : document.getElementById("name").value,
            lname : document.getElementById("lastName").value,
            uname : document.getElementById("user").value,
            pw : document.getElementById("pass_word").value
        }
    
       if(
        fetch("http://localhost:8080/addTeacher/",{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTeacher)
        })
       ){
           alert("New teacher added...")
           this.props.history.push('/')
       }
    }
    render(){
        return(
                <div className="RegistrationRender">
                    <SignUpForm onSubmitClick={this.onSubmitClick}></SignUpForm>
                </div>
        )
    }
}

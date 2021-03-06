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
            firstName : document.getElementById("name").value,
            lastName : document.getElementById("lastName").value,
            userName : document.getElementById("user").value,
            password : document.getElementById("pass_word").value
        }
    
        fetch("http://localhost:8080/addTeacher/",{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTeacher)
        })
        .then(res=>res)
            .then(row => {
                console.log(row.status)
                if(row.status===200)
                {
                    alert("New teacher added...")
                    this.props.history.push('/')
                }
                else
                {
                    alert("username not available")
                }
                })
       
    }
    render(){
        return(
                <div className="RegistrationRender">
                    <SignUpForm onSubmitClick={this.onSubmitClick}></SignUpForm>
                </div>
        )
    }
}

import React,{Component} from 'react'

export default class DemoForm extends Component{
    render(){
        return(
            <div>
                <h2>Register here</h2>
                    <form className="RegistrationPage" action="" method="GET">
                        <div className={`form-group`}>
                            <label htmlFor="_FirstName">First Name: </label>
                            <input id="name" type="text" size="15" placeholder="First Name" required/>                           
                        </div>
                        <div className={`form-group`}>
                        <label>Last Name: </label>
                                <input id="lastName" type="text" size="15" placeholder="last name" required />
                        </div>
                        <div className={`form-group`}>      
                        <label>Password: </label>
                                <input id="pass_word" type="password" size="15" placeholder="New password" required/>
                        </div>
                        <div className={`form-group`}>
                        <label>User Name:</label>
                                <input id="user" type="text" size="15" placeholder="User Name" required/>
                        </div>
                        <button  value="submit"  onClick={this.props.onSubmitClick}>Submit</button>
                    </form>
            </div>         
        );
    }
}
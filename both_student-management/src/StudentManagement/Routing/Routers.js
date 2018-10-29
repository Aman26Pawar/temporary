import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Registration from '../Registration/Registration.js'
import Login from '../Login/LoginPage.js'
import TeacherHome from '../TeacherHome/TeacherHome.js'
import ListOfStudents from '../ListDisplay/ListOfStudents.js'
import AddNewStudent from '../AddUser/AddNewStudent.js'
import EditStudent from '../Edit/EditStudent.js'


export default class Routers extends React.Component
{
    render()
    {
        return(
            <Router>
            <div>
                <Switch>   
                <Route exact path='/' component={Login} />   
                <Route exact path='/Registration' component={Registration} />
                <Route exact path='/TeacherHome' component={TeacherHome}/>     
                <Route exact path='/TeacherHome/ListOfStudents' component={ListOfStudents} />
                <Route exact path='/AddNewStudent' component={AddNewStudent} />
                <Route exact path="/ListOfStudents/EditStudent" component={EditStudent }/>
                </Switch>
            </div>
            </Router>
        )
    
    }

}
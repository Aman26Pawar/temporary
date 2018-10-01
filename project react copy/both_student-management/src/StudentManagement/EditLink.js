import React from 'react';
//import Button from './Button'

class EditLink extends React.Component
{
    constructor(props){
        super(props);
        this.state={
                selectedStudentID:''
        }
        this.handleEdit=this.handleEdit.bind(this)
    }

    handleEdit(){
        this.props.history.push('/EditStudent')
        
    }
    render()
    {
        return(
                <div>
                <a href="/ListOfStudents/EditStudent" onClick={this.handleEdit}> Edit </a>
                <a href="/ListOfStudents/DeleteStudent">Delete</a>
                </div>
        );
    }
}
export default EditLink;
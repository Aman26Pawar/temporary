import React from 'react';

class DeleteStudent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleBack=this.handleBack.bind(this);
    }
    handleBack()
    {
        this.props.history.push('/ListOfStudents');
    }
    render()
    {
        return(
            <div>
                {alert("Student Deleted")}
                {this.handleBack()} 
                </div>
        );
    }
}
export default DeleteStudent;
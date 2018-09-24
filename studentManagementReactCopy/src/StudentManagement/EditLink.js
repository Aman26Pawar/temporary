import React from 'react';

class EditLink extends React.Component
{
 
    render()
    {
        return(
                <div>
                        <a href="/ListOfStudents/EditStudent"> Edit </a><br/> <br/>
                        <a href="/ListOfStudents/DeleteStudent">Delete</a>
                </div>
        );
    }
}
export default EditLink;
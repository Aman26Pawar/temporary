import React from 'react';
import EditLink from './EditLink';
import './Button.css'
import Button from './Button';

class ListOfStudents extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleBack=this.handleBack.bind(this);
        this.state={
            students:[],

        }
    }
    handleBack()
    {
        this.props.history.push('/TeacherHome');
    }


    componentDidMount(){
        this.loadStudentsFromServer()
    }

    loadStudentsFromServer(){
        fetch('http://localhost:8080/getAllStudent',{method:'GET',mode:'no-cors'})
        .then(resp => resp)
        .then(findResp => this.setState({students:findResp}));
    }

   

    render()
    {
        const buttons = [];
        buttons.push(<EditLink></EditLink>)
        buttons.push(<Button buttonName="Back" handleOnClick={this.handleBack}/>)
        return( 
            <div> 
             {buttons}
            </div>
        );
    }
}
export default ListOfStudents;  
























    // constructor(props)
    // {
    //     super(props);
    //     this.handleList = this.handleList.bind(this);
    // }
    // handleList()
    // {
    //     var names = [['1','Venu','v c', '9','D','MP,Null stop','pune','780405'],
    //                 ['2','Veag','Kta', '9','A','hp,Swargate','pune','780404'],
    //                 ['3','ragha','Sha', '9','B','LK,Karve road','pune','780801']];
    //     return (
    //         <div >
                
    //         <table>
    //         {
                
    //             names.map(function(name, index) 
    //             {
    //                 return <div> 
    //                         <tr>
    //                             <td>{name[0]}</td>
    //                             <td>{name[1]}</td>
    //                             <td>{name[2]}</td>
    //                             <td>{name[3]}</td>
    //                             <td>{name[4]}</td>
    //                             <td>{name[5]}</td>
    //                             <td>{name[6]}</td>
    //                             <td>{name[7]}</td>
    //                             <td><EditLink></EditLink></td>
    //                             <td><DeleteLink></DeleteLink></td>
    //                         </tr>
    //                       </div>
    //             })
    //         }
    //         </table>
    //     </div>
    //     )
    // }
    // render() {
    // return (
    //         <div>
    //             <center> {this.handleList()} </center>
    //         </div>
    //         );
    //         }



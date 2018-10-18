import React from 'react';
import img2 from '../Login/img2.jpg';
import './Login.css'

class LoginImg extends  React.Component
{
    render()
    {
        return(
            <div className='LoginImg' >
                <img src={img2} alt='icon' />
            </div>
        );
    }
}
export default LoginImg;
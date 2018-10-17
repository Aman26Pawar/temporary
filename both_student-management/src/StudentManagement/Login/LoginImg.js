import React from 'react';
import img2 from '../Login/img2.jpg';

class LoginImg extends  React.Component
{
    render()
    {
        return(
            <div >
                <img src={img2} width="400" height="200" alt='icon' />
            </div>
        );
    }
}
export default LoginImg;
import React from 'react';
import img1 from './img1.jpg';

class Home extends  React.Component
{
    render()
    {
        return(
            <div>
                <img src={img1} width="400" height="200" alt='icon' />
            </div>
        );
    }
}
export default Home;
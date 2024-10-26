import React from 'react';
import {Button} from 'antd'; 
import emp from './emp.jpeg';
import './Welcome.css';
function Welcome(){
    return(
        <div>
            <div className="container">
                <div className="left">
                    <h1 className="abc">Welcome to Lytis Softwares</h1>
                    <h2 className="c">Your Trusted Partner in IT Solutions</h2>
                    <p className="description">At Lytis Softwares, we are dedicated to transforming your ideas into innovative digital solutions. Based in India, we specialize in a comprehensive range of services tailored to meet the unique needs of your business.</p>
                    <Button type='primary' size='large' variant='solid'>Read More</Button>
                </div>
                <div className="right">
                    <img src={emp} alt="emp" />
                </div>
                </div>
      </div>
    )
}
export default Welcome

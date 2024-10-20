import React from 'react';
import {Flex,Button} from 'antd'; 
//import { Link } from 'react-router-dom';
import emp from './emp.jpeg';
import './Welcome.css';
function Welcome(){
    return(
        <div>
            <Flex>
                <div className="head">
                    <b align="left"><h1 className="abc">Welcome to Lytis Softwares </h1></b>
                    <h1 className="c" align="left">Your Trusted Partner in IT Solutions</h1>
                    <p align="left">At Lytis Softwares, we are dedicated to transforming your ideas into innovative digital solutions.Based in India, we specialize in a comprehensive range of services tailored to meet the unique needs of your business.</p>
                    <Button type='primary' size='large' variant='solid'>ReadMore</Button>
                    <div className="ab"><img src={emp} align="right" width="600" height="500" alt="emp"></img></div>
                </div>
            </Flex>
      </div>
    )
}
export default Welcome

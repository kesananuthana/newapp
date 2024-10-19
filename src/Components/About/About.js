import { Flex,Button } from 'antd';
import React from 'react';
import newpic from './About.jpeg';
import './About.css';
export default function About(){
    return(
        <div>
            <Flex>
                <div className="about">
                    <div className="about-us">
                        <img src={newpic} align="left" width="500" height="400" alt="emp1"></img>
                    </div>
                </div>
                <div className="us">
                    <h1>About us</h1>
                    <div className="aboutus">
                    <p>Lytis Software Private Limited is an Indian-based software development and IT services company, incorporated on November 10, 2022, with its headquarters in Rajasthan, India. 
                        As a privately held company, Lytis specializes in custom software development, web development, mobile app development, and IT consulting, catering to diverse client needs.</p>
                    <div className="learn"><Button type='primary' size='large'>LearnMore</Button></div>
                    </div>
                </div>
            </Flex>
        </div>
    )
}

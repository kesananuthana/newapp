import { Flex,Button } from 'antd';
import React from 'react';
import newpic from './About.jpeg';
import './About.css';
export default function About(){
    return(
        <div>
            <Flex className="container">
                <div className="left-us">
                    <img src={newpic} alt="emp1" />
                </div>
                <div className="right-about">
                    <h1>About us</h1>
                    <p>
                    Lytis Software Private Limited is an Indian-based software development and IT services company, incorporated on November 10, 2022, with its headquarters in Rajasthan, India. As a privately held company, Lytis specializes in custom software development, web development, mobile app development, and IT consulting, catering to diverse client needs.
                    </p>
                    <div className="learn">
                        <Button type='primary' size='large'>Learn More</Button>
                    </div>
                </div>
            </Flex>
        </div>
    )
}

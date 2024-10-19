import React from 'react';
import {Button,Form} from 'antd';
import './Contact.css';
 export default function Contact(){
    return (
        <div>
            <div className="contactus">
                <div className="info">
                    <h2>Contact information</h2>
                    <p>If you have any queries please reach out to us using the information provided.We are here to help.</p>
                    <h3 style={{color:"black"}}>CEO:</h3>
                    <p>Aastha Jain</p>
                    <h3 style={{color:"black"}}>Email:</h3>
                    <p>lytisindia@protonmail.com</p>
                </div>
            </div>
            <div className="contact-img">
                <div className="contact-form">
                    <h1>Contact us</h1>
                    <Form>
                        <table>
                            <tr>
                            <td><input type="text" placeholder="Name" /></td></tr>
                            <tr>
                            <td><input type="email" placeholder="Email" /></td></tr>
                            <tr><td><textarea placeholder="Message"></textarea></td></tr>
                            <Button type='primary' size='large'>Send</Button>
                        </table>
                    </Form>
                </div>
            </div>
        </div>
    )
}
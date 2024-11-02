import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {firestore} from './firebase';
import './Contact.css';
 export default function Contact(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(name,email,message);
        firestore.collection("Information").add({
            name,
            email,
            message
        })
        .then(()=>{
            alert("Message send succesfully");
        })
        .catch((error)=>console.error("Error submitting data",error));
    };
    return (
        <div>
            <div className="contactus">
                <div className="left-contact">
                    <div className="info">
                    <h2>Contact Information</h2>
                    <p>
                        If you have any queries, please reach out to us using the information provided. We are here to help.
                    </p>
                    <h3 style={{ color: "black" }}>CEO:</h3>
                    <p>Aastha Jain</p>
                    <h3 style={{ color: "black" }}>Email:</h3>
                    <p>lytisindia@protonmail.com</p>
                </div>
                <div className='connect'>
                    <h3 style={{ color: "black" }}>Connect with us</h3>
                    <div className='icon'>
                        <FacebookRoundedIcon style={{ color: 'blue' }} />
                        <TwitterIcon style={{ color: 'darkblue' }} />
                        <InstagramIcon style={{ color: '#E1306C' }} />
                        <LinkedInIcon style={{ color: '#0077B5' }} />
                    </div>
                </div>
            </div>
            <div className="right-form">
                <div className="contact-form">
                    <h1 style={{color:'White'}}>Contact Us</h1>
                    <form method="post" onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <td>
                                    <input type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea placeholder='Your Message' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Button variant="contained" endIcon={<SendIcon />} size='large' type='primary' className='b'>Send</Button>
                                </td>
                            </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
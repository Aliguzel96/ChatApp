import React from 'react';
import Scroll2Button from 'react-scroll-to-bottom';
import './Messages.css';
import Message from '../Message/Message';

const Messages = ({messages, name}) => (
    
   <Scroll2Button className="messages">
       {messages.map((message, i) => <div key={i}><Message message={message} name={name}></Message></div>)}
   </Scroll2Button>




)

export default Messages;
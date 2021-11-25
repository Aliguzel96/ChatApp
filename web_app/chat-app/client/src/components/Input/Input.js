import React from 'react';

import './Input.css';

const Input = ({message, setMessage, sendMessage}) => (
    
    <form className="form">
        @csrf
        <input className="input" type="text" placeholder="Mesajınızı giriniz..." value={message} onChange={(event) => setMessage(event.target.value)} onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null }>

        </input>
            <button className="sendButton" onClick={(event) => sendMessage(event)}>Gönder</button>
        
    </form>




)

export default Input;
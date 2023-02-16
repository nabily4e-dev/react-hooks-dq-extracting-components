import React from "react";

// import {messages} from "../data/data";

function Messages(props) {
    return (
        <main>
            <h2>Messages</h2>
            <section className="messages">
                <ul>
                    {props.messages.map((message) => (
                        <li className={`message ${message.type}`} key={message.id}>
                            <div className="icon">{message.icon}</div>
                            <span className="content">{message.content}</span>
                        </li>
                    ))}
                </ul>
                <form className="message-form">
                    <input placeholder="Type a message..."/>
                </form>
            </section>
        </main>
    )
}

export default Messages;
import React from "react";
// import {contacts} from '../data/data'
function Contacts(props) {
    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {props.contacts.map((contact) => (
                    <li key={contact.id} className="contact">
                        <div className="icon">{contact.icon}</div>
                        {contact.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Contacts;
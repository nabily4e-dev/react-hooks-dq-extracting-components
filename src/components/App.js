import React from "react";
import Contacts from "./Contacts";
import Messages from "./Messages";
import { contacts, messages } from "../data";

function App() {
  return (
    <div className="app">
      <Contacts contacts={contacts} />
      <Messages messages={messages} />
    </div>
  );
}

export default App;

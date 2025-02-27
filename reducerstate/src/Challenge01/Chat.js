import { useState } from 'react';

export default function Chat({
  contact,
  message,
  dispatch
}) {
    function onClick() {
        alert(message + " " + contact.email)
        dispatch({
            type:"edited_message",
            message:""
        })
    }
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          dispatch({
            type:"edited_message",
            message:e.target.value
          })
        }}
      />
      <br />
      <button onClick={onClick}>Send to {contact.email}</button>
    </section>
  );
}

import { useState } from "react";

export default function EditProfile() {
    const [isFalse,setIsFalse] = useState(false);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');
    return (
      <form onSubmit={e => {
          e.preventDefault();
          setIsFalse(!isFalse)
      }}
      >
        <label>
        First name:{''}{isFalse ?   (<b>{firstName}</b>) : 
        (<input
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />)}
        </label>
        <label>
        Last name:{' '}
        {isFalse ?  (
            <b>{lastName}</b>
        ) : (<input
            value={lastName}
            onChange={e => {
                setLastName(e.target.value)
            }}
        />)}
        </label>
        <button type="submit">
          {isFalse ? 'Save' : 'Edit'} Profile
        </button>
        <p><i>Hello, {firstName} {lastName}!</i></p>
      </form>
    );
  }
  
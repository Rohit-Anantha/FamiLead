import React, { Component, useState, useRef } from 'react';
// import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDhtzd3AtUln5CG_N3PXysa1bBcJMcwyrY",
  authDomain: "familead-d41ef.firebaseapp.com",
  projectId: "familead-d41ef",
  storageBucket: "familead-d41ef.appspot.com",
  messagingSenderId: "988772516971",
  appId: "1:988772516971:web:5238ebb86a2260d1755d2e",
  measurementId: "G-PCM6L739PB"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App">

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut}>Sign Out</button>
  )
}

function ChatRoom() {
  const dummy = useRef();

  const eventsRef = firestore.collection('events');
  const query = eventsRef.orderBy('createdAt').limit(25);

  const [events] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await eventsRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');

    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <main>

        {events && events.map(msg => <ChatMessage key={msg.id} events={msg} />)}
        <div ref={dummy}>
        </div>
      </main>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </>
  )

}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.events;

  const events = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={'message $ {messageClass}'}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  )
}

export default App;
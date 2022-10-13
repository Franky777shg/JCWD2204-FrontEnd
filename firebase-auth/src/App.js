import { useRef, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});

  const emailLoginRef = useRef();
  const passLoginRef = useRef();
  const emailRegRef = useRef();
  const passRegRef = useRef();

  const onRegister = async () => {
    try {
      // console.log(emailRegRef.current.value);
      // console.log(passRegRef.current.value);
      createUserWithEmailAndPassword(
        auth,
        emailRegRef.current.value,
        passRegRef.current.value
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onLogin = () => {
    try {
      signInWithEmailAndPassword(
        auth,
        emailLoginRef.current.value,
        passLoginRef.current.value
      );
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(auth, (userFromFirebase) => {
    // console.log(user);
    setUser(userFromFirebase);
  });

  return (
    <div className="p-5">
      <Form.Label>Register</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>email and password</InputGroup.Text>
        <Form.Control ref={emailRegRef} />
        <Form.Control ref={passRegRef} />
      </InputGroup>
      <Button className="mb-3" onClick={onRegister}>
        Register
      </Button>
      <br />
      <Form.Label>Login</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>email and password</InputGroup.Text>
        <Form.Control aria-label="First name" ref={emailLoginRef} />
        <Form.Control aria-label="Last name" ref={passLoginRef} />
      </InputGroup>
      <Button className="mb-3" onClick={onLogin}>
        Login
      </Button>
      <h1>User Active: {user?.email}</h1>
      <Button className="mb-3" onClick={() => signOut(auth)}>
        Log Out
      </Button>
      <br />
      <Button className="mb-3" onClick={() => signInWithPopup(auth, provider)}>
        Login With Google
      </Button>
    </div>
  );
}

export default App;

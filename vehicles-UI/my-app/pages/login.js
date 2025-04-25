import { Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { authenticateUser } from "@/lib/authenticate";
import { useRouter } from 'next/router';


export default function Login(props){

  const [ userName, setUserName ] = useState('');  // here we'll interpret with the userName
  const [ password, setPassword ] = useState('');
  const [ warning, setWarning ] = useState('');  // here we'll set the Alert under Button in case wrong userName/password input
  const router = useRouter();  // here we'll set a router to push into a specific path after successful login from user

  async function handleSubmit(e) {
    e.preventDefault();  // this will not refresh the page on each submit
    console.log(`Form Submitted:  UserName:${userName}, Password: ${password}`);  // here we'll read the user's input in console
    try {
      await authenticateUser(userName, password);
      router.push('/vehicles');  // here it'll push to vehicles.js page.
    } catch(err) {
      //console.log(err);
      setWarning(err.message);
    }
  };

  return (
    <>
      <Card bg="light">
        <Card.Body><h2>Login</h2>Enter your login information below:</Card.Body>
      </Card>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User:</Form.Label><Form.Control value={userName} onChange={e=>{setUserName(e.target.value)}} type="text" id="userName" name="userName" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label><Form.Control value={password} onChange={e=>{setPassword(e.target.value)}} type="password" id="password" name="password" />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">Login</Button> <br /><br />
        {warning && <Alert variant="danger">{warning}</Alert>}
      </Form>
    </>
  );
}
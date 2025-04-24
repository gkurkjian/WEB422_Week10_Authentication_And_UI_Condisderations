import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";


export default function Login(props){

  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSubmit(e) {
    e.preventDefault();  // this will not refresh the page on each submit
    console.log(`Form Submitted:  UserName:${userName}, Password: ${password}`);  // here we'll read the user's input in console
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
        <Button variant="primary" className="pull-right" type="submit">Login</Button>
      </Form>
    </>
  );
}
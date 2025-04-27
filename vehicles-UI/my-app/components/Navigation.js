// import { Container, Navbar, Nav } from "react-bootstrap";
// import Link from 'next/link';
// 
// export default function Navigation(props) {
// 
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Link href="/" passHref legacyBehavior><Navbar.Brand >Vehicles UI</Navbar.Brand></Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Link href="/" passHref legacyBehavior><Nav.Link >Home</Nav.Link></Link>
//             <Link href="/vehicles" passHref legacyBehavior><Nav.Link>Vehicles</Nav.Link></Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// This version it'll not cause of from hydration
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
import { readToken, removeToken } from "@/lib/authenticate";

export default function Navigation(props) {

  const router = useRouter();
  let token = readToken();

  function logout() {
    removeToken();
    router.push("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">
          Vehicles UI {token && <>- Welcome {token.userName}</>}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            {token && <Nav.Link as={Link} href="/vehicles">Vehicles</Nav.Link>}
          </Nav>

          <Nav className="ml-auto">
            {!token && <Nav.Link as={Link} href="/login">Login</Nav.Link>}
            {token && <Nav.Link onClick={logout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

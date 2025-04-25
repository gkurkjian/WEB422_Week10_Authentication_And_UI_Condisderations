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

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} href="/">Vehicles UI</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/vehicles">Vehicles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import './Navbar.css';
import { Container, Nav, Row, Col } from "react-bootstrap";

const Navbar = () => {
    return (
        <Nav className="navbar">
            <Container className="d-block" >
                <Row>
                    <Col sm={9}>
                    <p className="font-face-lylas">Lost in Translation</p>
                    </Col>
                    <Col sm={3}>
                    <p className="SanchezRegular">Login</p>
                    </Col>
                </Row>

            </Container>

        </Nav>
    );
}

export default Navbar;
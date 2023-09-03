import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap'; // Rename the imported Navbar
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const path = useLocation().pathname

    return (
        <>
            <BootstrapNavbar fixed='top' collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container fluid className='px-5'>
                    <BootstrapNavbar.Brand href="/" >
                        <h1 className='m-0 p-0' style={{ fontSize: "24px",fontWeight:"bold",textTransform:"uppercase" }}> CoffeeShop </h1>
                    </BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className='px-3' active={path === '/'} style={{fontSize:"20px"}}>Home</Nav.Link>
                            <Nav.Link href="/menu" active={path === '/menu'} style={{fontSize:"20px"}}>Menu</Nav.Link>
                            <Nav.Link href="/orders" active={path === '/orders'} style={{fontSize:"20px"}}>Orders</Nav.Link>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
        </>

    )
}

export default Navbar
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Explicit, Bootstrap, PlusCircle } from "react-bootstrap-icons";

const NavBar = () => {
	return (
		<Navbar
			expand="lg"
			className="blog-navbar bg-success-subtle" /* fixed="top" */
		>
			<Container className="justify-content-between">
				<Navbar.Brand /* as={Link} to="/" */>
					{" "}
					<Explicit size={30} />
					pi
					<Bootstrap size={30} />
					log!
					{/* <img className="blog-navbar-brand" alt="logo" src={logo} /> */}
				</Navbar.Brand>

				<Button
					/* as={Link} to="/new" */ className="blog-navbar-add-button bg-success"
				>
					{" "}
					<PlusCircle className="mx-1" />
					Nuovo Articolo
				</Button>
			</Container>
		</Navbar>
	);
};

export default NavBar;

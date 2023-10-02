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
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-plus-lg"
						viewBox="0 0 16 16"
					>
						<path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
					</svg> */}
					Nuovo Articolo
				</Button>
			</Container>
		</Navbar>
	);
};

export default NavBar;

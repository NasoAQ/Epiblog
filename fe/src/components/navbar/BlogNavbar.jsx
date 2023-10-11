import React from "react";
import { Container, Navbar, Col } from "react-bootstrap";
import {
	ExplicitFill,
	BootstrapFill,
	ExclamationSquareFill,
} from "react-bootstrap-icons";

const NavBar = () => {
	return (
		<Navbar
			expand="lg"
			className="blog-navbar bg-success-subtle" /* fixed="top" */
		>
			<Container className="justify-content-between">
				<Navbar.Brand className="d-flex" /* as={Link} to="/" */>
					<ExplicitFill size={30} color="#198754" />
					pi
					<BootstrapFill size={30} color="#198754" />
					log
					<ExclamationSquareFill size={30} color="#198754" />
				</Navbar.Brand>
				<Col className="col-6">
					<input
						type="text"
						placeholder="Search post..."
						//value={searchText}
						/* onChange={handleSearchChange} */
						className="form-control my-3 text-center"
					/>
				</Col>
			</Container>
		</Navbar>
	);
};

export default NavBar;

import { nanoid } from "nanoid";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CardPost = ({ posts }) => {
	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Img variant="top" src={posts.cover} />
						<Card.Body>
							<Card.Tiitle>{posts.title}</Card.Tiitle>
							<Card.Text>{posts.content}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default CardPost;

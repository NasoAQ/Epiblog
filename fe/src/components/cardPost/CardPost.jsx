import React from "react";
import "../cardPost/style.css";
import { Card, Col, Image } from "react-bootstrap";

const CardPost = ({ posts }) => {
	return (
		<>
			{posts &&
				posts.posts?.map((post, i) => {
					const updateDate = new Date(post.updateAt);
					const updateDateStr = updateDate.toLocaleString();
					const createDate = new Date(post.createdAt);
					const createDateStr = createDate.toLocaleString();
					return (
						<Col key={i}>
							<Card className="h-100">
								<Card.Header className="d-flex align-items-center">
									<Image
										className="post-author"
										src={post.author.avatar}
										roundedCircle
										thumbnail
									/>
									<Card.Subtitle>{post.author.name}</Card.Subtitle>
								</Card.Header>
								<Card.Img className="rounded-0" src={post.cover} />
								<Card.Body>
									<Card.Title>{post.title}</Card.Title>
									<Card.Text>{post.category}</Card.Text>
									<Card.Text>{post.content}</Card.Text>
								</Card.Body>
								<Card.Footer className="text-muted">
									{/* Created at {createDateStr} */}
									{post.updateAt > post.createAt ? (
										<>Update at: {updateDateStr}</>
									) : (
										<>Update at {createDateStr}</>
									)}
								</Card.Footer>
							</Card>
						</Col>
					);
				})}
		</>
	);
};

export default CardPost;

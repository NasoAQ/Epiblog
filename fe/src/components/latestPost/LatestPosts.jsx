import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import CardPost from "../cardPost/CardPost";
import AxiosClient from "../../client/client";
const client = new AxiosClient();

const LatestPosts = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [posts, setPosts] = useState([]);
	console.log(posts);

	const getPosts = async () => {
		try {
			const response = await client.get(`/posts?page=${currentPage}`);
			setPosts(response);
		} catch (e) {
			console.log(e);
		}
	};

	const handlePagination = value => {
		setCurrentPage(value);
	};

	useEffect(() => {
		getPosts();
	}, [currentPage]);

	return (
		<Container className="mt-3">
			<Row>
				<CardPost posts={posts} />
				<div className="mt-3">
					<ResponsivePagination
						current={currentPage}
						total={posts && posts.totalPages}
						onPageChange={handlePagination}
					/>
				</div>
			</Row>
		</Container>
	);
};

export default LatestPosts;

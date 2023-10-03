import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const LatestPosts = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [posts, setPosts] = useState([]);
	console.log(posts);

	const getPosts = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_SERVER_BASE_URL}/posts?page=${currentPage}`
			);
			const data = await response.json();
			setPosts(data);
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
		<div>
			{posts &&
				posts.posts?.map((post, i) => {
					return <li key={i}> {post.title}</li>;
				})}
			<ResponsivePagination
				current={currentPage}
				total={posts && posts.totalPages}
				onPageChange={handlePagination}
			/>
		</div>
	);
};

export default LatestPosts;

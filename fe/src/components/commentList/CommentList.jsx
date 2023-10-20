import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5050/posts/byId/${postId}/comments`
				);
				const commentData = response.data;
				setComments(commentData);
				console.log(comments);
			} catch (error) {
				console.error("Errore nel recupero dei commenti", error);
			}
		};

		fetchComments();
	}, [postId]);
	return (
		<div>
			<h3>Commenti:</h3>
			<ul>
				{comments && comments.length > 0 ? (
					comments.map(comment => <li key={comment._id}>{comment.comment}</li>)
				) : (
					<p>Nessun commento per questo post</p>
				)}
			</ul>
		</div>
	);
};

export default CommentList;

import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_SERVER_BASE_URL}/posts/byId/${postId}/comments`
				);
				const data = await response.json();
				setComments(data.comments);
				console.log(data);
			} catch (error) {
				console.error("Errore nel recupero dei commenti", error);
			}
		};

		fetchComments();
	}, [postId]);
	return (
		<div>
			<strong>Commenti:</strong>
			<ul>
				{comments &&
					comments.map(comment => <li key={comment._id}>{comment.comment}</li>)}
			</ul>
		</div>
	);
};

export default CommentList;

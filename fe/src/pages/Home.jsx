import React, { useState } from "react";
import MainLayouts from "../layouts/MainLayouts";
import LatestPosts from "../components/latestPost/LatestPosts";
import { PlusCircle } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import FormPost from "../components/formPost/FormPost";
import PostModal from "../components/postModal/PostModal";
import NewBlog from "../components/blog/NewBlog";

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => setIsModalOpen(!isModalOpen);
	return (
		<>
			<MainLayouts>
				<Button
					onClick={toggleModal}
					className="d-flex align-items-center blog-navbar-add-button bg-success"
				>
					{" "}
					<PlusCircle className="mx-1" />
					Crea Post
				</Button>
				{isModalOpen && <PostModal close={setIsModalOpen} />}
				<LatestPosts />
			</MainLayouts>
		</>
	);
};

export default Home;

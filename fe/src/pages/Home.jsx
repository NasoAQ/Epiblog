import React from "react";
import MainLayouts from "../layouts/MainLayouts";
import LatestPosts from "../components/latestPost/LatestPosts";

const Home = () => {
	return (
		<>
			<MainLayouts>
				<LatestPosts />
			</MainLayouts>
		</>
	);
};

export default Home;

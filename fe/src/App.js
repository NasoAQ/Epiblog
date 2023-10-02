import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import MyFooter from "./components/footer/BlogFooter";
import { myLinksFoot } from "./data/navlinks";

function App() {
	const handleGetPosts = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_SERVER_BASE_URL}/posts`
		);
		const data = response.json();
		console.log(data);
	};
	return (
		<>
			<NavBar />
			<MyFooter links={myLinksFoot} />
		</>
	);
}

export default App;

import React from "react";
import Home from "../src/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoutes from "./middlewear/ProtectedRoutes";

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
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Login />} />

					<Route element={<ProtectedRoutes />}>
						<Route path="/home" element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

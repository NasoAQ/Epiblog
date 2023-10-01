import "./App.css";

function App() {
	const handleGetPosts = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_SERVER_BASE_URL}/posts`
		);
		const data = response.json();
		console.log(data);
	};
	return <div className="App">test</div>;
}

export default App;

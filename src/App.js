import "./App.css";
import BookData from "./Data.json";
import SearchBar from "./Components/SearchBar";

function App() {
	return (
		<div className="App">
			<SearchBar placeholder="Enter a Book name..." data={BookData} />
		</div>
	);
}

export default App;

import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
	const [filteredData, setFiteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState([]);

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			return value.title.toLowerCase().includes(searchWord.toLowerCase());
		});
		if (searchWord === "") {
			setFiteredData([]);
		} else {
			setFiteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFiteredData([]);
		setWordEntered("");
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					type="text"
					placeholder={placeholder}
					onChange={handleFilter}
					value={wordEntered}
				/>
				<div className="searchIcon">
					{filteredData.length === 0 ? (
						<SearchIcon />
					) : (
						<CloseIcon id="clearbtn" onClick={clearInput} />
					)}
				</div>
			</div>
			{filteredData.length !== 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 15).map((value, key) => {
						return (
							<a
								className="dataItem"
								href={value.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<p>{value.title}</p>
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
}
export default SearchBar;

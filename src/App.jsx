import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Photo } from "./components/Photo";
import { Controls } from "./components/Controls";
import { persons } from "./data.js";

function App() {
	const [imgIndex, setImgIndex] = useState(0);

	return (
		<div className="max-w-5x1 mx-auto p-4 bg-teal-100 rounded-x1 shadow-lg h-screen">
			<Header current={imgIndex + 1} total={persons.length} />
			<Photo image={persons[imgIndex]} />
			<Controls setImgIndex={setImgIndex} total={persons.length} />
		</div>
	);
}

export default App;

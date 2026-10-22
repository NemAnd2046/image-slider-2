import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Counter } from "./components/Counter";
import { PersList } from "./components/PersList";
import { persons } from "./data.js";

function App() {
	const [pers, setPers] = useState(persons);

	return (
		<div className="bg-linear-to-br from-pink-700 to-violet-700">
			<div className="main">
				<Header />
				<Counter count={pers.length} />
				{pers.length != 0 && <PersList pers={pers} setPers={setPers} />}
			</div>
		</div>
	);
}

export default App;
